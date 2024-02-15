function createCloudsAndSymbols() {
    const cloudsContainer = document.getElementById('clouds');
    const symbolsContainer = document.getElementById('symbols');

    // Create clouds
    for (let i = 0; i < 20; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        const size = Math.random() * 60 + 40; // Cloud size between 40 and 100px
        cloud.style.width = `${size}px`;
        cloud.style.height = `${size * 0.6}px`; // Maintain aspect ratio
        cloud.style.left = `${Math.random() * 100}%`;
        cloud.style.animationDuration = `${Math.random() * 20 + 40}s`; // Animation duration between 40 and 60s
        cloudsContainer.appendChild(cloud);
    }

    // Create $1 symbols
    for (let i = 0; i < 5; i++) {
        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = '$1';
        const size = Math.random() * 30 + 20; // Symbol size between 20 and 50px
        symbol.style.fontSize = `${size}px`;
        symbol.style.left = `${Math.random() * 100}%`;
        symbol.style.animationDuration = `${Math.random() * 20 + 40}s`; // Animation duration between 40 and 60s
        symbolsContainer.appendChild(symbol);
    }
}

// Modal functionality
var modal = document.getElementById("payment
