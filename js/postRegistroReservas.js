document.addEventListener("DOMContentLoaded", () => {

  const registrar = document.getElementById("registrar");

  registrar.addEventListener("click", (e) => {
      e.preventDefault(); // Evitar el comportamiento por defecto de redirección del botón

      // Obtener los valores de los campos
      const ClienteID = document.getElementById("ClienteID").value;
      const AlojamientoID = document.getElementById("AlojamientoID").value;
      const FechaIngreso = document.getElementById("FechaIngreso").value;
      const FechaSalida = document.getElementById("FechaSalida").value;
      const HabitacionID = document.getElementById("HabitacionID").value;
      const NumeroPersonas = document.getElementById("NumeroPersonas").value;
      const ValorTotal = document.getElementById("ValorTotal").value;
      const Estado = document.getElementById("Estado").value;

      // Validar si todos los campos están llenos
      if (!ClienteID || !AlojamientoID || !FechaIngreso || !FechaSalida || !HabitacionID || !NumeroPersonas || !ValorTotal || !Estado) {
          alert("Por favor, complete todos los campos.");
          return; // No enviar la solicitud si falta información
      }

      // Validar si la fecha de salida es posterior a la de ingreso
      const fechaIngreso = new Date(FechaIngreso);
      const fechaSalida = new Date(FechaSalida);

      if (fechaSalida <= fechaIngreso) {
          alert("La fecha de salida debe ser posterior a la fecha de ingreso.");
          return; // No enviar la solicitud si la fecha de salida no es mayor a la de ingreso
      }

     

      const data = {
          ClienteID: ClienteID,
          AlojamientoID: AlojamientoID,
          FechaIngreso: FechaIngreso,
          FechaSalida: FechaSalida,
          HabitacionID: HabitacionID,
          NumeroPersonas: NumeroPersonas,
          ValorTotal: ValorTotal,
          Estado: Estado
      };

      // Realizar la solicitud fetch
      fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroReserva", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then((response) => {
          if (response.ok) {
              console.log("Datos enviados correctamente");
              window.location.href = "../html/ConsultarReservas.html";
          } else {
              console.error("Error al enviar la solicitud:", response.status);
              alert("Hubo un error al registrar la reserva.");
          }
      })
      .catch((error) => {
          console.error("Error al enviar la solicitud:", error);
          alert("Error en la conexión al servidor.");
      });
  });

});
