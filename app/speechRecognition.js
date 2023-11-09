const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const br = "pt-BR"
const us = "en-US"

recognition.lang = us;
const langAtual = recognition.lang;

document.body.onclick = () => {
    recognition.start();
    elementoChute.innerHTML = `
    <div class = "escutando">:Escutando:</div>
 `
    console.log("Ready to receive a number command.");
};

recognition.addEventListener('result', onSpeak);

const oqueFoiDito = document.querySelector('.box');
function onSpeak(event) {
    chute = event.results[0][0].transcript;
    //console.log(chute);
    exibeChuteNaTela(chute);
    verificaSeOChuteEValido(chute);
}

const elementoChute = document.querySelector('#chute');
function exibeChuteNaTela(chute) {
    chuteString = chute.toString();
    const trataNumero = chute.replace(".", "");
    const numero = parseInt(trataNumero);

    if (isNaN(numero)) {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box"> Diga apenas números na lingua ${langAtual} </span>
     `
    } else{
        elementoChute.innerHTML = `
            <div>Você disse:</div>
            <span class="box">${numero}</span>
         `
    }
}


recognition.onerror = (event) => {
    elementoChute.innerHTML = "";
};


