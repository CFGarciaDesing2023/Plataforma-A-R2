document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const ClienteID  = document.getElementById("ClienteID").value;
        const AlojamientoID = document.getElementById("AlojamientoID").value;
        const FechaVenta= document.getElementById("FechaVenta").value;
        const TipoVenta = document.getElementById("TipoVenta").value;
        const Nombre = document.getElementById("Nombre").value;
        const ValorAPagar = document.getElementById("ValorAPagar").value;
        const Cantidad = document.getElementById("Cantidad").value;
        const EstadoVenta  = document.getElementById("EstadoVenta").value;
      
    
        const data = {
          ClienteID :ClienteID ,
          AlojamientoID:AlojamientoID,
          FechaVenta:FechaVenta,
          TipoVenta:TipoVenta,
          Nombre:Nombre,
          ValorAPagar:ValorAPagar,
          Cantidad:Cantidad ,
          EstadoVenta :EstadoVenta
    
            
        }
        
        fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroVentas", {
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

              window.location.href = "../view/index.html"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})

