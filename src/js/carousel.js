// Scope Global
var count = 0;
const SPEED = 6000;

function gallery() {
  // Lista de Slides.
  const slides = document.querySelectorAll('.slider__slide');
  // Lista de Puntos
  const dots = document.querySelectorAll('.control__dot');

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

setInterval(gallery, SPEED);
