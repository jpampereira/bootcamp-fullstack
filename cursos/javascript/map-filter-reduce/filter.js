function numerosPares(numeros) {
    return numeros.filter(callback)
}

function callback(numero) {
    return numero !== 0 && numero % 2 === 0;
}

const numeros = [1, 3, 7, 12, 8, 22, 35, 6, 17];

console.log(numerosPares(numeros));