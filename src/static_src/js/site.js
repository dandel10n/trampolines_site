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

    $('#mods-carousel').on('slide.bs.carousel', function (e) {
        var targetElement = $(e.relatedTarget);
        var allMobileOptions = $('.choose-diameter_options .size-options_mobile_block');
        var targetMobileOption = $(allMobileOptions.get(targetElement.index()));

        allMobileOptions.removeClass('active');
        targetMobileOption.addClass('active');
    });

    $("#header_button").click(function() {
        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top
        }, 1000);
    });
});