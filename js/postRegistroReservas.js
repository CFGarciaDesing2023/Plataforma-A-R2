document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const ClienteID  = document.getElementById("ClienteID").value;
        const AlojamientoID = document.getElementById("AlojamientoID").value;
        const FechaIngreso= document.getElementById("FechaIngreso").value;
        const FechaSalida = document.getElementById("FechaSalida").value;
        const TipoHabitacion = document.getElementById("TipoHabitacion").value;
        const HabitacionID = document.getElementById("HabitacionID").value;
        const NumeroPersonas = document.getElementById("NumeroPersonas").value;
        const ValorTotal = document.getElementById("ValorTotal").value;
        const Estado  = document.getElementById("Estado").value;
      
    
        const data = {
          ClienteID:ClienteID ,
          AlojamientoID:AlojamientoID,
          FechaIngreso:FechaIngreso,
          FechaSalida:FechaSalida,
          TipoHabitacion:TipoHabitacion,
          HabitacionID:HabitacionID,
          NumeroPersonas:NumeroPersonas,
          ValorTotal:ValorTotal ,
          Estado:Estado 
    
            
        }
        
        fetch("http://ApiSENAProyect2024.somee.com/api/RegistroUsuario", {
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

