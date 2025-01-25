const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  // validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields!');
    return;
  }

  console.log('Form submitted:', name, email, message);
});
