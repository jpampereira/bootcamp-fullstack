function criaPrimeiraFrase(a, b) {
	const saoIguais = a === b ? '' : 'não';

	return `Os números ${a} e ${b} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(a, b) {
	const soma = a + b;

	let comparaSomaComDez = '';
	if (soma > 10) {
		comparaSomaComDez = 'maior que';
	} else if (soma < 10) {
		comparaSomaComDez = 'menor que';
	} else {
		comparaSomaComDez = 'igual a';
	}

	let comparaSomaComVinte = '';
	if (soma > 20) {
		comparaSomaComVinte = 'maior que';
	} else if (soma < 20) {
		comparaSomaComVinte = 'menor que'; 
	} else {
		comparaSomaComVinte = 'igual a';
	}

	return `Sua soma é ${soma}, que é ${comparaSomaComDez} 10 e ${comparaSomaComVinte} 20.`;
}

function comparaNumeros(a, b) {
	if (isNaN(a) || isNaN(b)) return "Defina dois números!";

	const primeiraFrase = criaPrimeiraFrase(a, b);
	const segundaFrase = criaSegundaFrase(a, b);

	return `${primeiraFrase} ${segundaFrase}`;
}

console.log(comparaNumeros(6, 7));