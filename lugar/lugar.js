const axios = require('axios')

const getLugarLatLng = async(dir) => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(dir)}`,
        //timeout: 1000,
        headers: { 'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com', 'x-rapidapi-key': '69fa9c425emshcd67d935619c98dp13943djsn045fe2a3103f' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0)
        throw new Error(`No hay resultados para la direccion ${dir}`)

    const result = response.data.Results[0]

    return {
        direccion: result.name,
        lat: result.lat,
        lon: result.lon
    }
}

module.exports = {
    getLugarLatLng
}