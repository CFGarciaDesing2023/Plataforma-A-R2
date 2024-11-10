document.addEventListener("DOMContentLoaded", () => {

  const registrar = document.getElementById("registrar");

  registrar.addEventListener("click", (e) => {
      const AlojamientoID = document.getElementById("AlojamientoID").value;
      const TipoHabitacion = document.getElementById("TipoHabitacion").value;
      const Descripcion = document.getElementById("Descripcion").value;
      const PrecioNoche = parseFloat(document.getElementById("PrecioNoche").value);  // Asegurarse de que es un número
      const Estado = document.getElementById("Estado").value;

      // Verificar si algún campo está vacío
      if (!AlojamientoID || !TipoHabitacion || !Descripcion || isNaN(PrecioNoche) || !Estado) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      const data = {
          AlojamientoID: AlojamientoID,
          TipoHabitacion: TipoHabitacion,
          Descripcion: Descripcion,
          PrecioNoche: PrecioNoche,
          Estado: Estado
      };

      fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroHabitacion", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(async (response) => {
          if (response.ok) {
              console.log("Datos enviados correctamente");
              window.location.href = "../html/ConsultarHabitacion.html";  // Asegúrate de que la ruta es correcta
          } else {
              const errorData = await response.json();
              console.error("Error al enviar la solicitud:", errorData);
          }
      })
      .catch((error) => {
          console.error("Error al enviar la solicitud:", error);
      });
  });

});
