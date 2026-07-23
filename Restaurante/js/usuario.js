function registrarUsuario(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre_usuario").value.trim();
    let apellido = document.getElementById("apellido_usuario").value.trim();
    let tipoDocumento = document.getElementById("tipo_documento_usuario").value;
    let numeroDocumento = document.getElementById("numero_documento_usuario").value.trim();
    let telefono = document.getElementById("telefono_usuario").value.trim();
    let correo = document.getElementById("correo_usuario").value.trim();
    let genero = document.getElementById("genero_usuario").value;
    let cargo = document.getElementById("cargo_usuario").value;
    let fechaNacimiento = document.getElementById("fecha_nacimiento_usuario").value;
    let contrasenia = document.getElementById("contraseña_usuario").value;

    if (nombre === "" || apellido === "" || tipoDocumento === "" || numeroDocumento === "" || 
        telefono === "" || correo === "" || genero === "" || cargo === "" || 
        fechaNacimiento === "" || contrasenia === "") {
        
        Swal.fire({
            icon: "error",
            title: "Campos incompletos",
            text: "Por favor, completa todos los campos antes de enviar el formulario."
        });
        return false;
    }

    let regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regexLetras.test(nombre) || !regexLetras.test(apellido)) {
        Swal.fire({
            icon: "error",
            title: "Formato de nombre incorrecto",
            text: "El nombre y el apellido solo deben contener letras y espacios."
        });
        return false;
    }

    if (numeroDocumento.length < 6) {
        Swal.fire({
            icon: "error",
            title: "Documento no válido",
            text: "El número de documento debe tener un formato válido (mínimo 6 dígitos)."
        });
        return false;
    }

    if (telefono.length < 10) {
        Swal.fire({
            icon: "error",
            title: "Teléfono incorrecto",
            text: "El número de teléfono debe tener al menos 10 dígitos."
        });
        return false;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
        Swal.fire({
            icon: "error",
            title: "Correo no válido",
            text: "Por favor, introduce una dirección de correo electrónico válida (debe incluir @ y un punto)."
        });
        return false;
    }

    if (contrasenia.length < 8) {
        Swal.fire({
            icon: "error",
            title: "Contraseña muy débil",
            text: "La contraseña debe tener al menos 8 caracteres para asegurar la cuenta."
        });
        return false;
    }

    Swal.fire({
        icon: "success",
        title: "¡Registro Exitoso!",
        html: `Bienvenido(a) al equipo, <b>${nombre} ${apellido}</b>.<br><br>
               <b>Cargo asignado:</b> ${cargo}<br>
               <b>Tu usuario es tu correo:</b> ${correo}`,
        confirmButtonColor: "#0091bd"
    });

    return true;
}