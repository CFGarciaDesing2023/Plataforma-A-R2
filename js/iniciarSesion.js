document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario.

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Validar entradas antes de enviar
        if (!email || !password) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        try {
            // Configuración de la solicitud
            const response = await fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error("Error en el servidor. Inténtalo de nuevo más tarde.");
            }

            const data = await response.json();

            // Procesar la respuesta
            if (data.usuarioID && data.usuarioID !== "0") {
                alert("Inicio de sesión exitoso.");
                // Guardar usuario en localStorage o cookies si es necesario
                localStorage.setItem("usuarioID", data.usuarioID);

                // Redirigir al usuario
                window.location.href = "../html/PerfilUsuario.html";
            } else {
                alert("Correo o contraseña incorrectos.");
            }
        } catch (error) {
            console.error("Error:", error.message);
            alert("Hubo un problema al intentar iniciar sesión.");
        }
    });
});
