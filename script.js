function createCloudsAndSymbols() {
    const cloudsContainer = document.getElementById('clouds');
    const symbolsContainer = document.getElementById('symbols');

    function createGifElement(src, className, container) {
        const gif = document.createElement('img');
        gif.src = src;
        gif.className = className;
        const size = Math.random() * (120 - 80) + 80; // For clouds, larger size
        gif.style.width = `${className === 'cloud' ? size : size / 2}px`; // Symbols are smaller
        gif.style.animationDuration = `${Math.random() * (60 - 20) + 20}s`;
        gif.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        gif.style.animationName = Math.random() > 0.5 ? 'driftRight' : 'driftLeft';
        container.appendChild(gif);
    }

    // Create clouds with cloud.gif
    for (let i = 0; i < 20; i++) {
        createGifElement('cloud.gif', 'cloud', cloudsContainer);
    }

    // Create $1 symbols with coin.gif
    for (let i = 0; i < 10; i++) { // Adjust number of symbols as desired
        createGifElement('coin.gif', 'symbol', symbolsContainer);
    }
}

document.addEventListener('keydown', function(event) {
    const bodyElement = document.querySelector('body');
    // Ensure the body has the custom cursor class
    if (!bodyElement.classList.contains('custom-cursor')) {
        bodyElement.classList.add('custom-cursor');
    }

    switch(event.key) {
        case "ArrowLeft":
            // Change cursor to collector1.gif when moving left
            bodyElement.style.cursor = 'url(collector1.gif), auto';
            break;
        case "ArrowRight":
            // Change cursor to collector3.gif when moving right
            bodyElement.style.cursor = 'url(collector3.gif), auto';
            break;
        case "ArrowUp":
            // Change cursor to collector2.gif when moving up
            bodyElement.style.cursor = 'url(collector2.gif), auto';
            break;
        case "ArrowDown":
            // Change cursor to collector4.gif when moving down
            bodyElement.style.cursor = 'url(collector4.gif), auto';
            break;
    }
});

document.addEventListener('keyup', function(event) {
    // Revert to the default cursor when the arrow keys are released
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
        document.querySelector('body').style.cursor = '';
    }
});

// Modal functionality
var modal = document.getElementById("paymentOptions");
var btn = document.getElementById("donateButton");

btn.onclick = function() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

createCloudsAndSymbols();
