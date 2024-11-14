function filtrarTabla() {
    let input = document.getElementById('buscador').value.toLowerCase();
    let rows = document.querySelectorAll('#tablaDatos tbody tr');
    
    rows.forEach(function(row) {
      let cells = row.getElementsByTagName('td');
      let match = false;
      
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerText.toLowerCase().includes(input)) {
          match = true;
          break;
        }
      }
      
      if (match) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }
  