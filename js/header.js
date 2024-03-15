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
});
