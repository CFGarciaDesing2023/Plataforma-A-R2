// Definir usuarios y tipos
const users = {
  'admin': { password: 'admin123', role: 'Admin' },
  'empleado': { password: 'empleado123', role: 'Empleado' },
  'cliente': { password: 'cliente123', role: 'Cliente' }
};

// Función de login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Verificar si el usuario existe
  if (users[username] && users[username].password === password) {
      const userRole = users[username].role;

      // Mostrar mensaje y redirigir según el rol
      alert('Bienvenido, ' + username + '! Eres un ' + userRole + '.');
      if (userRole === 'Admin') {
          window.location.href = '../html/PerfilUsuario.html'; // Redirigir a dashboard de Admin
      } else if (userRole === 'Empleado') {
          window.location.href = 'empleado_dashboard.html'; // Redirigir a dashboard de Empleado
      } else if (userRole === 'Cliente') {
          window.location.href = 'cliente_dashboard.html'; // Redirigir a dashboard de Cliente
      }
  } else {
      // Si el login falla, mostrar error
      document.getElementById('error-message').style.display = 'block';
  }
}