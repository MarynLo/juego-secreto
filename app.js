let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);
//console.log(numeroSecreto);//este te ayuda a ver cual es el numero secret
/* declaracion de funcion y puede recibir paramentros realiza una 
accion se dice (function); las variables ya no son necesarias las comillas*/
function asignarTextoElemento(elemento, texto) {
/*document.queryselector: es la funcion que permite acceder a cada uno
de los elementos seleccionados de javascript y html */
let elementoHTML = document.querySelector(elemento); 
//esta funcion nos permite un titulo a la pagina 
    elementoHTML.innerHTML = texto;
// return: retorno de la funcion nos va a retornar un valor generado por la maquina
    return;

}

function verificarIntento() {
// input: etiqueta de html, que esta representando a la caja de texto
// get: obtener elemento por id. 
    let numerosDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    console.log(intentos);
    if (numerosDeUsuario === numeroSecreto) {

        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`); // "vez y veces es una simplificacion para no escribir todo el codigo y se insertan {} y $ y :.
        document.getElementById("reinciar").removeAttribute("disabled");
    } else {
        //el usuario no acerto 
       if(numerosDeUsuario > numeroSecreto) {
        asignarTextoElemento("p", "Numero secreto es menor");
        } else {
        asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();// llamando a la funcion
    }
    return;

}

function limpiarCaja(){
     document.querySelector("#valorUsuario").value = ""; //id: es "#valorUsuario" y esto sirve para limpiar la cajita blanca
    
}
/* hoisting: hace el movimiento de las variables a las funciones
para que queden disponibles */ 
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros

    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    } else {
    // si el numero generado esta incluido en la lista hacemos
    // includes: barrer o recorrer todo nuestro arreglo y verfica si ya existe y nos devuelve un buleano true o false.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); 
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reinciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar msj de intervalo de numeros
    //generar nuevo aleatorio
    //inicializar el numero de intentos 
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
documento.querySelector("#reiniciar").setAttribute("disabled","true");

}

condicionesIniciales();



/*arrays (arreglos): es un tipo de dato de naturaleza variable que se utiliza en cualquier 
lenguaje de programacion*/



/*eliminar toda esa declaracion de variables y llamadas al document,
lo encapsulo dentro de una funcion. ahora lo que estamos haciendo es 
invocar la funcion 2 veces, una para "h1" y otra para "p", es lo que s
se hizo para tener un codigo mas simplificado al utilizar function 
declara las variables solo una vez */

/* variables que fueron eliminadas para simplificar mas el codigo*/

//console.log(typeof(numerosDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numerosDeUsuario);

    //ctrl+f : para buscar en paimer