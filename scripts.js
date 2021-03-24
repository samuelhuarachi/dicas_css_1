/**
 * código do chat Inicio
 */

$('#btnMinimizeChat').click(function () {
    $("#btnMinimizeChat").hide();
    $("#btnMaximizeChat").show();

    $('#primary_chat').removeClass("showChat")
    $('#primary_chat').addClass("hiddenChat")
})

$('#btnMaximizeChat').click(function () {

    $("#btnMinimizeChat").show();
    $("#btnMaximizeChat").hide();

    $('#primary_chat').addClass("showChat")
    $('#primary_chat').removeClass("hiddenChat")
})

/**
 * código do chat Fim
 */


/**
 * código do transformer Inicio
 */
$( document ).ready(function() {
    $("#ads_transformers").delay(1000).fadeIn(1000);
});

$("#close_img_transformers").click(function() {
    $('#ads_transformers').addClass("hiddenTransformer")
})

/**
 * código do transformer Fim
 */
