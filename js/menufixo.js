// Selecionando o header
const header = document.querySelector('nav');
const rastreamento = document.querySelector('.rastreamento-menu');

// Verificando a rolagem da página
window.onscroll = function() {
    // Se o scroll for maior que a altura do header, fixa o header no topo
    if (window.scrollY > header.offsetHeight) {
        header.classList.add('fixed');  // Adiciona a classe 'fixed' para fixar o header
        // adciona um display none ao rastreamento
        rastreamento.style.display = 'none';
        
    } else {
        header.classList.remove('fixed');  // Remove a classe 'fixed' quando o scroll voltar para o topo
        // se a tela for menor q 768px, nao volta a exibir o rastreamento
        if (window.innerWidth < 768)
            rastreamento.style.display = 'none';
        else
            rastreamento.style.display = 'flex';    
        
      
        
    }
};