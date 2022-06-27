const botaoAtualizar = window.document.getElementById('atualizar-saldo');
const botaoLimpar = window.document.getElementById('limpar-saldo');
const campoSaldo = window.document.getElementById('campo-saldo');
const soma = window.document.getElementById('soma') as HTMLInputElement;

if (campoSaldo) {
	campoSaldo.innerHTML = '0';
}

function somarAoSaldo(soma: string) {
	if (campoSaldo) {
		campoSaldo.innerHTML = `${Number(campoSaldo.innerHTML) + Number(soma)}`;
	}
}

function limparSaldo(): void {
	if (campoSaldo) {
		campoSaldo.innerHTML = '0';
	}
}

botaoAtualizar?.addEventListener('click', () => somarAoSaldo(soma.value));
botaoLimpar?.addEventListener('click', () => limparSaldo());	