window.addEventListener("load", function () {
  // Selecciona el ícono para mostrar/ocultar la contraseña
  const showPassword = document.querySelector(".show-password");

  // Asegúrate de que el ícono existe en el DOM antes de añadir el evento
  if (showPassword) {
    showPassword.addEventListener("click", () => {
      // Selecciona el campo de la contraseña
      const passwordInput = document.querySelector("#password");

      if (passwordInput) {
        if (passwordInput.type === "text") {
          passwordInput.type = "password";
          showPassword.classList.remove("fa-eye-slash");
          showPassword.classList.add("fa-eye");
        } else {
          passwordInput.type = "text";
          showPassword.classList.remove("fa-eye");
          showPassword.classList.add("fa-eye-slash");
        }
      }
    });
  }
});

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        const formData = new FormData(form);
        // Obtener los valores del formulario
        const correo = formData.get("correo");
        const contraseña = formData.get("contraseña");

        // Crear el objeto de datos para enviar
        const data = {
          Correo: correo,
          Contraseña: contraseña,
        };

        // Realizar la petición a la API
        fetch("https://www.appsegura.somee.com/api/Login", {
          method: "Post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.Success) {
              Swal.fire({
                icon: "success",
                title: "Exito",
                text: data.Mensaje,
                showConfirmButton: false,
                timer: 1500, // El tiempo en milisegundos
                didOpen: () => {
                  Swal.showLoading(); // Mostrar una barra de carga
                },
                willClose: () => {
                  form.reset();
                  window.location.href = "../view/verificarLink.html";
                },
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Error",
                text: data.Mensaje,
                confirmButtonText: "OK",
                customClass: {
                  title: "custom-title-unsafe", // Aplicar la clase personalizada al título
                  htmlContainer: "custom-html", // Aplicar la clase personalizada al contenido
                },
              });
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: error.Mensaje || "Hubo un error.",
            });
          });
      }
      form.classList.add("was-validated");
    });
  });
})();


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