function createCloudsAndSymbols() {
    const cloudsContainer = document.getElementById('clouds');

    function createCloud() {
        const cloudImg = document.createElement('img');
        cloudImg.src = 'images/cloud.gif'; // Ensure the path matches where you upload the GIF
        cloudImg.className = 'cloud';
        cloudImg.style.animationDuration = `${Math.random() * (60 - 20) + 20}s`;
        cloudImg.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        cloudImg.style.animationName = Math.random() > 0.5 ? 'driftRight' : 'driftLeft';
        cloudsContainer.appendChild(cloudImg);
    }

    // Create a specified number of clouds
    for (let i = 0; i < 20; i++) {
        createCloud();
    }
}

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
