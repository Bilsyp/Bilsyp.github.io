$(document).ready(function() {
  $(".Bars").click(function() {
    $("ul").animate({ left: "0" }, 2000).css("display", "block");
    $(".Bars").css("display", "none");
    $(".Times").css("display", "block")
  })
  $(".Times").click(function() {
    $("ul").animate({ left: "-100%" }, 2000).css("display", "block");
    $(".Times").css("display", "none");
    $(".Bars").css("display", "block")
  })
})