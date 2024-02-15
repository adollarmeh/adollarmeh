function createCloudsAndSymbols() {
    const cloudsContainer = document.getElementById('clouds');
    const symbolsContainer = document.getElementById('symbols');

    // Adjusted function to create detailed clouds
    function createCloud() {
        const mainSize = Math.random() * (60 - 40) + 40; // Main cloud size between 40 and 60
        // Adjusting for random direction
        const direction = Math.random() > 0.5 ? 'left' : 'right';
        const cloudBase = createCloudPart(mainSize, 'cloud', direction);
        cloudsContainer.appendChild(cloudBase);

        // Additional circles with adjusted positioning for direction
        const smallCircle = createCloudPart(mainSize / 3, 'cloud-part', direction);
        const largeCircle = createCloudPart((mainSize / 3) * 2, 'cloud-part', direction);
        smallCircle.style.position = 'absolute';
        largeCircle.style.position = 'absolute';

        if (direction === 'left') {
            smallCircle.style.left = `-${mainSize / 4}px`;
            largeCircle.style.right = `-${mainSize / 4}px`;
        } else { // Adjusting for right-to-left movement
            smallCircle.style.right = `-${mainSize / 4}px`;
            largeCircle.style.left = `-${mainSize / 4}px`;
        }

        cloudBase.appendChild(smallCircle);
        cloudBase.appendChild(largeCircle);

        // Random Y-axis position and animation duration
        cloudBase.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        cloudBase.style.animationDuration = `${Math.random() * (20 - 40) + 60}s`;

        // Assigning direction to animation
        cloudBase.style.animationDirection = direction === 'left' ? 'normal' : 'reverse';
    }

    // Adjusted helper function to create individual cloud parts
    function createCloudPart(size, className, direction) {
        const part = document.createElement('div');
        part.className = className;
        part.style.width = `${size}px`;
        part.style.height = `${size}px`;
        return part;
    }

    // Create $1 symbols with random properties
    for (let i = 0; i < 5; i++) {
        const size = Math.random() * (50 - 20) + 20; // Symbol size between 20 and 50
        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = '$1';
        symbol.style.fontSize = `${size}px`;
        symbolsContainer.appendChild(symbol);

        // Random direction, Y-axis position, and animation duration for symbols
        symbol.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        const direction = Math.random() > 0.5 ? 'normal' : 'reverse';
        symbol.style.animationDirection = direction;
        symbol.style.animationDuration = `${Math.random() * (20 - 40) + 60}s`;
    }

    // Creating 20 clouds
    for (let i = 0; i < 20; i++) {
        createCloud();
    }
}

// Modal functionality remains the same as your current script
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

// Initialize clouds and symbols
createCloudsAndSymbols();
