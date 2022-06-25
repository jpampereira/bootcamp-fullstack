import { mostraIdade, mostraCidade, mostraHobby } from "./funcoes.mjs";

const pessoa = {
	nome: 'João Pedro',
	idade: 25,
	hobby: 'jogar vídeo game'
}

console.log(mostraIdade(pessoa));
console.log(mostraCidade(pessoa));
console.log(mostraHobby(pessoa));