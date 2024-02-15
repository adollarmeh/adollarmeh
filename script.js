function createCloudsAndSymbols() {
    const cloudsContainer = document.getElementById('clouds');
    const symbolsContainer = document.getElementById('symbols');

    // Function to create a cloud or symbol with direction and position
    function createFloatingElement(elementType, container, sizeRange, durationRange, isSymbol = false) {
        const element = document.createElement('div');
        element.className = elementType;
        const size = Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min;
        element.style.width = isSymbol ? `${size / 2}px` : `${size}px`;
        element.style.height = `${size * 0.6}px`;
        element.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // Random start position along Y-axis
        element.style.animationDuration = `${Math.random() * (durationRange.max - durationRange.min) + durationRange.min}s`;

        // Randomly assign direction
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        element.style.animationDirection = direction;

        if (isSymbol) {
            element.textContent = '$1';
            element.style.fontSize = `${size / 3}px`;
        }

        container.appendChild(element);
    }

    // Create clouds
    for (let i = 0; i < 20; i++) {
        createFloatingElement('cloud', cloudsContainer, {min: 40, max: 100}, {min: 40, max: 60});
    }

    // Create $1 symbols
    for (let i = 0; i < 5; i++) {
        createFloatingElement('symbol', symbolsContainer, {min: 20, max: 50}, {min: 40, max: 60}, true);
    }
}

// Modal functionality remains the same

// Initialize clouds and symbols
createCloudsAndSymbols();
