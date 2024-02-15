function createCloudsAndSymbols() {
    const cloudsContainer = document.getElementById('clouds');
    const symbolsContainer = document.getElementById('symbols');

    function createCloud() {
        const mainSize = Math.random() * (120 - 80) + 80; // Main cloud size
        const speed = Math.random() * (60 - 20) + 20; // Random speed

        // Create the main cloud div and set its properties
        const cloudBase = document.createElement('div');
        cloudBase.className = 'cloud';
        cloudBase.style.width = `${mainSize}px`;
        cloudBase.style.height = `${mainSize * 0.6}px`;
        cloudBase.style.animationDuration = `${speed}s`;
        cloudBase.style.top = `${Math.random() * (window.innerHeight - 50)}px`;

        // Determine direction and apply it
        cloudBase.style.animationName = Math.random() > 0.5 ? 'driftRight' : 'driftLeft';

        // Create and append smaller circles to simulate a cloud shape
        appendCloudPart(cloudBase, mainSize / 3, '-left');
        appendCloudPart(cloudBase, (mainSize / 3) * 2, '-right');

        cloudsContainer.appendChild(cloudBase);
    }

    function appendCloudPart(cloudBase, size, side) {
        const part = document.createElement('div');
        part.className = `cloud-part${side}`;
        part.style.width = `${size}px`;
        part.style.height = `${size}px`;
        cloudBase.appendChild(part);
    }

    function createSymbol() {
        const size = Math.random() * (50 - 20) + 20; // Symbol size
        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = '$1';
        symbol.style.fontSize = `${size}px`;
        symbol.style.animationDuration = `${Math.random() * (60 - 20) + 20}s`;
        symbol.style.top = `${Math.random() * (window.innerHeight - 50)}px`;

        // Determine direction and apply it
        symbol.style.animationName = Math.random() > 0.5 ? 'driftRight' : 'driftLeft';

        symbolsContainer.appendChild(symbol);
    }

    // Create clouds and symbols
    for (let i = 0; i < 20; i++) {
        createCloud();
    }
    for (let i = 0; i < 5; i++) {
        createSymbol();
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

// Initialize everything
createCloudsAndSymbols();
