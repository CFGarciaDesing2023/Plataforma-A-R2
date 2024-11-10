document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const AdministradorID = document.getElementById("AdministradorID");
  const TipoAlojamiento = document.getElementById("TipoAlojamiento");
  const Nombre = document.getElementById("Nombre");
  const Ubicacion = document.getElementById("Ubicacion");
  const DescripcionInstalaciones = document.getElementById("DescripcionInstalaciones");

  // Cargar datos del alojamiento al formulario
  fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroAlojamientos/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((alojamiento) => {
        AdministradorID.value = alojamiento.AdministradorID;
        TipoAlojamiento.value = alojamiento.TipoAlojamiento;
        Nombre.value = alojamiento.Nombre;
        Ubicacion.value = alojamiento.Ubicacion;
        DescripcionInstalaciones.value = alojamiento.DescripcionInstalaciones;
      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  // Manejar el evento click del botón de editar
  btnEditar.addEventListener("click", (event) => {
    // Validación de que los campos no estén vacíos
    if (
      AdministradorID.value.trim() === "" ||
      TipoAlojamiento.value.trim() === "" ||
      Nombre.value.trim() === "" ||
      Ubicacion.value.trim() === "" ||
      DescripcionInstalaciones.value.trim() === ""
    ) {
      event.preventDefault(); // Prevenir el envío de la solicitud
      alert("Por favor, complete todos los campos antes de continuar.");
      return; // No proceder si algún campo está vacío
    }

    // Crear el objeto con los datos del alojamiento
    const data = {
      "AlojamientoID": id,
      "AdministradorID": AdministradorID.value,
      "TipoAlojamiento": TipoAlojamiento.value,
      "Nombre": Nombre.value,
      "Ubicacion": Ubicacion.value,
      "DescripcionInstalaciones": DescripcionInstalaciones.value,
    };

    // Enviar la solicitud PUT
    fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroAlojamientos/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../html/ConsultarAlojamiento.html";
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  });
});

