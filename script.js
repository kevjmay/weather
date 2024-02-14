console.log("We will soon find out!")

const URL_BASE = 'http://api.weatherapi.com/v1/current.json?key='
const keyA = '88f0546ba04443ef'
const keyB = 'b01194256241102'
let locationPlace = 'Hove'

const URL = `${URL_BASE}${keyA}${keyB}&q=${locationPlace}`

async function getWeather() {

    const locationSearch = document.querySelector('.locationSearch')
    const temperature = document.querySelector('.temperature')

    try {
        const response  = await fetch(URL, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData)
        locationSearch.textContent = weatherData.location.name
        temperature.textContent = weatherData.current.temp_c
    } catch (error) {
        console.log(error)
    }
   
}

getWeather()