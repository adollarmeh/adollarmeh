function createCloudsAndSymbols() {
    const cloudsContainer = document.getElementById('clouds');

    function createCloud() {
        // Main cloud size and random speed
        const mainSize = Math.random() * (120 - 80) + 80; // Adjusted for larger size
        const speed = Math.random() * (60 - 20) + 20; // Random speed between 20s and 60s

        // Create main cloud div
        const cloudBase = document.createElement('div');
        cloudBase.className = 'cloud';
        cloudBase.style.width = `${mainSize}px`;
        cloudBase.style.height = `${mainSize * 0.6}px`; // Maintain aspect ratio
        setCloudPositionAndSpeed(cloudBase, speed);

        // Create and position smaller attached circles
        const smallCircle = document.createElement('div');
        smallCircle.className = 'cloud-part';
        const smallSize = mainSize / 3;
        smallCircle.style.width = `${smallSize}px`;
        smallCircle.style.height = `${smallSize}px`;
        smallCircle.style.position = 'absolute';
        smallCircle.style.left = `-${smallSize / 2}px`; // Half outside the main cloud on the left
        setCloudPositionAndSpeed(smallCircle, speed, true);

        const largeCircle = document.createElement('div');
        largeCircle.className = 'cloud-part';
        const largeSize = (mainSize / 3) * 2;
        largeCircle.style.width = `${largeSize}px`;
        largeCircle.style.height = `${largeSize}px`;
        largeCircle.style.position = 'absolute';
        largeCircle.style.right = `-${largeSize / 2}px`; // Half outside the main cloud on the right
        setCloudPositionAndSpeed(largeCircle, speed, true);

        // Append circles to the main cloud div
        cloudBase.appendChild(smallCircle);
        cloudBase.appendChild(largeCircle);

        // Append the main cloud div to the container
        cloudsContainer.appendChild(cloudBase);
    }

    function setCloudPositionAndSpeed(element, speed, isPart = false) {
        element.style.animationDuration = `${speed}s`;
        if (!isPart) { // Only set top position for the main cloud, not its parts
            element.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        }
    }

    // Create a specified number of clouds
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
