let num = parseInt(prompt("Introduce un numero:"));

// Inicializa la variable para almacenar el resultado del factorial
let factorial = 1;

// bucle par el calculo de la factorial
for (let i = num; i > 0; i--) {
    factorial *= i;
}

// Muestra el resultado por consola
console.log(`El factorial de ${num} es: ${factorial}`);