document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const ReservaID = urlParams.get("ReservaID");
 
  const ClienteID = document.getElementById("ClienteID");
  const AlojamientoID = document.getElementById("AlojamientoID ");
  const FechaIngreso = document.getElementById("FechaIngreso");
  const FechaSalida = document.getElementById("FechaSalida");
  const TipoHabitacion = document.getElementById("TipoHabitacion");
  const HabitacionID = document.getElementById("HabitacionID");
  const NumeroPersonas = document.getElementById("NumeroPersonas");
  const ValorTotal = document.getElementById("ValorTotal");
  const Estado = document.getElementById("Estado");


  fetch("http://ApiSENAProyect2024.somee.com/api/RegistroReservas/" + AlojamientoID)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        ReservaID.value = user.ReservaID;
        ClienteID.value = user.ClienteID;
        AlojamientoID.value = user.AlojamientoID;
        FechaIngreso.value = user.FechaIngreso;
        FechaSalida .value = user.FechaSalida ;
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
