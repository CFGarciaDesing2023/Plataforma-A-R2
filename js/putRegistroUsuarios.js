document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");


  const Email = document.getElementById("Email");
  const Contraseña = document.getElementById("Contraseña");
  const TipoUsuario = document.getElementById("TipoUsuario ");
  const TipoDocumento = document.getElementById("TipoDocumento");
  const NumeroDocumento = document.getElementById("NumeroDocumento");
  const Nombres = document.getElementById("Nombres");
  const Apellidos = document.getElementById("Apellidos");


  fetch("http://ApiSENAProyect2024.somee.com/api/RegistroUsuario/" + id)
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

  btnEditar.addEventListener("click", () => {

    const data = {
      "UsuarioID": id,
      "Email": Email.value,
      "Contraseña": Contraseña.value,
      "TipoUsuario": TipoUsuario.value,
      "TipoDocumento": TipoDocumento.value,
      "NumeroDocumento": NumeroDocumento.value,
      "Nombres": Nombres.value,
      "Apellidos": Apellidos.value
    
  }


    fetch("http://ApiSENAProyect2024.somee.com/api/RegistroUsuario/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../view/index.html"
          
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }); 
});
