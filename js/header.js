$(document).ready(function() {
    $(".icon-link").click(function(event) {
      event.preventDefault();
      var targetId = $(this).data("target");
      $("#" + targetId).toggle();
    });
  });