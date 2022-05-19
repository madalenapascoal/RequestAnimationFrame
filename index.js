var jog;
var vel;
var dx;
var dy;
var px; //px=dx*vel
var py; //py=dy*vel
var anima;
var estado;

function inicio() {
    vel = 2;
    px = 0; //posição
    py = 0; //posição
    dx = 1; //direção
    dy = 0; //direção
    estado = 1; // 1 movendo / 0 parando
    jog = document.getElementById("jogador");
    jog.addEventListener("click", moverParar);
    document.getElementById("bt1").addEventListener("click", mover);
    document.getElementById("bt2").addEventListener("click", parar);
    game();
}

function moverParar() {
    if (estado) {
        estado = 0;
        jog.style.backgroundColor = "#ebe";
        cancelAnimationFrame(anima);
    } else {
        estado = 1;
        jog.style.backgroundColor = "#adc";
        anima = requestAnimationFrame(game);
    }
}

function mover() {
    if (!estado) { //se apagar vai andar igual com incremento
        estado = 1;
        jog.style.backgroundColor = "#ebe";
        anima = requestAnimationFrame(game);
    } //se apagar vai andar igual com incremento
}

function parar() {
    estado = 0;
    jog.style.backgroundColor = "#adc";
    cancelAnimationFrame(anima);
}




function game() {
    px += (dx * vel); //igual a px=px+(dx*vel)
    //py+=dy*vel;
    jog.style.left = px + "px";
    //jog.style.top=py+"px";
    if (px > 800) {
        dx = -1;
    } else if (px < 0) {
        dx = 1;
    }
    anima = requestAnimationFrame(game);
}



window.addEventListener("load", inicio);