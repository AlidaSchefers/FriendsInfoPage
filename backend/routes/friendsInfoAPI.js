const router = require('express').Router()
const axios = require('axios')
const express = require('express')

router.use(express.json())
//timezoneAPI (Amdoren: https://www.amdoren.com/time-zone-api/)
//NOTE: Please note that our Free Plan requires you to display the following message prominently with a backlink:
    //Powered by <a href="https://www.amdoren.com">Amdoren</a>

//get timezone
//gives daylight savings info too.
//gives offset in minutes ("offset" in response). e.g. for New York (-5hr) it's -300 min
const timeZoneEndpoint = 'https://www.amdoren.com/api/timezone.php'
const timeZoneAPIKey = process.env.TIMEZONE_APIKEY
router.post('/timezone', async (req, res, next) => {
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
//this weather API gives you a timzone! 
//gives offset in seconds ("timezone" in response body). e.g. for New York (-5hr) it's -18000 seconds
const weatherEndpoint = 'http://api.openweathermap.org/data/2.5/weather'
const weatherAPIKey = process.env.WEATHER_APIKEY
router.post('/weather', async (req, res, next) => {
    try {
        const endpoint = `${weatherEndpoint}?q=${req.body.location}&appid=${weatherAPIKey}`
        const {data} = await axios.get(endpoint)
        const usefulData = {
            weatherId: data.weather[0].id,
            mainWeather: data.weather[0].main,
            weatherDesc: data.weather[0].description,
            kelvinTemp: data.main.temp,
            secondsTimezoneOffset: data.timezone
        }
        res.json(usefulData)
        // res.send(data)
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
    next()
})
//use 

    //location format options in weather API:
        //cityname
        //cityname,statecode
        //cityname,statecode,countrycode


//get news from NewsAPI
//need the country in its code (e.g. Germany is de, France is fr)
const newsapiAPIEndpoint = 'https://newsapi.org/v2/top-headlines'
const newsapiAPIKey = process.env.NEWSAPI_APIKEY
router.post('/news', async (req, res, next) => {
    try {
        const endpoint = `${newsapiAPIEndpoint}?category=general&country=${req.body.country}&apiKey=${newsapiAPIKey}`
        //specifying a language like English in a foreign country either gets no results or an error
        const {data} = await axios.get(endpoint)
        // res.send(data)
        res.send(data.articles[0])
        // console.log(articles[0])
    } catch (error) {
        res.status(500).json({message: error.message || error})
        console.log('error!')
    }
    next()
})

module.exports = router