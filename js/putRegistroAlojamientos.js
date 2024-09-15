document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
 
  const AdministradorID = document.getElementById("AdministradorID");
  const TipoAlojamiento= document.getElementById("TipoAlojamiento");
  const Nombre = document.getElementById("Nombre");
  const Ubicacion = document.getElementById("Ubicacion");
  const Telefono = document.getElementById("Telefono");
  const DescripcionInstalaciones = document.getElementById("DescripcionInstalaciones");



  fetch("http://ApiSENAProyect2024.somee.com/api/RegistroAlojamientos/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        
        AdministradorID.value = user.AdministradorID;
        TipoAlojamiento.value = user.TipoAlojamiento;
        Nombre.value = user.Nombre;
        Ubicacion.value = user.Ubicacion;
        Telefono.value = user.Telefono;
        DescripcionInstalaciones.value = user.DescripcionInstalaciones;
        

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "AlojamientoID": id,
      "AdministradorID": AdministradorID.value,
      "Nombre": Nombre.value,
      "Ubicacion": Ubicacion.value,
      "Telefono": Telefono.value,
      "DescripcionInstalaciones": DescripcionInstalaciones.value
 
 
  }


    fetch("http://ApiSENAProyect2024.somee.com/api/RegistroAlojamientos/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../html/ConsultaRegistroAlojamiento.html"
          
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }); 
});
