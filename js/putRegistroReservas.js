document.addEventListener("DOMContentLoaded", () => { 
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
 
  const ClienteID = document.getElementById("ClienteID");
  const AlojamientoID = document.getElementById("AlojamientoID");
  const FechaIngreso = document.getElementById("FechaIngreso");
  const FechaSalida = document.getElementById("FechaSalida");
  const HabitacionID = document.getElementById("HabitacionID");
  const NumeroPersonas = document.getElementById("NumeroPersonas");
  const ValorTotal = document.getElementById("ValorTotal");
  const Estado = document.getElementById("Estado");

  // Obtener los datos de la reserva
  fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroReserva/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((reserva) => {
        ClienteID.value = reserva.ClienteID;
        AlojamientoID.value = reserva.AlojamientoID;
        FechaIngreso.value = reserva.FechaIngreso;
        FechaSalida.value = reserva.FechaSalida;
        HabitacionID.value = reserva.HabitacionID;
        NumeroPersonas.value = reserva.NumeroPersonas;
        ValorTotal.value = reserva.ValorTotal;
        Estado.value = reserva.Estado;
      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  // Manejar el evento click para editar
  btnEditar.addEventListener("click", (event) => {
    
    // Validación de que ningún campo esté vacío
    if (
      ClienteID.value.trim() === "" ||
      AlojamientoID.value.trim() === "" ||
      FechaIngreso.value.trim() === "" ||
      FechaSalida.value.trim() === "" ||
      HabitacionID.value.trim() === "" ||
      NumeroPersonas.value.trim() === "" ||
      ValorTotal.value.trim() === "" ||
      Estado.value.trim() === ""
    ) {
      event.preventDefault(); // Prevenir el envío de la solicitud
      alert("Por favor, complete todos los campos antes de continuar.");
      return; // No proceder si algún campo está vacío
    }

    // Validación de que la FechaSalida sea posterior a FechaIngreso
    const fechaIngreso = new Date(FechaIngreso.value);
    const fechaSalida = new Date(FechaSalida.value);

    if (fechaSalida <= fechaIngreso) {
      event.preventDefault(); // Prevenir el envío de la solicitud
      alert("La fecha de salida debe ser posterior a la fecha de entrada.");
      return; // No proceder si la FechaSalida no es posterior a FechaIngreso
    }

    // Crear el objeto con los datos de la reserva
    const data = {
      "ReservaID": id,
      "ClienteID": ClienteID.value,
      "AlojamientoID": AlojamientoID.value,
      "FechaIngreso": FechaIngreso.value,
      "FechaSalida": FechaSalida.value,
      "HabitacionID": HabitacionID.value,
      "NumeroPersonas": NumeroPersonas.value,
      "ValorTotal": ValorTotal.value,
      "Estado": Estado.value
    };

    // Enviar la solicitud PUT
    fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroReserva/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../html/ConsultarReservas.html";
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  });
});
