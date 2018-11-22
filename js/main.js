//add header
$(document).ready(function() {
  $(".header").height($(window).height());
});

//scroll function
$(".navbar a").click(function() {
  $("body,html").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top
    },
    1000
  );
});
