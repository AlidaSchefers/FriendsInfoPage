const router = require('express').Router()
const axios = require('axios')



//timezoneAPI (Amdoren: https://www.amdoren.com/time-zone-api/)
//NOTE: Please note that our Free Plan requires you to display the following message prominently with a backlink:
//Powered by <a href="https://www.amdoren.com">Amdoren</a>

const timeZoneEndpoint = 'https://www.amdoren.com/api/timezone.php'
const timeZoneAPIKey = process.env.AMDOREN_APIKEY

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body)
        //assume location is in correct format already. e.g. 'New York'
        const endpoint = `${timeZoneEndpoint}?api-key=${timeZoneAPIKey}&loc=${process.env.AMDOREN_APIKEY}`
        const timeZoneRes = await axios.get(endpoint)
        res.json(timeZoneRes)
    } catch (error) {
        res.status(500).json({message: error.message || error})
    }
    next()
})

module.exports = router