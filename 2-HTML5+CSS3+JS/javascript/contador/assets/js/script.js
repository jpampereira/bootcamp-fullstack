const currentNumberWrapper = window.document.getElementById("currentValue");
const incrementButton = window.document.getElementsByName("increment")[0];
const decrementButton = window.document.getElementsByName("decrement")[0];
const min = -10;
const max = 10;

let currentNumber = 0;

function checkSignal () {
	if (currentNumber > 0) {
		currentNumberWrapper.style.color = 'green';
	} else if (currentNumber < 0) {
		currentNumberWrapper.style.color = 'red'
	} else {
		currentNumberWrapper.style.color = 'black';
	}
}

function checkButtonStatus () {
	if (currentNumber === max) {
		incrementButton.setAttribute('disabled', '');	
	} else if (currentNumber === min) {
		decrementButton.setAttribute('disabled', '');
	} else {
		incrementButton.removeAttribute('disabled');
		decrementButton.removeAttribute('disabled');
	}
}

function increment () {
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
}

incrementButton.addEventListener('click', increment);
incrementButton.addEventListener('click', checkButtonStatus);
incrementButton.addEventListener('click', checkSignal);

decrementButton.addEventListener('click', decrement);
decrementButton.addEventListener('click', checkButtonStatus);
decrementButton.addEventListener('click', checkSignal);