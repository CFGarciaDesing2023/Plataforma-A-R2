document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
 
  const ClienteID = document.getElementById("ClienteID");
  const AlojamientoID = document.getElementById("AlojamientoID");
  const EmpleadoID = document.getElementById("EmpleadoID");
  const ProductoID = document.getElementById("ProductoID");
  const CantidadVendida = document.getElementById("CantidadVendida");
  const Precio_Unitario = document.getElementById("Precio_Unitario");
  const Total = document.getElementById("Total");
  const EstadoVenta = document.getElementById("EstadoVenta");


  fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroVentas/" + id)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
       
        ClienteID.value = user.ClienteID;
        AlojamientoID.value = user.AlojamientoID;
        EmpleadoID.value = user.EmpleadoID;
        ProductoID.value = user.ProductoID;
        CantidadVendida .value = user.CantidadVendida;
        Precio_Unitario.value = user.Precio_Unitario;
        Total.value= user.Total;
        EstadoVenta.value = user.EstadoVenta;
        

      });
    })
    .catch((error) =>
      console.error("Error al obtener datos de la API:", error)
    );

  btnEditar.addEventListener("click", () => {

    const data = {
      "VentaID": id,
      "ClienteID": ClienteID.value,
      "AlojamientoID": AlojamientoID.value,
      "EmpleadoID": EmpleadoID.value,
      "ProductoID": ProductoID.value,
      "CantidadVendida": CantidadVendida.value,
      "Precio_Unitario": Precio_Unitario.value,
      "Total": Total.value,
      "EstadoVenta": EstadoVenta.value
  
      
  }


    fetch("http://www.PlataformaAR-2721501.somee.com/api/RegistroVentas/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        
        if (response.ok) {
          console.log("Datos enviados correctamente");
          window.location.href = "../view/index.html"
          
        } else {
          console.error("Error al enviar la solicitud:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }); 
});
