function verificaSeOChuteEValido(chute) {
    gameOver(chute);
    chuteString = chute.toString();
    const trataNumero = chute.replace(".", "");
    const numero = parseInt(trataNumero);
    console.log(numero);

    if (chuteforInvalido(numero)) {
        console.log(`${numero} é um Valor inválido`);
        elementoChute.innerHTML += `
        Valor Inválido
        `
    } else if (!(numeroForMaiorOuMenorQueOValorPermitido(numero))) {
        elementoChute.innerHTML += `Valor fora dos limites: ${menorValor} a ${maiorValor}`
        //`
        // <div>Você disse:</div>
        // <span class="box">${numero}</span>
        // Valor fora dos limites: ${menorValor} a ${maiorValor}
        // `
    } else {
        confereNumero(chute);
    }
}

function confereNumero(numero) {
    if (numero < numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto é maior <i class="fa-solid fa-angles-up"></i> </div>`

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O numero secreto é menor <i class="fa-solid fa-angles-down"></i> </div>`

    } else {
        document.body.innerHTML = `
        <div class='win'>Você Acertou</div>
        <p> o Número Secreto é ${numeroSecreto}</p>
        <button class="btn-jogar" id ="jogar-novamente">Jogar Novamente</button>
        `
    }
}

function chuteforInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    if (numero > maiorValor || numero < menorValor) {
        console.log(`Valor fora dos limites: ${menorValor} a ${maiorValor}`);
        return false;
    } else {
        return true;
    }
}

document.body.addEventListener('click', (event) =>{
    if(event.target.id == "jogar-novamente"){
        window.location.reload();
    }
})

function gameOver(chute){
    if(chute == "Game over."){
        document.body.innerHTML = `
        <div class='win'>GAME OVER</div>
        <button class="btn-jogar" id ="jogar-novamente">Jogar Novamente</button>
        `
    }
}