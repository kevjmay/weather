console.log("We will soon find out!")

const URL_BASE = 'http://api.weatherapi.com/v1/current.json?key='
const keyA = '88f0546ba04443ef'
const keyB = 'b01194256241102'
const locationPlace = 'Brighton'

const URL = `${URL_BASE}${keyA}${keyB}&q=${locationPlace}`

async function getWeather() {
    const response  = await fetch(URL, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData)
    console.log(weatherData.current.temp_c)
}

getWeather()