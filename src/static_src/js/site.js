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

    $('#mods-carousel-mod1, #mods-carousel-mod2').on('slide.bs.carousel', function (e) {
        var carousel = $(this);
        var targetElement = $(e.relatedTarget);
        var allMobileOptions = carousel.find('.choose-diameter_options .size-options_mobile_block');
        var targetMobileOption = $(allMobileOptions.get(targetElement.index()));

        allMobileOptions.removeClass('active');
        targetMobileOption.addClass('active');
    })

    $("#header_button").click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top
        }, 1000);
    });
});