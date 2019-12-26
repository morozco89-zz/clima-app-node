const axios = require('axios')

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c5af25af2b73e67067455e6bbbfc3206`)
    return resp.data.main.temp
}

module.exports = {
    getClima
}