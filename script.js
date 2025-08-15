document.addEventListener('DOMContentLoaded', () => {
  const words = ['Web Designer', 'Back-end Developer', 'Bot Developer'];
  let i = 0;
  let j = 0;
  let isDeleting = false;
  const typedText = document.getElementById('typed-text');

  function type() {
    const word = words[i];
    if (!isDeleting) {
      typedText.textContent = word.substring(0, j++);
      if (j > word.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
    } else {
      typedText.textContent = word.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : 150);
  }

  type();

  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.section');
  const skillFills = document.querySelectorAll('.skill-fill');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      sections.forEach(sec => sec.classList.remove('active'));
      const target = document.querySelector(link.getAttribute('href'));
      target.classList.add('active');

      if (target.id === 'skills') {
        skillFills.forEach(fill => {
          fill.style.width = fill.dataset.fill;
        });
      } else {
        skillFills.forEach(fill => {
          fill.style.width = 0;
        });
      }
    });
  });
});
