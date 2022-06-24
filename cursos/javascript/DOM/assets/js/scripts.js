function changeMode(e) {
    changeClasses();
    changeText();
}

function changeClasses() {
    const elements = window.document.querySelectorAll('h1, button, footer, body');

    elements.forEach(element => {
        element.classList.toggle('dark-mode');
    });
}

function changeText() {
    const h1 = window.document.getElementsByTagName('h1')[0];

    const darkModeText = 'Dark Mode';
    const lightModeText = 'Light Mode';

    if (button.classList.contains('dark-mode')) {
        h1.innerHTML = darkModeText + ' ON';
        button.innerHTML = lightModeText;
    } else {
        h1.innerHTML = lightModeText + ' ON';
        button.innerHTML = darkModeText;
    }
}

const button = window.document.getElementById('mode-selector');
button.addEventListener('click', changeMode);