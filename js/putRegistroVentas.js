document.addEventListener("DOMContentLoaded", () => {
  const btnEditar = document.getElementById("editar");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
 
  const ClienteID = document.getElementById("ClienteID");
  const AlojamientoID = document.getElementById("AlojamientoID ");
  const FechaVenta = document.getElementById("FechaVenta");
  const TipoVenta = document.getElementById("TipoVenta");
  const Nombre = document.getElementById("Nombre");
  const ValorAPagar = document.getElementById("ValorAPagar");
  const Cantidad = document.getElementById("Cantidad");
  const EstadoVenta = document.getElementById("EstadoVenta");


  fetch("http://ApiSENAProyect2024.somee.com/api/RegistroVentas/" + AlojamientoID)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
       
        ClienteID.value = user.ClienteID;
        AlojamientoID.value = user.AlojamientoID;
        FechaVenta.value = user.FechaVenta;
        TipoVenta .value = user.TipoVenta ;
        Nombre.value = user.Nombre;
        ValorAPagar.value = user.ValorAPagar;
        Cantidad.value = user.Cantidad;
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
      "FechaVenta": FechaVenta.value,
      "TipoVenta": TipoVenta.value,
      "Nombre": Nombre.value,
      "ValorAPagar": ValorAPagar.value,
      "Cantidad": Cantidad.value,
      "FechaVenta": FechaVenta.value
  }


    fetch("http://ApiSENAProyect2024.somee.com/api/RegistroVentas/", {
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
