// Solucao 1
function substituiPares(array) {
    if (!Array.isArray(array)) return -1; // Verifica se 'array' armazena uma estrutura de dados do tipo array
    if (array.length === 0) return -1; // Verifica se o array é vazio
    if (array.some(e => isNaN(e))) return -1; // Verifica se todos os elementos do array são números

    return array.map(e => e % 2 === 0 ? 0 : e);
}

// Solucao 2
function substituiPares2(array) {
    if (!Array.isArray(array)) return -1;
    if (array.length === 0) return -1;
    if (array.some(e => isNaN(e))) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = 0;
        }
    }

    return array;
}

console.log(substituiPares([1, 3, 4, 6, 80, 33, 23, 90]));
console.log(substituiPares([]));

console.log(substituiPares2([1, 3, 4, 6, 80, 33, 23, 90]));
console.log(substituiPares2(undefined))
console.log(substituiPares2([1, 2, 3, 'João', 5, 6]));