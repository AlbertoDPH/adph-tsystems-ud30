// Archivo JavaScript externo

// Muestra "Hola Mundo!" en la pagina
function mensaje1() {
    document.getElementById("mensaje1").innerHTML = "Hola Mundo!";
}

// Muestra "Soy el primer script" en la pagina
function mensaje2() {
    document.getElementById("mensaje2").innerHTML = "Soy el primer script";
}
// Ejecuta las funciones al cargar la pagina
window.onload = function () {
    mensaje1();
    mensaje2();
}