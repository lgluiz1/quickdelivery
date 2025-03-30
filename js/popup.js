 // Função para abrir o popup
 function openPopup() {
    document.getElementById('popup-container').style.display = 'flex';
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
}

// Form submit handler (exemplo simples)
document.getElementById('cotacao-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cotação enviada com sucesso!');
    closePopup();
});