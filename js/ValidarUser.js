

// Obtener los valores del formulario de inicio de sesión
const Email = document.getElementById('Email').value;
const Contraseña = document.getElementById('Contraseña').value;

// Validar el correo electrónico y la contraseña
if (Email && password) {
  // Realizar una solicitud a la API para verificar las credenciales
  fetch('http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/Login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ Email, Contraseña })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Inicio de sesión exitoso, redirigir al usuario a la página principal
      window.location.href = 'PerfilUsuario.html';
    } else {
      // Mostrar un mensaje de error al usuario
      alert('Correo electrónico o contraseña incorrectos');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
} else {
  // Mostrar un mensaje de error si los campos están vacíos
  alert('Por favor, complete todos los campos');
}

