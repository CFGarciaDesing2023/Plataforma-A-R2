document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const HabitacionID = urlParams.get("HabitacionID");
  const AlojamientoID= document.getElementById("AlojamientoID");
  const TipoHabitacion = document.getElementById("TipoHabitacion");
  const Descripcion = document.getElementById("Descripcion");
  const Costo = document.getElementById("Costo");
  const FechaRegistro = document.getElementById("FechaRegistro");
  const Estado = document.getElementById("Estado");


  fetch("http://ApiSENAProyect2024.somee.com/api/RegistroHabitacion/" + AlojamientoID)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        HabitacionID.value = user.HabitacionID;
        AlojamientoID.value = user.AlojamientoID;
        TipoHabitacion.value = user.TipoHabitacion;
        Descripcion.value = user.Descripcion;
        Costo.value = user.Costo;
        FechaRegistro.value = user.FechaRegistro;
        Estado.value = user.Estado;

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "HabitacionID": HabitacionID,
      "AlojamientoID": AlojamientoID.value,
      "TipoHabitacion": TipoHabitacion.value,
      "Descripcion": Descripcion.value,
      "Costo": Costo.value,
      "FechaRegistro": FechaRegistro.value,
      "Estado": Estado.value,
      
  }


    fetch("http://ApiSENAProyect2024.somee.com/api/RegistroHabitacion/", {
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
