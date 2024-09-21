document.addEventListener("DOMContentLoaded", () => {

    const registrar = document.getElementById("registrar");

    registrar.addEventListener("click", (e) => {
        const UsuarioID = document.getElementById("UsuarioID").value;
        const Email  = document.getElementById("Email").value;
        const Contraseña = document.getElementById("Contraseña").value;
        const TipoUsuario= document.getElementById("TipoUsuario").value;
        const TipoDocumento = document.getElementById("TipoDocumento").value;
        const NumeroDocumento = document.getElementById("NumeroDocumento").value;
        const Nombres = document.getElementById("Nombres").value;
        const Apellidos = document.getElementById("Apellidos").value;
      
    
        const data = {
            UsuarioID:UsuarioID,
            Email:Email,
            Contraseña:Contraseña,
            TipoUsuario:TipoUsuario,
            TipoDocumento:TipoDocumento,
            NumeroDocumento:NumeroDocumento,
            Nombres: Nombres,
            Apellidos:Apellidos
    
            
        }
        
        fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroUsuario", {
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

              window.location.href = "../html/ConsultarUsuarios.html"

            } else {
              console.error("Error al enviar la solicitud:", response.status);
            }
          })
          .catch((error) => {
            console.error("Error al enviar la solicitud:", error);
          });
      });


})

