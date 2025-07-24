 $(document).ready(function () {
    function checkVisibility() {
        $(".section-title").each(function () {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 250) { // 250px 余裕を持たせる
                $(this).addClass("show");
            }
        });
    }

    $(window).on("scroll", checkVisibility);
    checkVisibility(); // 初回チェック
});