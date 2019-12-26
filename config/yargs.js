const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).argv

module.exports = {
    argv
}