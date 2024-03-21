$(document).ready(function () {
  const menuBar = $(".menu-bar");
  const menuItems = $(".menu li");
  const menuBardiv = $(".menu-bar div");
  let menuOpen = false;
  menuItems.css({
    display: "none",
  });
  menuBar.click(function () {
    if (menuOpen) {
      menuItems.fadeOut(200);
    } else {
      menuItems.fadeIn(200);
    }
    menuOpen = !menuOpen;
  });
  $(".menu-bar").on("click", function () {
    $(this).toggleClass("open");
  });
  // 네비게이션 메뉴
  $(document).ready(function () {
    $("#homebtn").click(function () {
      $("html, body").scrollTop(
        $("#home").offset().top -
          ($(window).height() - $("#home").outerHeight()) / 2
      );
      return false;
    });

    $("#aboutbtn").click(function () {
      $("html, body").scrollTop(
        $("#aboutme").offset().top -
          ($(window).height() - $("#aboutme").outerHeight()) / 2
      );
      return false;
    });

    $("#infobtn").click(function () {
      $("html, body").scrollTop(
        $("#info").offset().top -
          ($(window).height() - $("#info").outerHeight()) / 2
      );
      return false;
    });

    $("#workbtn").click(function () {
      $("html, body").scrollTop(
        $("#work").offset().top -
          ($(window).height() - $("#work").outerHeight()) / 2
      );
      return false;
    });

    $("#callbtn").click(function () {
      $("html, body").scrollTop(
        $("#call").offset().top -
          ($(window).height() - $("#call").outerHeight()) / 2
      );
      return false;
    });
  });
});
