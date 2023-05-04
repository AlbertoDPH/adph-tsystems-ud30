let texto1 = "hola";
let texto2 = "adios";
let resultado = texto1.localeCompare(texto2);

let mensaje = "";

if (resultado > 0) {
    mensaje = "El texto mayor es: " + texto1;
} else if (resultado < 0) {
    mensaje = "El texto mayor es: " + texto2;
} else {
    mensaje = "Los textos son iguales";
}

document.getElementById("resultado").innerHTML = mensaje;