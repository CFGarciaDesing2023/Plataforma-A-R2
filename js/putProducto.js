document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const Nombre= document.getElementById("Nombre");
  const Descripcion = document.getElementById("Descripcion");
  const Precio = document.getElementById("Precio");
  const CantidadDisponible = document.getElementById("CantidadDisponible");
  const Estado = document.getElementById("Estado");


  fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/Producto/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        
        Nombre.value = user.Nombre;
        Descripcion.value = user.Descripcion;
        Precio.value = user.Precio;
        CantidadDisponible.value = user.CantidadDisponible;
        Estado.value = user.Estado;

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "ProductoID": id,
      "Nombre": Nombre.value,
      "Descripcion": Descripcion.value,
      "Precio": Precio.value,
      "CantidadDisponible": CantidadDisponible.value,
      "Estado": Estado.value,
      
  }


    fetch("http://www.NuevoPlataformaAR-ADSO-2721501.somee.com/api/Producto/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../html/ConsultarProducto.html"
          
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }); 
});
