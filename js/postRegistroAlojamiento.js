document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {

        const AdministradorID = document.getElementById("AdministradorID").value;
        const TipoAlojamiento = document.getElementById("TipoAlojamiento").value;
        const Nombre = document.getElementById("Nombre").value;
        const Ubicacion = document.getElementById("Ubicacion").value;
        const DescripcionInstalaciones = document.getElementById("DescripcionInstalaciones").value;
        const Capacidad_Habitaciones = document.getElementById("Capacidad_Habitaciones").value;
       
      
    
        const data = {
          AdministradorID:AdministradorID,
          TipoAlojamiento:TipoAlojamiento,
          Nombre:Nombre,
          Ubicacion:Ubicacion,
          DescripcionInstalaciones:DescripcionInstalaciones,
          Capacidad_Habitaciones:Capacidad_Habitaciones
         
    
            
        }
        
        fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroAlojamientos", {
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

              window.location.href = "../html/ConsultaRegistroAlojamiento.html"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})

