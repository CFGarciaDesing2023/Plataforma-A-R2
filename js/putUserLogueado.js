document.addEventListener("DOMContentLoaded", () => {
    const usuarioID = localStorage.getItem("usuarioID");

    if (!usuarioID) {
        alert("No se encontró un UsuarioID. Por favor, inicia sesión.");
        window.location.href = "index.html"; // Redirige al inicio de sesión
        return;
    }

    const apiBaseUrl = "http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroUsuario/"+ usuarioID; // Cambia esto por la URL de tu API

    // Referencias a los campos del formulario
    const emailInput = document.getElementById("Email");
    const passwordInput = document.getElementById("Contraseña");
    const tipoUsuarioInput = document.getElementById("TipoUsuario");
    const tipoDocumentoInput = document.getElementById("TipoDocumento");
    const numeroDocumentoInput = document.getElementById("NumeroDocumento");
    const nombresInput = document.getElementById("Nombres");
    const apellidosInput = document.getElementById("Apellidos");
    const actualizarBtn = document.getElementById("editar");

    // Obtener los datos del usuario
    async function obtenerDatosUsuario() {
        try {
            const response = await fetch(`${apiBaseUrl}/usuarios/${usuarioID}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Error al obtener los datos del usuario.");
            }

            const usuario = await response.json();

            // Rellenar los campos del formulario con los datos obtenidos
            emailInput.value = usuario.email || "";
            passwordInput.value = usuario.contraseña || "";
            tipoUsuarioInput.value = usuario.tipoUsuario || "";
            tipoDocumentoInput.value = usuario.tipoDocumento || "";
            numeroDocumentoInput.value = usuario.numeroDocumento || "";
            nombresInput.value = usuario.nombres || "";
            apellidosInput.value = usuario.apellidos || "";
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al cargar los datos del usuario.");
        }
    }

    // Actualizar los datos del usuario
    async function actualizarUsuario() {
        const usuarioActualizado = {
            email: emailInput.value,
            contraseña: passwordInput.value,
            tipoUsuario: tipoUsuarioInput.value,
            tipoDocumento: tipoDocumentoInput.value,
            numeroDocumento: numeroDocumentoInput.value,
            nombres: nombresInput.value,
            apellidos: apellidosInput.value
        };

        try {
            const response = await fetch(`${apiBaseUrl}/usuarios/${usuarioID}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuarioActualizado)
            });

            if (!response.ok) {
                throw new Error("Error al actualizar los datos del usuario.");
            }

            alert("Usuario actualizado con éxito.");
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al actualizar los datos del usuario.");
        }
    }

    // Eventos
    actualizarBtn.addEventListener("click", (event) => {
        event.preventDefault();
        actualizarUsuario();
    });

    // Inicializar datos
    obtenerDatosUsuario();
});
