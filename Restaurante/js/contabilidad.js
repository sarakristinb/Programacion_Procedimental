function enviarContabilidad(event) {
   
    let ventas = document.getElementById("ventas").value.trim();
    let fecha = document.getElementById("fecha").value;
    let ingresos = document.getElementById("ingresos").value.trim();
    let egresos = document.getElementById("egresos").value.trim();
    let concepto = document.getElementById("concepto").value.trim();
    let valor = document.getElementById("valor").value.trim();

    if (ventas === "" || fecha === "" || ingresos === "" || egresos === "" || concepto === "" || valor === "") {
        Swal.fire({
            icon: "error",
            title: "¡Atención Contador!",
            text: "Todos los campos de la contabilidad son obligatorios. Por favor complemétalos."
        });
        return false;
    }

    let numVentas = parseFloat(ventas);
    let numIngresos = parseFloat(ingresos);
    let numEgresos = parseFloat(egresos);
    let numValor = parseFloat(valor);

    if (isNaN(numVentas) || numVentas < 0) {
        Swal.fire({
            icon: "error",
            title: "Ventas inválidas",
            text: "por favor, introduce una cantidad válida y positiva para las ventas."
        });
        return false;
    }
//isNaN es una función que verifica si un valor no es un número. En este caso, se utiliza para asegurarse de que los campos de ingresos, egresos y valor contengan números válidos
    if (isNaN(numIngresos) || numIngresos < 0) {
        Swal.fire({
            icon: "error",
            title: "Ingresos inválidos",
            text: "El monto de los ingresos debe ser un número válido mayor o igual a cero."
        });
        return false;
    }

    if (isNaN(numEgresos) || numEgresos < 0) {
        Swal.fire({
            icon: "error",
            title: "Egresos inválidos",
            text: "El monto de los egresos debe ser un número válido mayor o igual a cero."
        });
        return false;
    }

    if (isNaN(numValor) || numValor < 0) {
        Swal.fire({
            icon: "error",
            title: "Valor final inválido",
            text: "El campo 'Valor' debe contener un número válido y positivo."
        });
        return false;
    }

    Swal.fire({
        icon: "success",
        title: "¡Cierre Contable Exitoso!",
        html: `El balance para el día <b>${fecha}</b> ha sido registrado.<br><br>
               <b>Ingresos:</b> $${numIngresos.toFixed(2)}<br>
            <b>Egresos:</b> $${numEgresos.toFixed(2)}<br>
            <b>Concepto:</b> ${concepto}`,
        confirmButtonColor: "#ffdd57"
    });

    return true;
}