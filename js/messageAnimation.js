const welcomeText = "WELCOME";

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

async function revealWelcomeText() {
    for (let i = 0; i < welcomeText.length; i++) {
        await revealWelcomeLetter(i);
    }
}