type Profissao = 'Atriz' | 'Padeiro' | 'Professor' | 'Desenvolvedor';

class Pessoa {
	private _nome: string;
	private _idade: number;
	private _profissao: Profissao;

	constructor(n: string, i: number, p: Profissao) {
		this._nome = this.primeiraLetraMaiuscula(n);
		this._idade = i;
		this._profissao = p;
	}

	private primeiraLetraMaiuscula(nome: string) {
		let nomes: string[] = nome.split(/\s+/);

		nomes = nomes.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase());
		
		return nomes.join(' ');
	}

	get nome() {
		return this._nome;
	}

	set nome(n: string) {
		this._nome = this.primeiraLetraMaiuscula(n);
	}

	get idade() {
		return this._idade;
	}

	set idade(i: number) {
		if (i < 0) {
			console.log('Idade inválida!');
			return;
		}

		this._idade = i;
	}

	get profissao() {
		return this._profissao;
	}

	set profissao(p: Profissao) {
		this._profissao = p;
	}
}

const pessoa1: Pessoa = new Pessoa('maria', 29, 'Professor');
const pessoa2: Pessoa = new Pessoa('roberto', 19, 'Padeiro');
const pessoa3: Pessoa = new Pessoa('laura', 32, 'Atriz');
const pessoa4: Pessoa = new Pessoa('joão pedro de abreu martins pereira', 25, 'Padeiro');

console.log(pessoa4.nome);
pessoa4.idade = -4;
pessoa4.profissao = 'Desenvolvedor';
console.log(pessoa4);