// script.js
function encryptText() {
    let text = document.getElementById('inputText').value;
    text = text.toLowerCase(); // Converter para minúsculas

    const encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('outputText').textContent = encryptedText;
}

function decryptText() {
    let text = document.getElementById('outputText').textContent;

    const decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('inputText').value = decryptedText;
}