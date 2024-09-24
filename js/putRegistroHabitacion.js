document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const AlojamientoID= document.getElementById("AlojamientoID");
  const TipoHabitacion = document.getElementById("TipoHabitacion");
  const Descripcion = document.getElementById("Descripcion");
  const PrecioNoche = document.getElementById("PrecioNoche");
  const Estado = document.getElementById("Estado");


  fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroHabitacion/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        
        AlojamientoID.value = user.AlojamientoID;
        TipoHabitacion.value = user.TipoHabitacion;
        Descripcion.value = user.Descripcion;
        PrecioNoche.value = user.PrecioNoche;
        Estado.value = user.Estado;

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "HabitacionID": id,
      "AlojamientoID": AlojamientoID.value,
      "TipoHabitacion": TipoHabitacion.value,
      "Descripcion": Descripcion.value,
      "PrecioNoche": PrecioNoche.value,
      "Estado": Estado.value
      
  }


    fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroHabitacion/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../html/ConsultarHabitacion.html"
          
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }); 
});
