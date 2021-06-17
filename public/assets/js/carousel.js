// Scope Global
var $ = window.document;
var count = 0;

function gallery() {
  // Lista de Slides.
  const slides = $.querySelectorAll('.slider__slide');
  // Lista de Puntos
  const dots = $.querySelectorAll('.slider__dot');

  // Esconder la Slide Actual y Quitar el Relleno del Punto.
  slides[count].classList.remove('show');
  dots[count].classList.remove('fill');

  // Siguiente Slide.
  if (count >= slides.length - 1) {
    count = 0;
  } else {
    count++;
  }

  // Mostrar la Slide Siguiente.
  slides[count].classList.add('show');
  dots[count].classList.add('fill');
}

setInterval(gallery, 5000);
