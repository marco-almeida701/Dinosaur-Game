let personagem = document.querySelector('#perso')
let inimigo = document.querySelector('#atalho')

function pular(){
    if(perso.classList != 'animar'){
        perso.classList.add('animar')
    }
    setTimeout(function(){
        perso.classList.remove('animar')

    }, 500)
}

var testarColisao = setInterval( function(){

    var topoPerso = parseInt (
     window.getComputedStyle(perso).getPropertyValue('top')
    )
    var EsquerdaAtalho = parseInt (
        window.getComputedStyle(atalho).getPropertyValue('left')
    )

    if (EsquerdaAtalho < 20 && EsquerdaAtalho > 0 && topoPerso >= 130){
        atalho.style.animation = 'none'
        atalho.style.display = 'none'
        alert(' Você perdeu! ;-; ')
    }


}, 10)