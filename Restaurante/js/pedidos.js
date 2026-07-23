function guardarPedido(event) {
    event.preventDefault();//esta vuelta es pa que no se recargue la pagina al enviar el formulario

    let nombreCliente = document.getElementById("nombre_cliente").value.trim();
    let producto = document.querySelector('select[name="producto"]').value;
    let cantidadProducto = document.getElementById("cantidad_producto").value.trim();
    let direccionEntrega = document.getElementById("direccion_entrega").value.trim();
    let telefonoCliente = document.getElementById("telefono_cliente").value.trim();
    
    let pagoSeleccionado = document.querySelector('input[name="pago"]:checked');
    let metodoPago = "";

    if (pagoSeleccionado) {
        metodoPago = pagoSeleccionado.value; 
    }

    if (nombreCliente === "" || producto === "" || cantidadProducto === "" || direccionEntrega === "" || telefonoCliente === "" || metodoPago === "") {
        Swal.fire({
            icon: "error",
            title: "Faltan datos!",
            text: "Por favor, completa todo el formulario y selecciona tu método de pago."
        });
        return false;
    }

    if (parseInt(cantidadProducto) <= 0) {
        Swal.fire({
            icon: "error",
            title: "Cuántos vas a querer?",
            text: "la cantidad de productos debe ser al menos 1."
        });
        return false;
    }

    if (telefonoCliente.length < 10) {
        Swal.fire({
            icon: "error",
            title: "Teléfono incompleto",
            text: "el número de teléfono debe tener mínimo 10 dígitos para poder llamarte"
        });
        return false;
    }

    Swal.fire({
        icon: "success",
        title: "¡Pedido Recibido!",
        html: `Hola <b>${nombreCliente}</b>, tu orden por <b>${cantidadProducto}x ${producto}</b> ya se está procesando.<br><br>
               <b>Dirección:</b> ${direccionEntrega}<br>
               <b>Método de Pago:</b> ${metodoPago}`,
        confirmButtonColor: "#0091bd",
        confirmButtonText: "¡gracias!"
    });

    return true;
}