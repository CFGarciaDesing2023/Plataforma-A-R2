/*html
<form id="loginForm" onsubmit="return validarFormulario()">
  <label for="username">Usuario:</label>
  <input type="text" id="username" required>
  

  <label for="password">Contraseña:</label>
  <input type="password" id="password" required>
  

  <input type="submit" value="Iniciar sesión">
</form>
```
*/


function validarFormulario() {
  var Email = document.getElementById("Email").value;
  var Contraseña = document.getElementById("Contraseña").value;

  // Validar si los campos están vacíos
  if (Email.trim() == "" || Contraseña.trim() == "") {
    alert("Por favor, complete todos los campos");
    return false;
  }

  // Validar si el usuario y la contraseña son correctos
  if (Email == "CFGarciaDesing" && Contraseña == "ADSO2721501") {
    alert("Inicio de sesión exitoso");
    window.location.href="index.html";
    
  } else {
    alert("Usuario o contraseña incorrectos");
    return false;
  }
}
