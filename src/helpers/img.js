// Uso en plantillas: <img src="{{img "logo.png"}}" />
// Resuelve la imagen desde public/assets/img para que webpack la procese
// (le pone hash y la copia a dist/img).
const images = require.context("../../public/assets/img", false);

module.exports = (name) => images(`./${name}`);
