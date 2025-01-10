const welcomeText = "WELCOME";
const toText = "TO";
const nameText = "ALESSANDRO PISANI'S";
const matrixText = "MATRIX";

function revealWelcomeLetter(index) {
    return new Promise((resolve) => {
        const letterElement = document.createElement('span');
        welcomeMessage.appendChild(letterElement);

        let currentLetter = '';
        const interval = setInterval(() => {
            currentLetter = letters[Math.floor(Math.random() * letters.length)];
            letterElement.textContent = currentLetter;
        }, 80);

        setTimeout(() => {
            clearInterval(interval);
            letterElement.textContent = welcomeText[index];
            letterElement.style.opacity = 1;
            resolve();
        }, 800);
    });
}

function revealNameLetter(index){
    return new Promise((resolve) => {
        const letterElement = document.createElement('span');
        nameMessage.appendChild(letterElement);

        let currentLetter = '';
        const interval = setInterval(() => {
            currentLetter = letters[Math.floor(Math.random() * letters.length)];
            letterElement.textContent = currentLetter;
        }, 80);

        setTimeout(() => {
            clearInterval(interval);
            letterElement.textContent = nameText[index];
            letterElement.style.opacity = 1;
            resolve();
        }, 800);
    });
}

function revealToLetter(index){
    return new Promise((resolve) => {
        const letterElement = document.createElement('span');
        toMessage.appendChild(letterElement);

        let currentLetter = '';
        const interval = setInterval(() => {
            currentLetter = letters[Math.floor(Math.random() * letters.length)];
            letterElement.textContent = currentLetter;
        }, 80);

        setTimeout(() => {
            clearInterval(interval);
            letterElement.textContent = toText[index];
            letterElement.style.opacity = 1;
            resolve();
        }, 800);
    });
}

function revealMatrixLetter(index){
    return new Promise((resolve) => {
        const letterElement = document.createElement('span');
        matrixMessage.appendChild(letterElement);

        let currentLetter = '';
        const interval = setInterval(() => {
            currentLetter = letters[Math.floor(Math.random() * letters.length)];
            letterElement.textContent = currentLetter;
        }, 80);

        setTimeout(() => {
            clearInterval(interval);
            letterElement.textContent = matrixText[index];
            letterElement.style.opacity = 1;
            resolve();
        }, 800);
    });
}

async function revealWholeText() {
    await revealWelcomeText();
    await revealToText();
    await revealNameText();
    await revealMatrixText();
}

async function revealWelcomeText() {
    for (let i = 0; i < welcomeText.length; i++) {
        await revealWelcomeLetter(i);
    }
}

async function revealNameText() {
    for (let i = 0; i < nameText.length; i++) {
        await revealNameLetter(i);
    }
}

async function revealToText() {
    for (let i = 0; i < toText.length; i++) {
        await revealToLetter(i);
    }
}

async function revealMatrixText() {
    for (let i = 0; i < matrixText.length; i++) {
        await revealMatrixLetter(i);
    }
}