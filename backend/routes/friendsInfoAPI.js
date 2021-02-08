const router = require('express').Router()
const axios = require('axios')
const express = require('express')

router.use(express.json())
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
        // console.log(req.body.location) //this successfully logs the location (London)
        const endpoint = `${weatherEndpoint}?q=${req.body.location}&appid=${weatherAPIKey}`
        // const endpoint = `${weatherEndpoint}?appid=${weatherAPIKey}&q=${req.body.location}`
        // console.log(endpoint) //works fine
        // const {weather, main} = await axios.get(endpoint)
        // const {data} = await axios.get(endpoint)
        const {data} = await axios.get(endpoint)
        res.send(data)
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
    next()
})
    //location format options in weather API:
        //cityname
        //cityname,statecode
        //cityname,statecode,countrycode

//get news from NewsCatcher.
const newsCatcherEndpoint = 'https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=news&lang=en&country=DE&media=True'
const newsCatcherAPIKey = ''


// const options = { //this automatically gets it when run npm start
//   method: 'GET',
//   url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
//   params: {topic: 'news', lang: 'en', country: 'DE', media: 'True'},
//   headers: {
//     'x-rapidapi-key': process.env.NEWSCATCHER_APIKEY,
//     'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data.articles[0]);
// }).catch(function (error) {
// 	console.error(error);
// });


//get news from NewsAPI
//https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY
const newsAPIEndpoint = 'https://newsapi.org/v2/everything'
const newsapiAPIKey = process.env.NEWSAPI_APIKEY
//language: en
//sortBy: popularity
//country: de

router.post('/news', async (req, res, next) => {
    try {
        // const endpoint = `${newsAPIEndpoint}?apiKey=${newsapiAPIKey}&language=en&sortBy=popularity&country=de`
        // const endpoint = `${newsAPIEndpoint}?apiKey=${newsapiAPIKey}&language=${req.body.language}&sortBy=${req.body.sortBy}&country=${req.body.country}`
        const endpoint = 'https://newsapi.org/v2/everything?q=apple&from=2021-02-05&to=2021-02-05&sortBy=popularity&apiKey=40db0250766d43f6990161891ce60161'
        // const {articles} = await axios.get(endpoint)
        const {data} = await axios.get(endpoint)
        res.send(data)
        // console.log(articles[0])
    } catch (error) {
        res.status(500).json({message: error.message || error})
        console.log('error!')
    }
    next()
})

module.exports = router