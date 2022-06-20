/* Exemplo:
 * 
 * string = Joao Pedro 
 * 
 * replace = JoaoPedro
 * toLowerCase = joaopedro 
 * split = ['j', 'o', 'a', 'o', 'p', 'e', 'd', 'r', 'o']
 * reverse = ['o', 'r', 'd', 'e', 'p', 'o', 'a', 'o', 'j']
 * join = ordepoaoj
 */

// Minha solucao
function ehPalindromo(string) {
    if (typeof string !== 'string') return "Inserir uma string válida!";

    string = string.replace(/\s+/g, '');
    string = string.toLowerCase();

    const stringInversa = string.split("").reverse().join("");

    return string === stringInversa;
}

// Outra solucao
function ehPalindromo2(string) {
    if (typeof string !== 'string') return "Inserir uma string válida!";

    string = string.replace(/\s+/g, '');
    string = string.toLowerCase();

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(`Abba = ${ehPalindromo('Abba')}`);
console.log(`Gato = ${ehPalindromo('Gato')}`);
console.log(`A gorda ama a droga = ${ehPalindromo('A gorda ama a droga')}`);
console.log(`Joao Pedro = ${ehPalindromo('Joao Pedro')}`);

console.log(`Ovo = ${ehPalindromo2('Ovo')}`);
console.log(`Navio = ${ehPalindromo2('Navio')}`);
console.log(`O lobo ama o bolo = ${ehPalindromo2('O lobo ama o bolo')}`);
console.log(`Eu te amo = ${ehPalindromo2('Eu te amo')}`);