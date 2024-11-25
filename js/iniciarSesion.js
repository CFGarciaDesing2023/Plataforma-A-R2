// Obtener el formulario y agregar el evento submit
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();  // Prevenir el envío predeterminado del formulario

    // Obtener los valores de los campos de entrada
    const email = document.getElementById('correo').value;
    const password = document.getElementById('contraseña').value;

    // Crear el objeto con los datos que se van a enviar
    const loginData = {
        email: email,
        password: password
    };

    try {
        // Realizar la petición POST a la API
        const response = await fetch('http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        // Verificar si la respuesta es exitosa (código 200)
        if (response.ok) {
            const data = await response.json();
            // Si la autenticación es exitosa, redirigir al usuario o manejar el JWT
            alert('Inicio de sesión exitoso');
            console.log(data);  // Muestra la respuesta de la API (generalmente un token)
            // Puedes guardar el token en localStorage o sessionStorage si es necesario
            localStorage.setItem('authToken', data.token);  // Por ejemplo, si la respuesta contiene un token
            window.location.href = '../html/PerfilUsuario.html';  // Redirigir a una página de éxito o panel
        } else {
            // Si hubo un error en la autenticación
            const errorData = await response.json();
            alert('Error de autenticación: ' + errorData.message);  // Mostrar el mensaje de error
        }
    } catch (error) {
        // Manejo de errores en caso de que la petición falle
        console.error('Error de red:', error);
        alert('Hubo un problema con la conexión. Intenta de nuevo más tarde.');
    }
});