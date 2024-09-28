document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
      const Nombre = document.getElementById("Nombre");
      const Descripcion = document.getElementById("Descripcion");
      const CantidadDisponible = document.getElementById("CantidadDisponible");
      const Estado = document.getElementById("Estado");
  
      
    
        const data = {
          Nombre:Nombre,
          Descripcion:Descripcion,
          CantidadDisponible:CantidadDisponible,
          Estado:Estado    
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

              window.location.href = "../html/ConsultarHabitacion.html"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})

