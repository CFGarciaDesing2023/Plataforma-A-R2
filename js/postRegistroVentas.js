document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const ClienteID  = document.getElementById("ClienteID").value;
        const AlojamientoID = document.getElementById("AlojamientoID").value;
        const EmpleadoID = document.getElementById("EmpleadoID").value;
        const ProductoID = document.getElementById("ProductoID").value;
        const CantidadVendida = document.getElementById("CantidadVendida").value;
        const Precio_Unitario = document.getElementById("Precio_Unitario").value;
        const EstadoVenta  = document.getElementById("EstadoVenta").value;
      
    
        const data = {
          ClienteID :ClienteID ,
          AlojamientoID:AlojamientoID,
          EmpleadoID:EmpleadoID,
          ProductoID:ProductoID,
          CantidadVendida:CantidadVendida,
          Precio_Unitario:Precio_Unitario,
          EstadoVenta :EstadoVenta
    
            
        }
        
        fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroVenta", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
          .then((response) => {
            // Verificar si la respuesta es exitosa (código de estado 200)
            if (response.ok) {
              console.log("Datos enviados correctamente");

              window.location.href = "../html/ConsultarVentas.html"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})

