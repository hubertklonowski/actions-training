const core = require('@actions/core')
const axios = require('axios')

async function getWeather() {
    const API_KEY = core.getInput("WEATHER_API_KEY");

    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=New York,us&appid=${API_KEY}`
    )

    const temperature = response.data.main.temp;

    core.setOutput('temperature', temperature)
}

try {
    getWeather()
} catch (error) {
    core.setFailed(error.message)
}