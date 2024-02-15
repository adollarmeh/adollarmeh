// Get the modal
var modal = document.getElementById("paymentOptions");

// Get the button that opens the modal
var btn = document.getElementById("donateButton");

// Function to open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
