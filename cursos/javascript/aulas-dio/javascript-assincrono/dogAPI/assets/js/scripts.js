const URL = 'https://dog.ceo/api/breeds/image/random';

async function getDogs() {
    try {
        const response = await fetch(URL);
        const json = await response.json();
        
        return json.message;
    } catch (e) {
        console.log(e.message);
    }
}

function createImgSection() {
    const title = window.document.getElementsByTagName('h1')[0];
    const imgWrapper = window.document.createElement('section');
    const img = window.document.createElement('img');

    imgWrapper.id = 'img';
    img.alt = 'Dog image';
    img.id = 'dog';

    title.insertAdjacentElement('afterend', imgWrapper);
    imgWrapper.appendChild(img);

    return img;
}

async function insertImg() {
    const imgUrl = await getDogs();

    let dogImg = window.document.getElementById('dog');

    if (dogImg === null) {
        dogImg = createImgSection();
    }

    dogImg.src = imgUrl;
}

const button = window.document.getElementsByTagName('button')[0];
button.onclick = insertImg;