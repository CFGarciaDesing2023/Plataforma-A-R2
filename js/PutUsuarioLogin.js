window.addEventListener("DOMContentLoaded", () => {
    // Obtener los datos del usuario desde el localStorage
    const usuario = JSON.parse(localStorage.getItem('usuarioRegistrado'));

    // Si el usuario está en el localStorage
    if (usuario) {
        // Asignar los valores de los datos al formulario
        document.getElementById("Email").value = usuario.Email;
        document.getElementById("Contraseña").value = usuario.Contraseña;
        document.getElementById("TipoUsuario").value = usuario.TipoUsuario;
        document.getElementById("TipoDocumento").value = usuario.TipoDocumento;
        document.getElementById("NumeroDocumento").value = usuario.NumeroDocumento;
        document.getElementById("Nombres").value = usuario.Nombres;
        document.getElementById("Apellidos").value = usuario.Apellidos;
    } else {
        // Si no hay datos de usuario en localStorage, redirigir a la página de inicio de sesión o mostrar mensaje
        alert("No se encontraron datos del usuario.");
        window.location.href = "index.html"; // Redirigir a la página de inicio si no hay datos
    }
});
