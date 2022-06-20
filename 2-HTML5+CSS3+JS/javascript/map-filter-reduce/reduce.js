// Exercicio 1

function soma(numeros) {
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0)
}
const numeros = [1, 3, 7, 12, 8, 22, 35, 6, 17];

console.log(soma(numeros));

// Exercicio 2

function saldoFinal(lista, saldo) {
    return lista.reduce((acumulador, atual) => acumulador - atual.preco, saldo);
}

const lista = [
    { nome: 'Bolacha', preco: 2.99 },
    { nome: 'Ketchup', preco: 5.30 },
    { nome: 'Papel Higiênico', preco: 10 },
    { nome: 'Garrafa de Vinho', preco: 19.90 },
    { nome: 'Gelatina em Pó', preco: 1.50 },
    { nome: 'Chocolate', preco: 4 }
]

console.log(saldoFinal(lista, 50));