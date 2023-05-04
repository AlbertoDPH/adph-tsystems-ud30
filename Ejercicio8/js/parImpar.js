// Funcion que devuelve si un numero es par o impar
function parImpar(numero) {
    if (numero % 2 === 0) {
        return "El numero es par";
    } else {
        return "El numero es impar";
    }
}

// Solicita al usuario que ingrese un numero entero
let num = parseInt(prompt("Introduce un numero entero:"));

// Llama a la funcion parImpar y muestra el resultado en HTML
document.getElementById("resultado").innerHTML = parImpar(num);