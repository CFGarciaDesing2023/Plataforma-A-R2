document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const Email = document.getElementById("Email").value.trim();
        const Contraseña = document.getElementById("Contraseña").value.trim();

        if (!Email || !Contraseña) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        try {
            const response = await fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ Email, Contraseña })
            });

            if (!response.ok) {
                throw new Error("Error en el servidor. Inténtalo de nuevo más tarde.");
            }

            const data = await response.json();

            if (data.UsuarioID && data.UsuarioID !== "0") {
                alert("Inicio de sesión exitoso.");

                // Guardar UsuarioID en localStorage
                localStorage.setItem("UsuarioID", data.UsuarioID);

                // Redirigir al formulario de perfil
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
