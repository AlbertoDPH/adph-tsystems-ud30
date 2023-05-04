let valores = [true, 5, false, "hola", "adios", 2];

let num1, num2;

// Identificar elementos numericos
valores.forEach(function (valor) {
    if (typeof valor === "number") {
        if (num1 === undefined) {
            num1 = valor;
        } else {
            num2 = valor;
        }
    }
});

// Realizar las operaciones matemáticas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;

// Operaciones matematicas
let mensaje2 = `
<p>Suma: ${num1} + ${num2} = ${suma}</p>
<p>Resta: ${num1} - ${num2} = ${resta}</p>
<p>Multiplicacion: ${num1} * ${num2} = ${multiplicacion}</p>
<p>Division: ${num1} / ${num2} = ${division}</p>
<p>Modulo: ${num1} % ${num2} = ${modulo}</p>
`;

// Mostrar los resultados en la web
document.getElementById("resulOperaciones").innerHTML = mensaje2;