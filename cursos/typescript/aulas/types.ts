// boolean (true | false)
let isOpen: boolean;
isOpen = true;

// string ("foo", 'foo', `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let item: string[];
item = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple (o número de elementos da lista e seus tipos é definido na declaração da variável)
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
	white = '#fff',
	black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any;
coisa = [1];
coisa = 2;
coisa = 'string';

// void (vazio)
function logger(): void {
	console.log('foo');
}

// null | undefined

// never (o lançamento do erro causa uma exceção e finaliza o código sem NUNCA retornar nada)
function error(): never {
	throw new Error('error');
}

// object
let cart: object;

cart = {
	key: 'fi'
}