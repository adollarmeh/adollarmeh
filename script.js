// Get the modal
var modal = document.getElementById("paymentOptions");

// Get the button that opens the modal
var btn = document.getElementById("donateButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}function playVideo() {
    // Placeholder for playing video, adapt based on your actual video hosting solution
    alert("This would play a thank-you video. Replace this alert with your video logic.");
}
