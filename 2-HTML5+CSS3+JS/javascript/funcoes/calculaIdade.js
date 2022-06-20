function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const joao = {
    nome: 'João Pedro',
    idade: 25
}

const ana = {
    nome: 'Ana Beatriz',
    idade: 22
}

console.log(calculaIdade.call(joao, 7));
console.log(calculaIdade.apply(ana, [12]));

let silvia = {
    nome: 'Silvia',
    idade: 61
}

silvia = calculaIdade.bind(silvia);

console.log(silvia(3));