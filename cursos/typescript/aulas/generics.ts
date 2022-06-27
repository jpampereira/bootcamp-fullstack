// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string;

function useState<S extends numOrStr = string>() { // S é number ou string e string é padrão
	let state: S;

	function getState() {
		return state;
	}

	function setState(newState: S) {
		state = newState;
	}

	return { getState, setState };
}

const newState = useState(); // não definiu o tipo, logo será o padrão
const newState2 = useState<number>(); // number definido com o tipo de S

newState.setState('foo');
console.log(newState.getState());

// newState.setState(123); // ERRO! Tipo já definido
// console.log(newState.getState());

newState.setState('bar');
console.log(newState.getState());

newState2.setState(123);
console.log(newState2.getState());