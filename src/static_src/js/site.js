$(document).ready(function() {
    $(".mod-to-choose_button").click(function(event){
        event.preventDefault();
    });


    $(".mod-to-choose_button").click(function() {
        $(".mods-options").toggleClass("mods-options__active");
        $(".full-info").toggleClass("full-info__active");
    });

    $(".choose-diameter").click(function() {
        $(".choose-diameter_options").toggleClass("choose-diameter_options__active");
    });

    $(".choose-diameter_options").click(function() {
        $(".choose-diameter_options").removeClass("choose-diameter_options__active");
    });
});