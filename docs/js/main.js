$(function () {
  $(".slider-box").slick({
    prevArrow:
      '<img class="slider-arrow slider-arrow-left" src="images/arrow-left.png" alt="arrow-left">',
    nextArrow:
      '<img class="slider-arrow slider-arrow-right" src="images/arrow-right.png" alt="arrow-right">',
  });

  $(".menu-btn").on("click", function () {
    $(".menu-list").toggleClass("active");
  });
});
