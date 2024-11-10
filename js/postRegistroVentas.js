document.addEventListener("DOMContentLoaded", () => {

  const registrar = document.getElementById("registrar");

  registrar.addEventListener("click", (e) => {
      const ClienteID  = document.getElementById("ClienteID").value;
      const AlojamientoID = document.getElementById("AlojamientoID").value;
      const EmpleadoID = document.getElementById("EmpleadoID").value;
      const ProductoID = document.getElementById("ProductoID").value;
      const CantidadVendida = parseInt(document.getElementById("CantidadVendida").value);
      const Precio_Unitario = parseFloat(document.getElementById("Precio_Unitario").value);
      const EstadoVenta  = document.getElementById("EstadoVenta").value;

      // Verificar si algún campo está vacío
      if (!ClienteID || !AlojamientoID || !EmpleadoID || !ProductoID || !CantidadVendida || !Precio_Unitario || !EstadoVenta) {
        alert("Por favor, complete todos los campos.");
        return;
      }

      const data = {
          ClienteID : ClienteID,
          AlojamientoID: AlojamientoID,
          EmpleadoID: EmpleadoID,
          ProductoID: ProductoID,
          CantidadVendida: CantidadVendida,
          Precio_Unitario: Precio_Unitario,
          EstadoVenta: EstadoVenta
      };

      fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroVentas", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then(async (response) => {
          if (response.ok) {
              console.log("Datos enviados correctamente");
              window.location.href = "../html/ConsultarVentas.html"; // Asegúrate que la ruta es correcta
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

