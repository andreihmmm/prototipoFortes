window.onload = function () {
    const hamburguer = document.querySelector('.hamburguer')
    const navMenu = document.querySelector('.nav-menu')
    const fundo = document.querySelector('#fundo')

    hamburguer.addEventListener('click', () => {
        hamburguer.classList.toggle('active');
        navMenu.classList.toggle('active');
        fundo.classList.toggle('active');
    })

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    }))
}

function grupos() {
    var grupos = document.querySelector('#grupos.a-esquerda')
    var elementosAtivos = document.querySelectorAll('.a-esquerda.active');
    var principaisAtivos = document.querySelectorAll('.principais.active');
    var gruposdiv = document.querySelector('#gruposdiv')

    for (var i = 0; i < principaisAtivos.length; i++) {
        principaisAtivos[i].classList.remove('active');
    }
    for (var i = 0; i < elementosAtivos.length; i++) {
        elementosAtivos[i].classList.remove('active');
    }

    gruposdiv.classList.add('active')
    grupos.classList.add('active')
}

function eventos() {
    var eventos = document.querySelector('#eventos.a-esquerda')
    var elementosAtivos = document.querySelectorAll('.a-esquerda.active');
    var principaisAtivos = document.querySelectorAll('.principais.active')
    var eventosdiv = document.querySelector('#eventosdiv')

    for (var i = 0; i < principaisAtivos.length; i++) {
        principaisAtivos[i].classList.remove('active');
    }

    for (var i = 0; i < elementosAtivos.length; i++) {
        elementosAtivos[i].classList.remove('active');
    }

    eventosdiv.classList.add('active')
    eventos.classList.add('active')
}
function notificacoes() {
    var notificacoes = document.querySelector('#notificacoes.a-esquerda')
    var elementosAtivos = document.querySelectorAll('.a-esquerda.active');
    var principaisAtivos = document.querySelectorAll('.principais.active')

    for (var i = 0; i < principaisAtivos.length; i++) {
        principaisAtivos[i].classList.remove('active');
    }

    for (var i = 0; i < elementosAtivos.length; i++) {
        elementosAtivos[i].classList.remove('active');
    }

    notificacoes.classList.add('active')
}
function buscarPorTalentos() {
    var buscarPorTalentos = document.querySelector('#buscarPorTalentos.a-esquerda')
    var elementosAtivos = document.querySelectorAll('.a-esquerda.active');
    var buscarTalentos = document.querySelector("#buscarTalentos")
    var principaisAtivos = document.querySelectorAll('.principais.active')

    for (var i = 0; i < principaisAtivos.length; i++) {
        principaisAtivos[i].classList.remove('active');
    }

    for (var i = 0; i < elementosAtivos.length; i++) {
        elementosAtivos[i].classList.remove('active');
    }

    buscarPorTalentos.classList.add('active')
    buscarTalentos.classList.add('active')
}