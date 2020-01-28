



let nombre = prompt("Introduce tu nombre "); //string o cadena
let edad = prompt("Introduce tu edad "); //número
let ciudad = prompt("Introduce tu ciudad de procedencia");
let presentacion = "Mi nombre es ";
let prop = "tengo ";
let años = " años";
let procedencia = "y soy de ";
let espacio = " ";
let información = (presentacion + nombre + espacio + prop + edad + años + espacio + procedencia + ciudad); 

function holamundo (){
    console.log(información);
}

holamundo();

//Estructuras de control

if (nombre == "Jorge"){
    console.log("¡Hola Jorge!");
}

else{
    console.log("Tu no deberías estar aqui entonces");
}






