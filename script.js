function createCloudsAndSymbols() {
    const cloudsContainer = document.getElementById('clouds');
    const symbolsContainer = document.getElementById('symbols');

    // Function to create a cloud with additional circles
function createCloud() {
        const mainSize = Math.random() * (60 - 40) + 40; // Main cloud size between 40 and 60
        const cloudBase = createCloudPart(mainSize, 'cloud');
        cloudsContainer.appendChild(cloudBase);

        // Left smaller circle, 1/3 the size of the main
        const smallCircle = createCloudPart(mainSize / 3, 'cloud-part');
        smallCircle.style.left = `-${mainSize / 4}px`; // Positioning to the left
        cloudBase.appendChild(smallCircle);

        // Right larger circle, 2/3 the size of the main
        const largeCircle = createCloudPart((mainSize / 3) * 2, 'cloud-part');
        largeCircle.style.right = `-${mainSize / 4}px`; // Positioning to the right
        cloudBase.appendChild(largeCircle);
    }

    // Helper function to create individual cloud parts
    function createCloudPart(size, className) {
        const part = document.createElement('div');
        part.className = className;
        part.style.width = `${size}px`;
        part.style.height = `${size}px`;
        return part;
    }

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
// Modal functionality
var modal = document.getElementById("paymentOptions");
var btn = document.getElementById("donateButton");

// Function to open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Function to close the modal when clicking on the close button
function closeModal() {
    modal.style.display = "none";
}

// Clicking anywhere outside of the modal content closes the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Initialize clouds and symbols
createCloudsAndSymbols();
