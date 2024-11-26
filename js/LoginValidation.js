
      // Datos simulados para validar
      const usuarios = {
          'Administrador': { email: 'admin@example.com', password: 'admin123' },
          'Empleado': { email: 'empleado@example.com', password: 'empleado123' },
          'Cliente': { email: 'cliente@example.com', password: 'cliente123' }
      };
  
      document.getElementById('loginForm').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevenir que el formulario se envíe
  
          // Obtener valores del formulario
          const userType = document.getElementById('userType').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const errorMessage = document.getElementById('error-message');
  
          // Limpiar el mensaje de error antes de cada intento
          errorMessage.style.display = 'none';
          errorMessage.textContent = '';
  
          // Validación básica
          if (!email || !password) {
              errorMessage.textContent = "Por favor, complete todos los campos.";
              errorMessage.style.display = 'block';
              return;
          }
  
          // Validación de credenciales
          const usuario = usuarios[userType];
          if (usuario && usuario.email === email && usuario.password === password) {
              alert(`Bienvenido, ${userType}`);
              // Redirigir según el tipo de usuario
              if (userType === "Administrador") {
                  window.location.href = "../html/PerfilUsuario.html";
              } else if (userType === "Empleado") {
                  window.location.href = "../html/dashboard_empleado.html";
              } else if (userType === "Cliente") {
                  window.location.href = "../html/dashboard_cliente.html";
              }
          } else {
              errorMessage.textContent = "Credenciales incorrectas. Por favor, verifica tus datos.";
              errorMessage.style.display = 'block';
          }
      });
  
