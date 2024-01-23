const formulario = document.getElementById('form');
const btnSubmit = document.getElementById('btn-submit');
const btnReset = document.getElementById('btn-reset');

const campos = {
  nombre: {
    element: document.getElementById('nombre-form'),
    mensajeElement: document.getElementById('msj-nombre'),
    validationRegex: /^([a-zA-ZáéíóúÁÉÍÓÚüÜ\s']{3,40})$/,
    mensajeError: 'Nombre no válido, solo se pueden usar letras y el valor mínimo es de 3 caracteres',
    mensajeSuccess: 'Campo correcto'
  },
  apellidos: {
    element: document.getElementById('apellidos-form'),
    mensajeElement: document.getElementById('msj-apellidos'),
    validationRegex: /^([a-zA-ZáéíóúÁÉÍÓÚüÜ\s']{4,60})$/,
    mensajeError: 'Apellidos no válidos, solo se pueden usar letras y el valor mínimo es de 4 caracteres',
    mensajeSuccess: 'Campo correcto'
  },
  email: {
    element: document.getElementById('email-form'),
    mensajeElement: document.getElementById('msj-email'),
    validationRegex: /^(.+@.+..+)$/,
    mensajeError: 'Email no válido (ejemplo: correo@mail.com)',
    mensajeSuccess: 'Campo correcto'
  },
  telefono: {
    element: document.getElementById('telefono-form'),
    mensajeElement: document.getElementById('msj-telefono'),
    validationRegex: /(^([0-9]{9,9})|^)$/,
    mensajeError: 'Teléfono no válido, debe tener solo 9 caracteres (ejemplo: 612345678)',
    mensajeSuccess: 'Campo correcto'
  },
  textarea: {
    element: document.getElementById('textarea-form'),
    mensajeElement: document.getElementById('msj-textarea'),
    validationRegex: /^([a-zA-ZáéíóúÁÉÍÓÚüÜ\s']{2,60})$/,
    mensajeError: 'Campo no válido, el valor mínimo es de 2 caracteres',
    mensajeSuccess: 'Campo correcto'
  }
};

function validacionDinamica(campo) {
  const value = campo.element.value.trim();

  if (value === '') {
    campo.mensajeElement.innerHTML = campo.mensajeError;
    campo.mensajeElement.classList.toggle('text-danger', true);
    campo.element.style.border = '1px solid var(--bs-danger)';
  } else if (campo.validationRegex.test(value)) {
    campo.mensajeElement.innerHTML = '';
    campo.mensajeElement.classList.remove('text-danger');
    campo.element.style.border = '1px solid var(--bs-success)';
  } else {
    campo.mensajeElement.innerHTML = campo.mensajeError;
    campo.mensajeElement.classList.toggle('text-success', false);
    campo.mensajeElement.classList.toggle('text-danger', true);
    campo.element.style.border = '1px solid red';
  }

  activarBtn();
}

function activarBtn() {
  for (const campoKey in campos) {
    const campo = campos[campoKey];
    if (campo.element.value.trim() === '' || !campo.validationRegex.test(campo.element.value.trim())) {
      btnSubmit.disabled = true;
      return;
    }
  }
  btnSubmit.disabled = false;
}

formulario.addEventListener('keyup', function (event) {
  const campoKey = event.target.id.replace('-form', ''); 
  const campo = campos[campoKey];
  validacionDinamica(campo);
});

formulario.addEventListener('reset', function () {
  for (const campoKey in campos) {
    const campo = campos[campoKey];
    campo.mensajeElement.innerHTML = '';
    campo.element.style.border = '1px solid var(--bs-border-color)';
  }
  btnSubmit.disabled = true;
})
