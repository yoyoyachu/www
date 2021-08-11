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


    $(".tag-skills").on("mouseover", function(){
        $(this).css({"font-size" :  "120%", "font-weight" : "bolder", "transition" : "all 400ms"});
        // $(this).addClass('animate__animated animate__fadeIn');
    });
    $(".tag-skills").on("mouseout", function(){
        $(this).css({"font-size" :  "100%", "font-weight" : "regular", "transition" : "0ms"});
        // $(this).removeClass('animate__animated animate__fadeIn');
        
    });
    
});



