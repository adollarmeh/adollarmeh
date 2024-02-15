// Modal functionality
var modal = document.getElementById("paymentOptions");
var btn = document.getElementById("donateButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    cursor: pointer;
}

button {
    font-size: 1em;
    padding: 10px 20px;
    border: 2px solid black;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    background-color: black;
    color: white;
}
