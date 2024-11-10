// Función para autenticar al usuario
async function login(correo, contraseña) {
  const url = "http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/Login"; // URL de tu API
  const data = {
      Correo: correo,
      Contraseña: contraseña
  };

  try {
      const response = await fetch(url, {
          method: "POST",  // Usamos POST porque estamos enviando datos
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)  // Convertimos el objeto de datos a JSON
      });

      const result = await response.json();

      if (response.ok) {
          // Si la respuesta es exitosa, mostramos los datos del usuario
          console.log("Usuario autenticado:", result);
          alert(`Bienvenido, ${result.nombre}`);
          // Aquí podrías redirigir al usuario o realizar otras acciones
      } else {
          // Si la respuesta es error (401 Unauthorized), mostramos un mensaje
          console.error("Error:", result.mensaje);
          alert(result.mensaje);
      }
  } catch (error) {
      console.error("Hubo un error al hacer la solicitud:", error);
      alert("Hubo un error al intentar iniciar sesión.");
  }
}

// Llamar a la función con datos de prueba
login("juan@ejemplo.com", "12345");



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