$(document).ready(function(){
$("body").click(function(e){
    $(".popuptext").fadeOut();
});


// Prevent events from getting pass .popup
$("div.popup").click(function(e){
    $(".popuptext").fadeOut();
    $(this.parentElement).find(".popuptext").fadeIn();
    e.stopPropagation();
});
});

