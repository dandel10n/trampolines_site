$(document).ready(function(){$(".mod-to-choose").click(function(o){o.preventDefault();var e=$(this),s=e.parent(".mods-options"),t=s.find(".mod-to-choose"),a=$(".full-info"),i=$(".mods-carousel");s.hasClass("mods-options__active")&&(i.removeClass("mods-carousel_active"),$(e.data("target")).addClass("mods-carousel_active"),t.removeClass("mod-to-choose__active"),e.addClass("mod-to-choose__active")),s.toggleClass("mods-options__active"),a.toggleClass("full-info__active")}),$(".choose-diameter").click(function(){$(".choose-diameter_options").toggleClass("choose-diameter_options__active")}),$(".choose-diameter_options").click(function(){$(".choose-diameter_options").removeClass("choose-diameter_options__active")}),$("#mods-carousel-mod1, #mods-carousel-mod2").on("slide.bs.carousel",function(o){var e=$(this),s=$(o.relatedTarget),t=e.find(".choose-diameter_options .size-options_mobile_block"),a=$(t.get(s.index()));t.removeClass("active"),a.addClass("active")}),$("#header_button").click(function(o){o.preventDefault(),$("html, body").animate({scrollTop:$("#scrollTo").offset().top},1e3)})});