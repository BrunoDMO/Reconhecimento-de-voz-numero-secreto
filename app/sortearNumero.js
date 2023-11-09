function gerarNumeroAleatorio(){
    let numero = parseInt(Math.random() * maiorValor+1);
    console.log(`o número secreto é ${numero}`);
    return numero;
}

const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();


const elementoMenorValor = document.querySelector('#menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#maior-valor');
elementoMaiorValor.innerHTML = maiorValor;