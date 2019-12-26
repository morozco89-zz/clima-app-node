const argv = require('./config/yargs').argv
const { getLugarLatLng } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

const getInfo = async (lugar) => {
    try {
        const {lat, lon, direccion} = await getLugarLatLng(lugar)
        console.log("latitud: ", lat, "longitud: ", lon);
        const temperatura = await getClima(lat, lon)
        return `El clima de ${direccion} es de ${temperatura}`
    } catch (er) {
        console.log(er)
        throw new Error(`No se pudo determinar el clima de ${lugar}`)
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)