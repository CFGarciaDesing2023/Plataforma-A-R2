document.addEventListener("DOMContentLoaded", () => {

  const registrar = document.getElementById("registrar");

  registrar.addEventListener("click", (e) => {
      const Nombre = document.getElementById("Nombre").value;
      const Descripcion = document.getElementById("Descripcion").value;
      const Precio = parseFloat(document.getElementById("Precio").value);  // Asegúrate de que Precio es un número
      const CantidadDisponible = parseInt(document.getElementById("CantidadDisponible").value);  // Asegúrate de que CantidadDisponible es un número
      const Estado = document.getElementById("Estado").value;

      // Verificar si algún campo está vacío
      if (!Nombre || !Descripcion || isNaN(Precio) || isNaN(CantidadDisponible) || !Estado) {
        alert("Por favor, complete todos los campos correctamente.");
        return;
      }

      const data = {
          Nombre: Nombre,
          Descripcion: Descripcion,
          Precio: Precio,
          CantidadDisponible: CantidadDisponible,
          Estado: Estado
      };

      fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/Producto", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(async (response) => {
          if (response.ok) {
              console.log("Datos enviados correctamente");
              window.location.href = "../html/ConsultarProducto.html";  // Asegúrate de que la ruta es correcta
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


