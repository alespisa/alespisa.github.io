const startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    startButton.style.opacity = 1;
    const fadeOut = setInterval(() => {
        startButton.style.opacity -= 0.05;
        if (startButton.style.opacity <= 0) {
            clearInterval(fadeOut);
            startButton.style.display = 'none';
            setInterval(draw, 50);
            setTimeout(() => {
                revealWelcomeText();
            }, 5000);
        }
    }, 50);
});