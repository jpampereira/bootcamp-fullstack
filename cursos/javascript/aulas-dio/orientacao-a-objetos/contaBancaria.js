class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        return this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) return 'Operação inválida! Saldo insuficiente.';

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0) return 'Operação inválida! Valor para depósito não permitido.';

        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, tipo = 'corrente', cartaoCredito) {
        super(agencia, numero, tipo);

        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, tipo = 'poupança') {
        super(agencia, numero, tipo);
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, tipo = 'universitária') {
        super(agencia, numero, tipo);
    }

    sacar(valor) {
        if (valor > 500) return 'Operação inválida! Sua conta não permite sacar esse valor.';
        if (valor > this._saldo) return 'Operação inválida! Saldo insuficiente.';

        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}