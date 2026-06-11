let codigo = document.getElementById("codigo").value;
let nombre = document.getElementById("nombre").value;
let cantidad = document.getElementById("cantidad").value;
let marca = document.getElementById("marca").value;

if (typeof codigo === "number") {
    console.log("Es un número inválido");
}
if (typeof nombre === "string") {
    console.log("Es un nombre inválido");
}   
if (typeof cantidad === "number") {
    console.log("Es un número inválido");
}
if (typeof marca === "string") {
    console.log("Es una marca inválida");
}
