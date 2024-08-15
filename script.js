// Mapeo de las reglas de encriptación
const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const decryptionRules = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};

// Encriptar texto
function encryptText(text) {
    return text.split('').map(letter => encryptionRules[letter] || letter).join('');
}

// Desencriptar texto
function decryptText(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionRules[match]);
}

// Manejo de eventos para los botones
document.getElementById('encrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('output-text').value = decryptedText;
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
