$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPos = $(window).scrollTop();
    $(".menu a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".menu a").removeClass("active");
        currLink.addClass("active");
      }
    });
  });
});
