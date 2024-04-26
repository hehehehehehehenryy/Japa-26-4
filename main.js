const botoes = document.querySelectorAll(".botao");
const secundario = document.querySelectorAll(".conteudo");

for(let i = 0; i<botoes.length; i++) {
    botoes[i].onclick = function() {
        for(let j=0; j<botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            secundario[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        secundario[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObj1 = new Date("2024-12-31T00:00:00");
const tempoObj2 = new Date("2024-12-20T00:00:00");
const tempoObj3 = new Date("2025-01-02T00:00:00");
const tempoObj4 = new Date("2026-12-25T00:00:00");

const tempos = [tempoObj1, tempoObj2, tempoObj3, tempoObj4];

function calcularTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    let segundos = Math.floor(tempoFinal / 1000); // encontrar segundos
    let minutos = Math.floor(segundos / 60); // converter para minutos
    let horas = Math.floor(minutos / 60); // converter para horas
    let dias = Math.floor(horas / 24); // converter para dias

    segundos %= 60; //acumula o 'resto' dos segundos
    minutos %= 60;  //acumula o 'resto' dos minutos
    horas %= 24;    //acumula o 'resto' das horas

    if(tempoFinal > 0) {
        return [dias, horas, minutos, segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizarCronometro() {
    for(let i = 0; i<contadores.length; i++) {
        document.getElementById("dias"+i).textContent = calcularTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calcularTempo(tempos[i])[1];
        document.getElementById("minutos"+i).textContent = calcularTempo(tempos[i])[2];
        document.getElementById("segundos"+i).textContent = calcularTempo(tempos[i])[3];
    }
}

function comecaCronometro() {
    atualizarCronometro();
    setInterval(atualizarCronometro, 1000);
}

comecaCronometro();
