const router = require('express').Router()
const axios = require('axios')

//timezoneAPI (Amdoren: https://www.amdoren.com/time-zone-api/)
//NOTE: Please note that our Free Plan requires you to display the following message prominently with a backlink:
    //Powered by <a href="https://www.amdoren.com">Amdoren</a>

//get timezone
const timeZoneEndpoint = 'https://www.amdoren.com/api/timezone.php'
const timeZoneAPIKey = process.env.TIMEZONE_APIKEY
router.post('/', async (req, res, next) => {
    try {
        console.log(req.body)
        //assume location is in correct format already. e.g. 'New York'
        const endpoint = `${timeZoneEndpoint}?api_key=${timeZoneAPIKey}&loc=${req.body.location}`
        const {data} = await axios.get(endpoint)
        console.log(data)
        res.send(data) //object of properties including: timezone, offset, daylight_savings
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
    next()
})
    //location in timezone API:
        // Location can be specified as:
        // - City eg "New York"
        // - Country, City eg "USA, New York"
        // - Country, State, City eg "USA, New York, Bronx"

//get weather
const weatherEndpoint = 'http://api.openweathermap.org/data/2.5/weather'
const weatherAPIKey = process.env.WEATHER_APIKEY
router.post('/weather', async (req, res, next) => {
    try {
        console.log(req.body.location) //this successfully logs the location (New York)
        const endpoint = `${weatherEndpoint}?q=${req.body.location}&appid=${weatherAPIKey}`
        // const endpoint = `${weatherEndpoint}?appid=${weatherAPIKey}&q=${req.body.location}`
        console.log(endpoint)
        // const {weather, main} = await axios.get(endpoint)
        const weatherAPIRes = await axios.get(endpoint)
        res.send(weatherAPIRes)
        console.log(weatherAPIRes)
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
})
    //location format options in weather API:
        //cityname
        //cityname,statecode
        //cityname,statecode,countrycode

//get news
const newsEndpoint = ''
const newsAPIKey = ''


module.exports = router