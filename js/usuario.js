let nombre_usuario = document.getElementById("nombre_usuario").value;
let tipo_documento_usuario = document.querySelector('select[name="tipo_documento_usuario"]').value;
let numero_documento_usuario = document.getElementById("numero_documento_usuario").value;  
let telefono_usuario = document.getElementById("telefono_usuario").value;
let correo_usuario = document.getElementById("correo_usuario").value;
let genero_usuario = document.querySelector('select[name="genero_usuario"]').value;
let cargo_usuario = document.querySelector('select[name="cargo_usuario"]').value;
let fecha_nacimiento_usuario = document.getElementById("fecha_nacimiento_usuario").value;
let contraseña_usuario = document.getElementById("contraseña_usuario").value;
function ValidarDatos() {
    if (nombre_usuario === "" || tipo_documento_usuario === "" || numero_documento_usuario === "" || telefono_usuario === "" || correo_usuario === "" || genero_usuario === "" || cargo_usuario === "" || fecha_nacimiento_usuario === "" || contraseña_usuario === "") {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
        return false; 
    }
    else {
            if(nombre_usuario != /[a-zA-Z\s]+/.test(nombre_usuario)) {
                console.log("los datos son inválidos.")
            }
            if (telefono_usuario.length < 10) {
                console.log("los datos son inválidos."); 
            }
             if (numero_documento_usuario.length < 10) {
                console.log("los datos son inválidos."); 
            }
            if (correo_usuario.includes("@") && correo_usuario.includes(".")) {
                console.log("los datos son inválidos."); }
            if (contraseña_usuario.length < 8 && contraseña_usuario.includes(".")) {
                console.log("los datos son inválidos."); 
            }
                alert("¡Registro exitoso! Bienvenido al equipo.");
        return true; // Permite que el formulario se envíe
         

    }
}
