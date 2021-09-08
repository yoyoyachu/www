$(document).ready(function () {
    // typing animation
    (function ($) {
        $.fn.writeText = function (content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function () {
                if (current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 110);
        };
    })(jQuery);
    // input text for typing animation
    $("#city").writeText("Greater New York City Area");
    $("#job").writeText("Web Developer");
});



