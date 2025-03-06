function verificanacci(numero) {
    let a = 0, b = 1;
    while (b <= numero) {
        if (b === numero || a === numero) {
            return `${numero} pertence à sequência de Fibonacci.`;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return `${numero} não pertence à sequência de Fibonacci.`;
}

const numero = 22; // Altere este valor para testar com outros números
console.log(verificanacci(numero));