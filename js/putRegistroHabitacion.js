document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const AlojamientoID = document.getElementById("AlojamientoID");
  const TipoHabitacion = document.getElementById("TipoHabitacion");
  const Descripcion = document.getElementById("Descripcion");
  const PrecioNoche = document.getElementById("PrecioNoche");
  const Estado = document.getElementById("Estado");

  // Cargar datos de la habitación al formulario
  fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroHabitacion/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((habitacion) => {
        AlojamientoID.value = habitacion.AlojamientoID;
        TipoHabitacion.value = habitacion.TipoHabitacion;
        Descripcion.value = habitacion.Descripcion;
        PrecioNoche.value = habitacion.PrecioNoche;
        Estado.value = habitacion.Estado;
      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  // Manejar el evento click del botón de editar
  btnEditar.addEventListener("click", (event) => {
    // Validación de que los campos no estén vacíos
    if (
      AlojamientoID.value.trim() === "" ||
      TipoHabitacion.value.trim() === "" ||
      Descripcion.value.trim() === "" ||
      PrecioNoche.value.trim() === "" ||
      Estado.value.trim() === ""
    ) {
      event.preventDefault(); // Prevenir el envío de la solicitud
      alert("Por favor, complete todos los campos antes de continuar.");
      return; // No proceder si algún campo está vacío
    }

    // Crear el objeto con los datos de la habitación
    const data = {
      "HabitacionID": id,
      "AlojamientoID": AlojamientoID.value,
      "TipoHabitacion": TipoHabitacion.value,
      "Descripcion": Descripcion.value,
      "PrecioNoche": PrecioNoche.value,
      "Estado": Estado.value,
    };

    // Enviar la solicitud PUT
    fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroHabitacion/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../html/ConsultarHabitacion.html";
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  });
});
