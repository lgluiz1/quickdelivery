document.addEventListener("DOMContentLoaded", function () {
    function iniciarContador(elemento) {
        let valorFinal = parseInt(elemento.getAttribute("data-valor"));
        let incremento = Math.ceil(valorFinal / 100); // Ajusta a velocidade da contagem
        let contador = 0;

        let intervalo = setInterval(() => {
            contador += incremento;
            if (contador >= valorFinal) {
                contador = valorFinal;
                clearInterval(intervalo);
            }

            // Se o número for maior que 1 milhão, exibir "M" no final
            if (valorFinal >= 1000000) {
                elemento.textContent = `+${(contador / 1000000).toFixed(1)}M`;
            } 
            // Se for a div dos anos, exibir "Anos" no final
            else if (elemento.classList.contains("anos")) {
                elemento.textContent = `+${contador} Anos`;
            } 
            else {
                elemento.textContent = `+${contador}`;
            }
        }, 30);
    }

    let observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                let elemento = entrada.target;
                if (elemento.textContent === "+0") {
                    iniciarContador(elemento);
                }
                observador.unobserve(elemento); // Para de observar após iniciar a contagem
            }
        });
    }, { threshold: 0.5 }); // Começa quando 50% da div estiver visível

    document.querySelectorAll(".contador").forEach((elemento) => {
        observador.observe(elemento);
    });
});
