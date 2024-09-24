document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
 
  const AdministradorID = document.getElementById("AdministradorID");
  const TipoAlojamiento= document.getElementById("TipoAlojamiento");
  const Nombre = document.getElementById("Nombre");
  const Ubicacion = document.getElementById("Ubicacion");
  const DescripcionInstalaciones = document.getElementById("DescripcionInstalaciones");
  const Capacidad_Habitaciones = document.getElementById("Capacidad_Habitaciones");



  fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroAlojamientos/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        
        AdministradorID.value = user.AdministradorID;
        TipoAlojamiento.value = user.TipoAlojamiento;
        Nombre.value = user.Nombre;
        Ubicacion.value = user.Ubicacion;
        DescripcionInstalaciones.value = user.DescripcionInstalaciones;
        Capacidad_Habitaciones.value = user.Capacidad_Habitaciones;
        

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "AlojamientoID": id,
      "AdministradorID": AdministradorID.value,
      "TipoAlojamiento": TipoAlojamiento.value,
      "Nombre": Nombre.value,
      "Ubicacion": Ubicacion.value,
      "DescripcionInstalaciones": DescripcionInstalaciones.value,
      "Capacidad_Habitaciones": Capacidad_Habitaciones.value
  }


    fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroAlojamientos/", {
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
