console.log("We will soon find out!")

const URL_BASE = 'http://api.weatherapi.com/v1/current.json?key='
const keyA = '88f0546ba04443ef'
const keyB = 'b01194256241102'
let locationPlace = 'Hove'

const submitButton = document.querySelector('.submitButton')
submitButton.addEventListener('click', getWeather)

const searchInput = document.querySelector('.searchInput')

async function getWeather(e) {
    e.preventDefault()

    const locationSearch = document.querySelector('.locationSearch')
    const temperature = document.querySelector('.temperature')

    locationPlace = searchInput.value

    const URL = `${URL_BASE}${keyA}${keyB}&q=${locationPlace}`

    try {
        const response  = await fetch(URL, {mode: 'cors'});
        const weatherData = await response.json();
        console.log(weatherData)
        locationSearch.textContent = weatherData.location.name
        temperature.textContent = weatherData.current.temp_c + ' Celsuis'
    } catch (error) {
        console.log(error)
        locationSearch.textContent = 'Enter a valid city'
        temperature.textContent = ''
    }
   
}