document.addEventListener("DOMContentLoaded", () => {
  const btnRegistrar = document.getElementById("Registrar");

  const urlParams = new URLSearchParams(window.location.search);
  const Email = urlParams.get("Email");
  const Contraseña = urlParams.get("Contraseña");

  const TipoUsuario = document.getElementById("TipoUsuario");
  const TipoDocumento = document.getElementById("TipoDocumento");
  const NumeroDocumento = document.getElementById("NumeroDocumento");
  const Nombres = document.getElementById("Nombres");
  const Apellidos = document.getElementById("Apellidos");

  // Cargar datos del usuario al formulario
  fetch(`http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroUsuario?Email=${Email}&Contraseña=${Contraseña}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const user = data[0]; // Si la respuesta es un array con un solo usuario
      TipoUsuario.value = user.TipoUsuario;
      TipoDocumento.value = user.TipoDocumento;
      NumeroDocumento.value = user.NumeroDocumento;
      Nombres.value = user.Nombres;
      Apellidos.value = user.Apellidos;
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );


      btnRegistrar.addEventListener("click", (event) => {
        // Validar que los campos no estén vacíos
        if (
          Email.value.trim() === "" ||
          Contraseña.value.trim() === "" ||
          TipoUsuario.value.trim() === "" ||
          TipoDocumento.value.trim() === "" ||
          NumeroDocumento.value.trim() === "" ||
          Nombres.value.trim() === "" ||
          Apellidos.value.trim() === ""
        ) {
          event.preventDefault(); // Prevenir que se envíe la solicitud
          alert("Por favor, complete todos los campos antes de continuar.");
          return; // No proceder si algún campo está vacío
        }
    
        const data = {
          "Email": Email.value,
          "Contraseña": Contraseña.value,
          "TipoUsuario": TipoUsuario.value,
          "TipoDocumento": TipoDocumento.value,
          "NumeroDocumento": NumeroDocumento.value,
          "Nombres": Nombres.value,
          "Apellidos": Apellidos.value,
        };
      });
    });
