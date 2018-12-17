$(document).ready(function() {
    new WOW().init();
    var AnchoNavegador = $(window).width();
    var AltoNavegador = $(window).height();
    if (AnchoNavegador >= 768) {
        $("#menu-principal").removeClass("collapse");
    }
    console.log("Tamaño de la pantalla del navegador: width=" + AnchoNavegador + " height=" + AltoNavegador);
});