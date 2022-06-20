function rmvDuplicates(array) {
    const set = new Set(array);

    const newArray = [];

    for (value of set) {
        newArray.push(value);
    }
    
    return newArray;

    // return [...set]; // Solução da instrutora
}

const array = [30, 30, 40, 5, 223, 2009, 2034, 5];

console.log(rmvDuplicates(array));