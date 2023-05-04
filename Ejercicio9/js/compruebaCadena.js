// Funcion que muestra informacion sobre una cadena de texto
function infoCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
        return "La cadena solo tiene mayusculas";
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena solo tiene minusculas";
    } else {
        return "La cadena tiene mayusculas y minusculas";
    }
}

// Se pide que se introduzca una cadena de texto
let texto = prompt("Introduce texto:");

// Llama a la funcion infoCadena y muestra el resultado en la consola
console.log(infoCadena(texto));