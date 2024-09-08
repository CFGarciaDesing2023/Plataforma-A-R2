document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const AlojamientoID = urlParams.get("AlojamientoID");
 
  const AdministradorID = document.getElementById("AdministradorID");
  const TipoAlojamiento= document.getElementById("TipoAlojamiento");
  const Nombre = document.getElementById("Nombre");
  const Ubicacion = document.getElementById("Ubicacion");
  const Telefono = document.getElementById("Telefono");
  const DescripcionInstalaciones = document.getElementById("DescripcionInstalaciones");
  const FechaRegistro = document.getElementById("FechaRegistro");


  fetch("http://ApiSENAProyect2024.somee.com/api/RegistroAlojamientos/" + AlojamientoID)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        AdministradorID.value = user.AdministradorID;
        TipoAlojamiento.value = user.TipoAlojamiento;
        Nombre.value = user.Nombre;
        Ubicacion.value = user.Ubicacion;
        Telefono.value = user.Telefono;
        DescripcionInstalaciones.value = user.DescripcionInstalaciones;
        FechaRegistro.value = user.FechaRegistro;

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "UsuarioID": UsuarioID,
      "Email": Email.value,
      "Contraseña": Contraseña.value,
      "TipoUsuario": TipoUsuario.value,
      "TipoDocumento": TipoDocumento.value,
      "NumeroDocumento": NumeroDocumento.value,
      "Nombres": Nombres.value,
      "Apellidos": Apellidos.value,
      "FechaRegistro": FechaRegistro.value
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
