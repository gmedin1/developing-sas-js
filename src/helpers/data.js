// Uso en plantillas: {{> services (data "services")}}
// Devuelve el objeto de datos de src/components/<nombre>/<nombre>.json.
// Al cargarse con require.context, webpack vigila los JSON y recarga en dev.
const components = require.context("../components", true, /\.json$/);

module.exports = (name) => components(`./${name}/${name}.json`);
