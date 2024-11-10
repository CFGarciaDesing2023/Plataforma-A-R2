registrar.addEventListener("click", async (e) => {
  e.preventDefault();
  
  const Email = document.getElementById("Email").value;
  const Contraseña = document.getElementById("Contraseña").value;
  const TipoUsuario = document.getElementById("TipoUsuario").value;
  const TipoDocumento = document.getElementById("TipoDocumento").value;
  const NumeroDocumento = document.getElementById("NumeroDocumento").value;
  const Nombres = document.getElementById("Nombres").value;
  const Apellidos = document.getElementById("Apellidos").value;

  // Validación individual de campos vacíos
  if (!Email) {
      alert("El campo 'Correo Electrónico' está vacío.");
      return;
  }
  if (!Contraseña) {
      alert("El campo 'Contraseña' está vacío.");
      return;
  }
  if (!TipoUsuario) {
      alert("El campo 'Tipo de Usuario' está vacío.");
      return;
  }
  if (!TipoDocumento) {
      alert("El campo 'Tipo de Documento' está vacío.");
      return;
  }
  if (!NumeroDocumento) {
      alert("El campo 'Número de Documento' está vacío.");
      return;
  }
  if (!Nombres) {
      alert("El campo 'Nombres' está vacío.");
      return;
  }
  if (!Apellidos) {
      alert("El campo 'Apellidos' está vacío.");
      return;
  }
  
  // Si todos los campos están completos, continuamos con el registro
  const data = {
      Email,
      Contraseña,
      TipoUsuario,
      TipoDocumento,
      NumeroDocumento,
      Nombres,
      Apellidos
  };
  
  try {
      const response = await fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroUsuario", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      });
      
      if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../html/ConsultarUsuarios.html";
      } else {
          const errorText = await response.text(); // Leer la respuesta como texto
          console.error("Error al enviar la solicitud:", errorText);
          alert("Hubo un error al registrar los datos. Intenta nuevamente.");
      }
  } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      alert("Hubo un error al enviar los datos. Por favor, intenta nuevamente.");
  }
});
