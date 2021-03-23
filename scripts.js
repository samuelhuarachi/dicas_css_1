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

console.log("load javascript")