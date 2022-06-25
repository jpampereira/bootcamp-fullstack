function multiplicaComThis(numeros, thisArg) {
    return numeros.map(function (numero) {
        return numero * this.valor;
    }, thisArg);
}

function multiplicaSemThis(numeros, multiplicador) {
    return numeros.map(numero => numero * multiplicador);
}

const numeros = [1, 3, 7, 12, 8, 22, 35, 6, 17];
const multiplicador = { valor: 3 };

console.log(multiplicaComThis(numeros, multiplicador));
console.log(multiplicaSemThis(numeros, multiplicador.valor));