document.addEventListener("DOMContentLoaded", () => {

  const registrar = document.getElementById("registrar");

  registrar.addEventListener("click", async (e) => {
      const AdministradorID = document.getElementById("AdministradorID").value;
      const TipoAlojamiento = document.getElementById("TipoAlojamiento").value;
      const Nombre = document.getElementById("Nombre").value;
      const Ubicacion = document.getElementById("Ubicacion").value;
      const DescripcionInstalaciones = document.getElementById("DescripcionInstalaciones").value;

      // Verificar si algún campo está vacío
      if (!AdministradorID || !TipoAlojamiento || !Nombre || !Ubicacion || !DescripcionInstalaciones) {
          alert("Por favor, complete todos los campos.");
          return;
      }

      // Validación adicional para AdministradorID
      const AdminIDNumber = parseInt(AdministradorID);
      if (isNaN(AdminIDNumber)) {
          alert("El ID del administrador debe ser un número válido.");
          return;
      }


      // Si la validación pasa, preparar los datos para la solicitud
      const data = {
          AdministradorID: AdminIDNumber,
          TipoAlojamiento: TipoAlojamiento,
          Nombre: Nombre,
          Ubicacion: Ubicacion,
          DescripcionInstalaciones: DescripcionInstalaciones
      };

      // Enviar los datos al servidor para registrar el alojamiento
      fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroAlojamientos", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(async (response) => {
          if (response.ok) {
              console.log("Datos enviados correctamente");
              window.location.href = "../html/ConsultarAlojamiento.html";  // Asegúrate de que la ruta es correcta
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
