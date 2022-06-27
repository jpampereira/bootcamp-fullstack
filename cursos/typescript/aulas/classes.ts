abstract class UserAccount {
	public name: string;
	protected age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	logDetails(): void {
		console.log(`The player ${this.name} is ${this.age} years old.`);
	}
}

class CharAccount extends UserAccount {
	private _nickname: string;
	readonly level: number;

	constructor(name: string, age: number, nickname: string, level: number) {
		super(name, age);
		this._nickname = nickname;
		this.level = level;
	}

	get nickname() {
		return this._nickname;
	}

	set nickname(nickname: string) {
		this._nickname = nickname;
	}

	logCharDetails(): void {
		console.log(`The player ${this.name} is ${this.age} and has the char ${this._nickname} at level ${this.level}`);
	}
}

// const joao = new UserAccount('João Pedro', 25);
// console.log(joao);
// console.log(joao.age);
// joao.logDetails();

const peps = new CharAccount('João Pedro', 25, 'pepspereira', 100);
// console.log(peps);
// peps.logDetails();
// peps.level = 799;
// peps.logCharDetails();
peps.nickname = 'jpampereira';
console.log(peps.nickname);