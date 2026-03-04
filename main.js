console.log('Version de la rama MAIN');
/**
 * Calculadora Simple - WaySmart Project
 * Versión: 1.0
 */

// Función principal para calcular
function calcular(operacion, a, b) {
    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = a + b;
            break;
        case 'restar':
            resultado = a - b;
            break;
        case 'multiplicar':
            resultado = a * b;
            break;
        case 'dividir':
            if (b === 0) {
                return "Error: No se puede dividir por cero";
            }
            resultado = a / b;
            break;
        default:
            return "Operación no válida";
    }

    return `El resultado de ${operacion} ${a} y ${b} es: ${resultado}`;
}

// Pruebas en consola
console.log("--- Iniciando Calculadora WaySmart ---");
console.log(calcular('sumar', 10, 5));
console.log(calcular('restar', 20, 8));
console.log(calcular('multiplicar', 4, 3));
console.log(calcular('dividir', 10, 2));

console.log("--- Finalizando Calculadora WaySmart ---");