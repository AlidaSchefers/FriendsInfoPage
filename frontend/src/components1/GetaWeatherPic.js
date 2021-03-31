import axios from 'axios'
import {useState, useEffect} from 'react'

//import weather images
import Thunderstorm from '../publicpics/drizzle1.jpg'
import Drizzle from '../publicpics/drizzle1.jpg'
import Clouds from '../publicpics/clouds1.jpg'
import Snow from '../publicpics/snow1.jpg'
import Rain from '../publicpics/rain1.jpg'
import Clear from '../publicpics/clear1.jpg'

export default function GivePic(locationInput) {
    const [mainWeather, setMainWeather] = useState('')
    useEffect(() => {
        getMainWeather(locationInput)
    }, [locationInput])

    const getMainWeather = (locationInput) => { //gives me the current weather description (e.g. Rain") for the location (e.g. "Paris, France")
        axios.post('http://localhost:4000/users/getFriendsInfo/weather', locationInput)
        .then(res => {
            setMainWeather(res.data.mainWeather) //e.g. "Clear", "Rain"
        })
        .catch(error => console.error(`Error: ${error}`))
    }
    
    if(mainWeather === '') {
        return(
            <div>
            <h3>Current Weather: </h3>
            </div>
        )
    }else {
        return(
            <div>
            <h3>Current Weather: {mainWeather}</h3>
            <img src={giveImageVar(mainWeather)} alt="alt text" width="500" height="600"></img>
            {/* <img src={Clear} alt="alt text" width="500" height="600"></img> */}
            </div>
        )
    }
}

const giveImageVar = (mainWeather) => {
    switch (mainWeather) {
        case "Thunderstorm":
            return Thunderstorm
        case "Drizzle":
            return Drizzle
        case "Snow":
            return Snow
        case "Rain":
            return Rain
        case "Clear":
            return Clear
        case "Clouds":
            return Clouds
        default:
            break;
    }
}
