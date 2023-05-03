//Archivo archivo JavaScript externo

// Ejecuta el codigo al cargar la pagina
window.onload = function () {
    // Declaramos variable mensaje
    let mensaje;

    // Contenido de la variable mensaje
    mensaje = "Hola Mundo!";
    // Muestra el contenido de la variable mensaje en la pagina
    document.getElementById("mensaje1").innerHTML = mensaje;

    // Contenido de la variable mensaje
    mensaje = "Qué facil es incluir 'comillas simples'" + '<br>y" comillas dobles"';

    // Muestra el contenido de la variable mensaje en la pagina
    document.getElementById("mensaje2").innerHTML = mensaje;
}