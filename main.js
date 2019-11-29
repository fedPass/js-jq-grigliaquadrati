$(document).ready(function(){
    // genero 15 numeri che corrispondono all'indice dei quadrati che prenderanno la classe bomba
    var indiciBombe = [];
    do {
        var numero = generaRandom(0,63);
        if (!indiciBombe.includes(numero)) {
            indiciBombe.push(numero);
        }
    } while (indiciBombe.length < 15);
    console.log('Gli indici delle bombe sono: ' + indiciBombe);

    //prendo il quadrato con l'indice[indiciBombe] e gli aggiungo la classe bomba (assegnazione classe)
    for (var i = 0; i < indiciBombe.length; i++) {
        $('.quadrato').eq(indiciBombe[i]).addClass('bomba');
    }

    //se clicco su bomba aggiungi classe active
    $('.quadrato').click(function(){
        $(this).addClass('active');
    });


    function generaRandom(min, max) {
        var random = Math.floor(Math.random() * (max - min + 1) ) + min;
        return random;
    }

})
