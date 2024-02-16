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

let lastX, lastY;

document.addEventListener('mousemove', function(event) {
    const bodyElement = document.querySelector('body');

    if (typeof lastX === 'undefined') {
        lastX = event.clientX;
        lastY = event.clientY;
        return;
    }

    const diffX = event.clientX - lastX;
    const diffY = event.clientY - lastY;

    let cursorImage = '';

    if (Math.abs(diffX) > Math.abs(diffY)) {
        // Horizontal movement
        cursorImage = diffX > 0 ? 'collector3.gif' : 'collector1.gif'; // Right or Left
    } else {
        // Vertical movement
        cursorImage = diffY > 0 ? 'collector4.gif' : 'collector2.gif'; // Down or Up
    }

    bodyElement.style.cursor = `url(${cursorImage}), auto`;

    lastX = event.clientX;
    lastY = event.clientY;
});

// Reset cursor when mouse leaves the document
document.addEventListener('mouseleave', function() {
    document.querySelector('body').style.cursor = 'auto';
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
