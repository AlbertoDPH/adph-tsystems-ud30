// Funcion que detecta si una cadena de texto es un palindromo
function esPalindromo(cadena) {
    // Convierte la cadena a minusculas y elimina los espacios
    cadena = cadena.toLowerCase().replace(/ /g, "");
  
    // Comprueba si la cadena es igual a su inversa
    return cadena === cadena.split("").reverse().join("");
  }
  // Se pide introducir una cadena de texto
  let texto = prompt("Introduce una cadena de texto:");
  
  // Llama a la funcion esPalindromo y muestra el resultado en la consola
  if (esPalindromo(texto)) {
    console.log("La cadena de texto es un palindromo");
  } else {
    console.log("La cadena de texto no es un palindromo");
  }
  