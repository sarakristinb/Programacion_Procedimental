function mostrarAlerta(mensaje) {
    let cajaAlerta = document.getElementById("alertab");
    let textoAlerta = document.getElementById("texto_error_alerta");
    textoAlerta.innerText = mensaje;
    cajaAlerta.style.display = "block";
}

function cerrarAlerta() {
    let cajaAlerta = document.getElementById("alertab");
    if (cajaAlerta) {
        cajaAlerta.style.display = "none";
    }
}

function ValidarDatos() {
    let nombreCliente = document.getElementById("nombre_cliente").value.trim();
    let producto = document.querySelector('select[name="producto"]').value;
    let cantidadProducto = document.getElementById("cantidad_producto").value.trim();
    let direccionEntrega = document.getElementById("direccion_entrega").value.trim();
    let telefonoCliente = document.getElementById("telefono_cliente").value.trim();
    
    let opcionPago = document.querySelector('input[name="pago"]:checked');
    let metodoPago = opcionPago ? opcionPago.value : "";

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const soloNumeros = /^[0-9]+$/;

    cerrarAlerta();

    if (nombreCliente === "" || producto === "Selecciona un producto" || cantidadProducto === "" || direccionEntrega === "" || telefonoCliente === "" || metodoPago === "") {
        mostrarAlerta("Por favor, completa todos los campos antes de enviar el formulario.");
        return false; 
    }

    if (!soloLetras.test(nombreCliente)) {
        mostrarAlerta("El nombre del cliente solo debe contener letras.");
        return false;
    }

    if (!soloLetras.test(producto)) {
        mostrarAlerta("El producto seleccionado no es válido.");
        return false;
    }

    if (!soloNumeros.test(cantidadProducto)) {
        mostrarAlerta("La cantidad del producto debe ser un número entero.");
        return false;
    }

    if (!soloNumeros.test(telefonoCliente) || telefonoCliente.length !== 10) {
        mostrarAlerta("El número de teléfono debe contener solo números y tener exactamente 10 dígitos.");
        return false;
    }

    alert("¡Pedido confirmado con éxito en Macdonitas!");
    return true; 
}