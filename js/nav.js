//nav-click 
    $(document).ready(function() {
    
    $("#nav-abt").click(function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-ser").click(function() {
        $("html, body").animate({
            scrollTop: $("#ser").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-mem").click(function() {
        $("html, body").animate({
            scrollTop: $("#mem").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-gal").click(function() {
        $("html, body").animate({
            scrollTop: $("#gal").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-cont").click(function() {
        $("html, body").animate({
            scrollTop: $("#con").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-staff").click(function() {
        $("html, body").animate({
            scrollTop: $("#staff").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-news").click(function() {
        $("html, body").animate({
            scrollTop: $("#news").offset().top - 100
        }, 1000);
        return false;
    });
    $("#nav-link").click(function() {
        $("html, body").animate({
            scrollTop: $("#link").offset().top - 100
        }, 1000);
        return false;
    });
});