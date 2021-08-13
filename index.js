$("#carouselRenders").bind("mousewheel", function (e) {
  if (e.originalEvent.wheelDelta / 120 > 0) {
    $(this).carousel("prev");
  } else {
    $(this).carousel("next");
  }
});

// $(window).ready(function () {
//   $("#mostrar").click(function () {
//     $("#oculto").removeClass("oculto");
//   });
// });

// $(document).ready(function () {
//   $("#mostrar").click(function () {
//     $(".oculto").fadeIn(4000);
//   });
//   $(".flecha-mostrar").click(function () {
//     $(".contenedor-boton-mostrar-on").fadeOut(1000);
//   });
// });
