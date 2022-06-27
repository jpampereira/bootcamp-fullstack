// AccountInfo
// CharInfo
// PlayerInfo

type AccountInfo = {
	id: number;
	name: string;
	email?: string; // o ? significa que o atributo é opcional na instanciação do tipo
}

const account: AccountInfo = {
	id: 123,
	name: 'João Pedro'
}

type CharInfo = {
	nickname: string;
	level: number;
}

const char: CharInfo = {
	nickname: 'jpampereira',
	level: 100
}

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
	id: 123,
	name: 'João Pedro',
	email: 'jpampereira@gmail.com',
	nickname: 'jpampereira',
	level: 100
}

console.log(player)