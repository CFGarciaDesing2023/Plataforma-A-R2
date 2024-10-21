document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const Nombre = document.getElementById("Nombre").value;
        const Descripcion = document.getElementById("Descripcion").value;
        const Precio = document.getElementById("Precio").value;
        const CantidadDisponible = document.getElementById("CantidadDisponible").value;
        const Estado = document.getElementById("Estado").value;
        
    
        const data = {
            Nombre: Nombre,
            Descripcion: Descripcion,
            Precio: Precio,
            CantidadDisponible: CantidadDisponible,
            Estado: Estado
            
        }
        
        fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/Producto", {
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

              window.location.href = "../html/ConsultarProducto.html"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})

