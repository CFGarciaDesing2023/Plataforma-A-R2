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
  function ObtenerUsuarios(inicioRegistros) {
    fetch(`http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroAlojamientos `  )
       .then((response) => response.json())
       .then((data) => {
         tabla.innerHTML = ""; 
         data.forEach((user) => {
           const row = document.createElement("tr");
           row.innerHTML = `
                   <td class="text-center" >${user.AlojamientoID}</td>
                   <td class="text-center" >${user.AdministradorID}</td>
                   <td class="text-center" >${user.TipoAlojamiento}</td>
                   <td class="text-center" >${user.Nombre}</td>
                   <td class="text-center" >${user.Ubicacion}</td>
                   <td class="text-center" >${user.DescripcionInstalaciones}</td>
                  <td> <button id="editar"  value=${user.AlojamientoID} class="btn btn-warning" >editar</button> </td>
                  <td> <button id="borrar"  value=${user.AlojamientoID} class="btn btn-danger" >eliminar</button> </td>
               `;
 
           tabla.appendChild(row);
           
         });
         console.log(data);
       })
       .catch((error) =>
         console.error("Error al obtener datos de la API:", error)
       );
   }

  ObtenerUsuarios(inicioRegistros);

  //-----------------------------------------------------------------------------------------------------//
  document.getElementById("paginaAnterior").addEventListener("click", () => {
    if (inicioRegistros > 1) {
      inicioRegistros--;
      ObtenerUsuarios(inicioRegistros);
    }
  });
  //-----------------------------------------------------------------------------------------------------//

  document.getElementById("paginaSiguiente").addEventListener("click", () => {
    inicioRegistros++;
    ObtenerUsuarios(inicioRegistros);
  });

  //-----------------------------------------------------------------------------------------------------//
  tabla.addEventListener("click", (event) => {
    if (event.target.id == "borrar") {
      const confirmacion = confirm(
        "¿Estás seguro de que deseas eliminar este registro?"
      );

      if (confirmacion == true) {
        fetch(`http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/RegistroAlojamientos/${event.target.value}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al eliminar el Alojamiento");
            }

            event.target.closest("tr").remove();
          })
          .catch((error) => console.error("Error al eliminar Alojamiento:", error));
      }
    } else if (event.target.id == "editar") {
      window.location.href = "../html/EditarRegistroAlojamiento.html?id=" + event.target.value; // Agrega el parámetro a la URL
    }
    
    
  });
});
