document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const resultado = document.getElementById("resultado");

    // Manejar el evento de submit del formulario
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Obtener los valores de los campos de email y contraseña
        const Email = document.getElementById("Email").value.trim();
        const Contraseña = document.getElementById("Contraseña").value.trim();

        // Validación simple de los campos (no vacíos)
        if (Email === "" || Contraseña === "") {
            resultado.style.display = "block";
            resultado.textContent = "Por favor, complete todos los campos.";
            return;
        }

        // Validación simple de formato de email (puedes mejorarla)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(Email)) {
            resultado.style.display = "block";
            resultado.textContent = "Por favor, ingrese un email válido.";
            return;
        }

        try {
            // Hacer la solicitud GET a la API para verificar las credenciales, pasando Email y Contraseña en la URL
            const response = await fetch(
                `http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroUsuario?Email=${Email}&Contraseña=${Contraseña}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            // Verificar si la respuesta fue exitosa
            if (response.ok) {
                const data = await response.json();
                
                // Verificar que data es un array y contiene resultados
                if (Array.isArray(data) && data.length > 0) {
                    const usuario = data[0]; // Obtenemos el primer usuario si las credenciales son correctas
                    // Mostrar mensaje de éxito
                    resultado.style.display = "block";
                    resultado.textContent = "¡Inicio de sesión exitoso!";

                    // Redirigir después de llenar los campos
                    window.location.href = "../html/PerfilUsuario.html";
                 // Llenar los campos del perfil
                 document.getElementById("Email").value = usuario.Email;
                 document.getElementById("Contraseña").value = usuario.Contraseña;
                 document.getElementById("TipoUsuario").value = usuario.TipoUsuario;
                 document.getElementById("TipoDocumento").value = usuario.TipoDocumento;
                 document.getElementById("NumeroDocumento").value = usuario.NumeroDocumento;
                 document.getElementById("Nombres").value = usuario.Nombres;
                 document.getElementById("Apellidos").value = usuario.Apellidos;

                    
                       
                } else {
                    resultado.style.display = "block";
                    resultado.textContent = "Email o contraseña incorrectos.";
                }
            } else {
                // Si hubo un error en la respuesta de la API
                throw new Error(`Error al verificar las credenciales. Código de estado: ${response.status}`);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
            resultado.style.display = "block";
            resultado.textContent = "Hubo un error al intentar iniciar sesión. Inténtalo de nuevo.";
        }
    });
});


