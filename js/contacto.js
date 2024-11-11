// validations.js
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusMessage = document.getElementById('statusMessage');

    // Limpia el mensaje de estado
    statusMessage.textContent = '';

    // Validaciones
    if (!name) {
        statusMessage.textContent = 'Por favor ingresa tu nombre.';
        statusMessage.style.color = 'red';
        return false;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        statusMessage.textContent = 'Por favor ingresa un correo válido.';
        statusMessage.style.color = 'red';
        return false;
    }

    if (!phone || isNaN(phone) || phone.length < 7) {
        statusMessage.textContent = 'Por favor ingresa un teléfono válido.';
        statusMessage.style.color = 'red';
        return false;
    }

    if (!message) {
        statusMessage.textContent = 'Por favor ingresa tu mensaje.';
        statusMessage.style.color = 'red';
        return false;
    }

    // Si todo es correcto, muestra el modal de éxito
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();

    // Limpia el formulario después de enviar
    document.getElementById('contactForm').reset();

    // Evita que el formulario se envíe de manera tradicional
    return false;  // No enviar el formulario
}
