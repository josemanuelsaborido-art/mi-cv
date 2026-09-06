const form = document.getElementById('contactForm');
const status = document.querySelector('.form-status');

if (form && status) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      status.textContent = 'Por favor, completa todos los campos.';
      return;
    }

    status.textContent = 'Gracias. Tu mensaje está listo para ser enviado.';
    form.reset();
  });
}
