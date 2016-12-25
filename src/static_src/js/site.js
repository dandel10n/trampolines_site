$(document).ready(function() {

    $(".mod-to-choose").click(function(event) {
        event.preventDefault();

        var currentElement = $(this);
        var modOptionsContainer = currentElement.parent(".mods-options");
        var allOptionLinks = modOptionsContainer.find(".mod-to-choose");
        var fullInfoContainer = $(".full-info");
        var allModCarousels = $(".mods-carousel");


        if (modOptionsContainer.hasClass("mods-options__active")) {
            allModCarousels.removeClass("mods-carousel_active");
            $(currentElement.data("target")).addClass("mods-carousel_active");

            allOptionLinks.removeClass("mod-to-choose__active");
            currentElement.addClass("mod-to-choose__active");
        }

        modOptionsContainer.toggleClass("mods-options__active");
        fullInfoContainer.toggleClass("full-info__active");

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
    });

    $("#header_button").click(function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top
        }, 1000);
    });
});