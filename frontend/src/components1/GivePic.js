import axios from 'axios'
import {useState} from 'react'

import Thunderstorm from '../publicpics/drizzle1.jpg'
import Drizzle from '../publicpics/drizzle1.jpg'
import Clouds from '../publicpics/clouds1.jpg'
import Snow from '../publicpics/snow1.jpg'
import Rain from '../publicpics/rain1.jpg'
import Clear from '../publicpics/clear1.jpg'
const parse = require('html-react-parser')


export default function GivePic(locationInput) {
    // let mainWeather;
    // const [mainWeather, setMainWeather] = useState("")
    let imageJSX;
    // let imageJSXString;
    // let numberCount = 0;
    // const [imageJSXState, setImageJSXState] = <h1>InitialState</h1>
    if (locationInput !== "") {
        axios.post('http://localhost:4000/users/getFriendsInfo/weather', locationInput)
        .then(res => {
            console.log(`Current weather of ${locationInput.location} is: ${res.data.mainWeather}`)
            // console.log("res:")
            // console.log(res.data.mainWeather)
        //   setMainWeather(res.data.mainWeather)
        //   mainWeather = res.data.mainWeather
            // numberCount = numberCount + 1
            const giveImageJSX = (mainWeather) => {
                switch (mainWeather) {
                    case "Thunderstorm":
                        return <img src={Thunderstorm} alt="alt text" width="500" height="600"></img>
                    case "Drizzle":
                        return <img src={Drizzle} alt="alt text" width="500" height="600"></img>
                    case "Snow":
                        return <img src={Snow} alt="alt text"idth="500" height="600"></img>
                    case "Rain":
                        return <img src={Rain} alt="alt text" width="500" height="600"></img>
                    case "Clear":
                        return <img src={Clear} alt="alt text" width="500" height="600"></img>
                    case "Clouds":
                        return <img src={Clouds} alt="alt text" width="500" height="600"></img>
                    default:
                        break;
                }
            }
            // setImageJSXState(giveImageJSX(res.data.mainWeather))
            // console.log("inside request, imageJSXState:")
            // console.log(imageJSXState)
            imageJSX = giveImageJSX(res.data.mainWeather)
            console.log("JSX inside axios request:")
            console.log(imageJSX)
            // imageJSXString = "<img src={Thunderstorm} alt=\"alt text\" width=\"500\" height=\"600\"></img>"
        })
        .catch(err => {
            console.log('something went wrong')
            console.log(err)
        })
    }
    console.log("JSX outside axios request:")
    console.log(imageJSX)
    // console.log("numberCount:")
    // console.log(numberCount)

    // console.log("outside request, imageJSXState:")
    // console.log(imageJSXState)
    // console.log(mainWeather)

    // let parsedimageJSXString = parse(imageJSXString)

    return(
    <div>
    <h3>Current Weather: Clear</h3>
    <img src={Clear} alt="blue sky with white clouds" width="500" height="600"></img>
    {/* {imageJSX} */}
    {/* {parsedimageJSXString} */}
    {/* {parse("<img src={Thunderstorm} alt=\"alt text\" width=\"500\" height=\"600\"></img>")} */}
    </div>
    )
}