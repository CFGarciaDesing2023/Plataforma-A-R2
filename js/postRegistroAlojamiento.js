document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const AlojamientoID = document.getElementById("AlojamientoID").value;
        const AdministradorID = document.getElementById("AdministradorID").value;
        const TipoAlojamiento = document.getElementById("TipoAlojamiento").value;
        const Nombre = document.getElementById("Nombre").value;
        const Ubicacion = document.getElementById("Ubicacion").value;
        const Telefono = document.getElementById("Telefono").value;
        const DescripcionInstalaciones = document.getElementById("DescripcionInstalaciones").value;
       
      
    
        const data = {
          AlojamientoID:  AlojamientoID,
          AdministradorID:AdministradorID,
          TipoAlojamiento:TipoAlojamiento,
          Nombre:Nombre,
          Ubicacion:Ubicacion,
          Telefono:Telefono,
          DescripcionInstalaciones: DescripcionInstalaciones,
         
    
            
        }
        
        fetch("http://ApiSENAProyect2024.somee.com/api/RegistroAlojamientos", {
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

