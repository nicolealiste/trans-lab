/* Holiii acá va tu código también */
$(document).ready(function() {
	
/*Función para correo*/
function validarEmail(mail) {
    var inputCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!inputCorreo.test(correo)) {
        return true;
    }
}

/*Función para password*/
function validaPassword(pass) {
    var passLenght = pass.length;
    if (passLenght < 9) {
        return true;
    }
}

});