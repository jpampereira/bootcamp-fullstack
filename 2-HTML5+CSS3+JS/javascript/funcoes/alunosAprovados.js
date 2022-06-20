function verificaAprovados(alunos, media) {
    const aprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        const {nota, nome } = alunos[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

const alunos = [
    { nome: 'João', nota: 6 },
    { nome: 'Ana', nota: 9.5 },
    { nome: 'Lucas', nota: 5 },
    { nome: 'Carla', nota: 6.5 },
    { nome: 'Beatriz', nota: 4 },
    { nome: 'Caio', nota: 7.2 }
];

console.log(verificaAprovados(alunos, 6));