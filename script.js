body, html {
    height: 100%;
    margin: 0;
    background-color: #87CEEB; /* Sky blue background */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'Nunito', sans-serif;
}

.container {
    text-align: center;
    position: relative;
    z-index: 2;
}

.modal {
    display: none;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
    padding-top: 60px;
}

.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
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
