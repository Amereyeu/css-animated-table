$("button").on("click", function () {
  $(this).toggleClass("open");
  $("table").removeClass("closed").toggleClass("open");
});
