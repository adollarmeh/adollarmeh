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
