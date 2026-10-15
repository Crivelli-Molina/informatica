//datos
const nombre = "mary";
const clave = "1234"
//capturamos la informacio del DOM.
let nomIng = document.getElementById ("usuario");
let claveIng = document.getElementById ("contraseña");
let boton = document.getElementById ("btn-ingresar");
//escuchamos el evento
boton.addEventListener ("click",function(){
    alert(nomIng.value);



});