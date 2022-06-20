const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        const randomValue = Math.random();

        if (randomValue >= 0.5) {
            resolve(`${randomValue.toFixed(2)} is bigger than 0.5`);
        }

        reject(`${randomValue.toFixed(2)} is smaller than 0.5`);
    }, 5000);
});

async function asyncFunctions() {
    try {
        const msg = await myPromise;
        console.log(`Fullfiled: ${msg}`);
        
        console.log('Hello, world!');
        console.log(`1 + 2 = ${1+2}`);
    } catch (msg) {
        console.log(`Rejected: ${msg}`);
    }
}

asyncFunctions()

console.log('Function response in 5 seconds...');