function verificaChutePossuiValorValido(chute) {

    const numero = +chute

    if (chuteFormatoInvalido(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido</div>
        `
        return
    }

    if (chuteDentroDoIntervalo(numero)){
        elementoChute.innerHTML += `
        <div>Valor inválido: o valor deve estar entre ${menorValor} e ${maiorValor}</div>
        `
       return
    }

    if (numeroSecreto === numero) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `

        
    } else if( numeroSecreto > numero  ){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>
    `
    }


}

function chuteDentroDoIntervalo(numero) {
    return (numero < menorValor) || (numero > maiorValor)
}

function chuteFormatoInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {

    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

})