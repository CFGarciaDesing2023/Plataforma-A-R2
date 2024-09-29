document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const AlojamientoID = document.getElementById("AlojamientoID").value;
        const TipoHabitacion = document.getElementById("TipoHabitacion").value;
        const Descripcion = document.getElementById("Descripcion").value;
        const PrecioNoche = document.getElementById("PrecioNoche").value;
        const Estado = document.getElementById("Estado").value;
  
      
    
        const data = {
          AlojamientoID:AlojamientoID,
          TipoHabitacion:TipoHabitacion,
          Descripcion:Descripcion,
          PrecioNoche:PrecioNoche,
          Estado:Estado
          
    
            
        }
        
        fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroHabitacion", {
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

