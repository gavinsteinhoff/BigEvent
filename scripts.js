function amountscrolled() {
    if ($(window).width() > 992) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop <= 500) {
            $("#logo").attr("width", 150 - scrollTop / 10);
            $("#logo").attr("height", 200 - scrollTop / 7);
            $("#nav").css("background-color", "rgb(0,58,112," + scrollTop / 250 + ")")
            if (scrollTop > 200) {
                $("#nav").removeClass("navbar-light");
                $("#nav").addClass("navbar-dark");
                $("#nav").addClass("border-bottom border-white");
            }
        } else {
            $("#logo").attr("width", 100);
            $("#logo").attr("height", 130);
            $("#nav").css("background-color", "rgb(0,58,112,1)")
            $("#nav").removeClass("navbar-light");
            $("#nav").addClass("navbar-dark");
        }
        if (scrollTop == 0) {
            $("#nav").removeClass("navbar-dark");
            $("#nav").addClass("navbar-light");
            $("#nav").removeClass("border-bottom border-white");
        }
    }
}
$(window).on("scroll", function () {
    amountscrolled()
})

$(function () {
    amountscrolled();
    var viewportHeight = $(document).height();
    $("footer").css("padding-top", viewportHeight -  parseInt($("#mobile").css("height")));
});