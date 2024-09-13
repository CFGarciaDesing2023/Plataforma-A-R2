document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("cuerpoTabla");

  let inicioRegistros = 1;
  let tamañoMaximoRegistros = 5;

   /*function obtenerUsuarios(inicioRegistros) {
   fetch(`http://localhost:5001/getUsuarios/${inicioRegistros}/${tamañoMaximoRegistros} `  )
      .then((response) => response.json())
      .then((data) => {
        tabla.innerHTML = ""; 
        data.forEach((user) => {
          const row = document.createElement("tr");
          row.innerHTML = `
                  <td class="text-center" >${user.id}</td>
                  <td class="text-center" >${user.nombre}</td>
                  <td class="text-center" >${user.telefono}</td>
                  <td class="text-center" >${user.email}</td>
                  <td class="text-center" >${user.ciudad}</td>
                  <td class="text-center" >${user.fecha}</td>
                  <td> <button id="editar"  value=${user.id} class="btn btn-warning" >editar</button> </td>
                  <td> <button id="borrar"  value=${user.id} class="btn btn-danger" >eliminar</button> </td>
              `;

          tabla.appendChild(row);
          console.log(data);
        });
      })
      .catch((error) =>
        console.error("Error al obtener datos de la API:", error)
      );
  }
  **/
  function obtenerUsuarios(inicioRegistros) {
    fetch(`http://www.ApiSENAProyect2024.somee.com/api/RegistroVenta `  )
       .then((response) => response.json())
       .then((data) => {
         tabla.innerHTML = ""; 
         data.forEach((user) => {
           const row = document.createElement("tr");
           row.innerHTML = `
                   <td class="text-center" >${user.VentaID}</td>
                   <td class="text-center" >${user.ClienteID}</td>
                   <td class="text-center" >${user.AlojamientoID}</td>
                   <td class="text-center" >${user.FechaVenta}</td>
                   <td class="text-center" >${user.TipoVenta}</td>
                   <td class="text-center" >${user.Nombre}</td>
                   <td class="text-center" >${user.ValorAPagar}</td>
                   <td class="text-center" >${user.Cantidad}</td>
                   <td class="text-center" >${user.EstadoVenta}</td>
                   <td> <button id="editar"  value=${user.VentaID} class="btn btn-warning" >editar</button> </td>
                   <td> <button id="borrar"  value=${user.VentaID} class="btn btn-danger" >eliminar</button> </td>
                   
                `;
           tabla.appendChild(row);
           
         });
         console.log(data);
       })
       .catch((error) =>
         console.error("Error al obtener datos de la API:", error)
       );
   }

  obtenerUsuarios(inicioRegistros);

  //-----------------------------------------------------------------------------------------------------//
  document.getElementById("paginaAnterior").addEventListener("click", () => {
    if (inicioRegistros > 1) {
      inicioRegistros--;
      obtenerUsuarios(inicioRegistros);
    }
  });
  //-----------------------------------------------------------------------------------------------------//

  document.getElementById("paginaSiguiente").addEventListener("click", () => {
    inicioRegistros++;
    obtenerUsuarios(inicioRegistros);
  });

  //-----------------------------------------------------------------------------------------------------//
  tabla.addEventListener("click", (event) => {
    if (event.target.id == "borrar") {
      const confirmacion = confirm(
        "¿Estás seguro de que deseas eliminar este registro de Venta?"
      );

      if (confirmacion == true) {
        fetch(`http://www.ApiSENAProyect2024.somee.com/api/RegistroVenta/${event.target.value}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al eliminar el Venta");
            }

            event.target.closest("tr").remove();
          })
          .catch((error) => console.error("Error al eliminar Venta:", error));
      }
    } else if (event.target.id == "editar") {
      window.location.href = "../view/editar.html?id=" + event.target.value; // Agrega el parámetro a la URL
    }
    
    
  });
});