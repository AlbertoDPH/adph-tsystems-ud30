// Almacenamos el numero de DNI al usuario
let dniNumero = parseInt(prompt("Introduce el número de tu DNI (sin letra):"));

// Solicita la letra de DNI al usuario
let dniLetra = prompt("Introduce la letra de tu DNI:").toUpperCase();

// Array de letras
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Comprueba si el numero de DNI es valido
if (dniNumero < 0 || dniNumero > 99999999) {
  console.log("El numero no es valido.");
} else {
  // Calcula la letra del DNI
  let letra = letras[dniNumero % 23];

  // Compara la letra con la letra introducida
  if (letra !== dniLetra) {
    console.log("La letra no es correcta.");
  } else {
    console.log("El numero y la letra de DNI son OK");
  }
}
