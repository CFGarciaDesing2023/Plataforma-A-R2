document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const Email = document.getElementById("Email");
  const Contraseña = document.getElementById("Contraseña");
  const TipoUsuario = document.getElementById("TipoUsuario");
  const TipoDocumento = document.getElementById("TipoDocumento");
  const NumeroDocumento = document.getElementById("NumeroDocumento");
  const Nombres = document.getElementById("Nombres");
  const Apellidos = document.getElementById("Apellidos");

  // Cargar datos del usuario al formulario
  fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroUsuario/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        Email.value = user.Email;
        Contraseña.value = user.Contraseña;
        TipoUsuario.value = user.TipoUsuario;
        TipoDocumento.value = user.TipoDocumento;
        NumeroDocumento.value = user.NumeroDocumento;
        Nombres.value = user.Nombres;
        Apellidos.value = user.Apellidos;
      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", (event) => {
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
      "UsuarioID": id,
      "Email": Email.value,
      "Contraseña": Contraseña.value,
      "TipoUsuario": TipoUsuario.value,
      "TipoDocumento": TipoDocumento.value,
      "NumeroDocumento": NumeroDocumento.value,
      "Nombres": Nombres.value,
      "Apellidos": Apellidos.value,
    };

    fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroUsuario/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "ConsultarUsuarios.html";
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  });
});
