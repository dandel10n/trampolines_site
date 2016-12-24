$(document).ready(function() {
    $(".mod-to-choose_button").click(function(event){
        event.preventDefault();
    });


    $(".mod-to-choose_button").click(function() {
        $(".mods-options").toggleClass("mods-options__active");
        $(".full-info").toggleClass("full-info__active");
    });
});