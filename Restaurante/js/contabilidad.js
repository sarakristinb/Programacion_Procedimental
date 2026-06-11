let ventas = document.getElementById("ventas").value;
let ingresos = document.getElementById("ingresos").value;
let egresos = document.getElementById("egresos").value;
let concepto = document.getElementById("concepto").value;
let valor = document.getElementById("valor").value;


if (ventas.includes(" ") || ingresos === "" || egresos === "" || concepto === "" || valor === "") {
    alert("Por favor, completa todos los campos antes de enviar el formulario.");
    return false; 
}
if (typeof ventas === "number") {
    console.log("Es un número inválido");
}
if (typeof ingresos === "number") {
    console.log("Es un número inválido");
}
if (typeof egresos === "number") {
    console.log("Es un número inválido");
}
if (typeof valor === "number") {
    console.log("Es un número inválido");
}