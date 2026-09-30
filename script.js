function verificar() {

alert("Usted a ingresado");

let Gmail = document.querySelector("#Gmail").value;
let Contraseña = document.querySelector("#Contraseña").value;

let opcion1 = document.querySelector("#opcion1").checked;
let opcion2 = document.querySelector("#opcion2").checked;

if (Gmail === "tomasalbornoz@gmail.com" && 
Contraseña === "tomi2010" && 
opcion1 === true && 
opcion2 === true) {

document.querySelector("#resultado").innerHTML =
"Usuario ingresado.";

} else {

document.querySelector("#resultado").innerHTML =
"Verifica tus datos y marca las dos opciones.";

    }
}