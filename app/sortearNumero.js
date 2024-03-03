
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNummeroAleatorio()

function gerarNummeroAleatorio(){
    
    let numeroSorteado = parseInt(Math.random() * maiorValor + 1)
    
    return numeroSorteado;
     
}

const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor