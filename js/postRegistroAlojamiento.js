document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const AlojamientoID = document.getElementById("NumeroDocumento").value;
        const AdministradorID = document.getElementById("Email").value;
        const TipoAlojamiento = document.getElementById("Contraseña").value;
        const Nombre = document.getElementById("TipoUsuario").value;
        const Ubicacion = document.getElementById("TipoDocumento").value;
        const Telefono= document.getElementById("NumeroDocumento").value;
        const DescripcionInstalaciones = document.getElementById("Nombres").value;
       
      
    
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

