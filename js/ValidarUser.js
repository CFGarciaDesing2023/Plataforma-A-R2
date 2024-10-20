document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores de usuario y contraseña ingresados
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validar los campos (puedes agregar tus propias validaciones aquí)
  if (username === "" || password === "") {
    alert("Por favor, ingresa tu usuario y contraseña");
    return;
  }

  // Realizar la lógica de inicio de sesión (puedes hacer una llamada a una API o verificar en una base de datos)
  if (username === "admin" && password === "123456") {
    alert("Inicio de sesión exitoso");
    window.location.href="indexLogueado.html";
    // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});

/*
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
      window.location.href = 'index.html';
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

*/