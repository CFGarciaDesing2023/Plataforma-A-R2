document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
 
  const ClienteID = document.getElementById("ClienteID");
  const AlojamientoID = document.getElementById("AlojamientoID");
  const FechaIngreso = document.getElementById("FechaIngreso");
  const FechaSalida = document.getElementById("FechaSalida");
  const TipoHabitacion = document.getElementById("TipoHabitacion");
  const HabitacionID = document.getElementById("HabitacionID");
  const NumeroPersonas = document.getElementById("NumeroPersonas");
  const ValorTotal = document.getElementById("ValorTotal");
  const Estado = document.getElementById("Estado");


  fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroReserva/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
    
        ClienteID.value = user.ClienteID;
        AlojamientoID.value = user.AlojamientoID;
        FechaIngreso.value = user.FechaIngreso;
        FechaSalida.value = user.FechaSalida;
        TipoHabitacion.value = user.TipoHabitacion;
        HabitacionID.value = user.HabitacionID;
        NumeroPersonas.value = user.NumeroPersonas;
        ValorTotal.value = user.ValorTotal;
        Estado.value = user.Estado;
        

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "ReservaID": id,
      "ClienteID": ClienteID.value,
      "AlojamientoID": AlojamientoID.value,
      "FechaIngreso": FechaIngreso.value,
      "FechaSalida": FechaSalida.value,
      "TipoHabitacion": TipoHabitacion.value,
      "HabitacionID": HabitacionID.value,
      "NumeroPersonas": NumeroPersonas.value,
      "ValorTotal": ValorTotal.value,
      "Estado": Estado.value
  }


    fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroReserva/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../html/ConsultarReservas.html"
          
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }); 
});
