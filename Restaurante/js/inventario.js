function guardarInventario(event) {

    let codigo = document.getElementById("codigo").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let marca = document.getElementById("marca").value.trim();

    if (codigo === "" || nombre === "" || cantidad === "" || marca === "") {
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor, ingresa todos los datos del producto antes de guardarlo."
        });
        return false;
    }

    if (parseInt(codigo) <= 0) {
        Swal.fire({
            icon: "error",
            title: "Código inválido",
            text: "El código del producto debe ser un número mayor a cero."
        });
        return false;
    }

    if (parseInt(cantidad) < 0) {
        Swal.fire({
            icon: "error",
            title: "Cantidad inválida",
            text: "No puedes registrar stock en cantidades negativas."
        });
        return false;
    }

    Swal.fire({
        icon: "success",
        title: "¡Producto Guardado!",
        html: `El producto <b>${nombre}</b> (${marca}) se agregó con éxito.<br><br>
             <b>Código:</b> ${codigo}<br>
               <b>Stock Inicial:</b> ${cantidad} unidades`,
        confirmButtonColor: "#0091bd"
    });

    return true;
}