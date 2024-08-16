function retrocederPagina() {
    window.history.back();
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    alert(`Obrigado pelo contato, ${name}! Sua mensagem foi recebida e logo será respondida.`);
});