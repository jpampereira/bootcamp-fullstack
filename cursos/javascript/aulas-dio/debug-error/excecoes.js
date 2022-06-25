function arrayValidation(array, length) {
    if (!array || !length) throw new ReferenceError('Insira os parâmetros');
    if (typeof array !== 'object') throw new TypeError('O primeiro parâmetro deve ser um array');
    if (typeof length !== 'number') throw new TypeError('O segundo parâmetro deve ser um número');
    if (array.length !== length) throw new RangeError('O tamanho do array não é igual ao valor passado');

    return array;
}

function ExceptionsTreatment(array, length) {
    try {
        console.log(arrayValidation(array, length));
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Esse é um ReferenceError: ' + e.message);
        } else if (e instanceof TypeError) {
            console.log('Esse é um TypeError: ' + e.message);
        } else if (e instanceof RangeError) {
            console.log('Esse é um RangeError: ' + e.message);
        } else {
            console.log('Erro não esperado!');
            console.log(e);
        }
    }
}

ExceptionsTreatment([1, 2, 3]);
ExceptionsTreatment(2, 2);
ExceptionsTreatment([1, 2, 3], '2');
ExceptionsTreatment([1, 2, 3], 2);
ExceptionsTreatment([1, 2, 3], 3);