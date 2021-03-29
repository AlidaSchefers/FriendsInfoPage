import axios from 'axios'
import {useState, useEffect} from 'react'

import Thunderstorm from '../publicpics/drizzle1.jpg'
import Drizzle from '../publicpics/drizzle1.jpg'
import Clouds from '../publicpics/clouds1.jpg'
import Snow from '../publicpics/snow1.jpg'
import Rain from '../publicpics/rain1.jpg'
import Clear from '../publicpics/clear1.jpg'
const parse = require('html-react-parser')


// function GivePic(locationInput) {
//     // let mainWeather;
//     // let count = 0;
//     const [mainWeather, setMainWeather] = useState("")
//     try {
//         const getMainWeather = async (locationInput) => { //gives me the current weather description for the location (e.g. "Paris, France")
//         let getCurrentWeather = await axios.post('http://localhost:4000/users/getFriendsInfo/weather', locationInput)
//         .then(res => {
//             // return res.data.mainWeather
//             // console.log("Main weather (inside then):")
//             // console.log(res.data.mainWeather) //e.g. "Clear", "Rain"
//             // return Promise.resolve(res.data.mainWeather)
//             setMainWeather(res.data.mainWeather)
//             })
//             // count++
//             // console.log(`count: ${count}`)
//             return getCurrentWeather
//         }
//         if (locationInput !== "") {
//             console.log("Main weather (outside then):")
//             console.log(getMainWeather(locationInput)) //returns a PROMISE. need to be awaited or .then. not waiting to finish
//             console.log("state:")
//             console.log(mainWeather)
//         }
//     } catch (error) {
//         console.log(error)
//     }

//     //I want to eventually display the weather as text on the page and display the corresponding image (e.g. rain1.jpg).

//     return(
//     <div>
//     <h3>Current Weather: TBD</h3>
//     <img src={Clear} alt="alt text" width="500" height="600"></img>
//     </div>
//     )
// }
// export default GivePic;


export default function GivePic(locationInput) {
    const [mainWeather, setMainWeather] = useState('')
    useEffect(() => {
        getMainWeather(locationInput)
    }, [locationInput])
    const getMainWeather = (locationInput) => { //gives me the current weather description for the location (e.g. "Paris, France")
        axios.post('http://localhost:4000/users/getFriendsInfo/weather', locationInput)
        .then(res => {
            // return res.data.mainWeather
            // console.log("Main weather (inside then):")
            // console.log(res.data.mainWeather) //e.g. "Clear", "Rain"
            // return Promise.resolve(res.data.mainWeather)
            const mainWeatherRes = res.data.mainWeather;
            setMainWeather(mainWeatherRes)
            // setMainWeather(res.data.mainWeather)
        })
        .catch(error => console.error(`Error: ${error}`))
    }
    if (locationInput !== "") {
        console.log("Main weather (outside then):")
        console.log(getMainWeather(locationInput)) //returns a PROMISE. need to be awaited or .then. not waiting to finish
        console.log("state:")
        console.log(mainWeather)
    }

    //I want to eventually display the weather as text on the page and display the corresponding image (e.g. rain1.jpg).

    return(
    <div>
    <h3>Current Weather: {mainWeather}</h3>
    <img src={giveImageVar(mainWeather)} alt="alt text" width="500" height="600"></img>
    {/* <img src={Clear} alt="alt text" width="500" height="600"></img> */}
    </div>
    )
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

// const giveImageJSX = (mainWeather) => {
//     switch (mainWeather) {
//         case "Thunderstorm":
//             return <img src={Thunderstorm} alt="alt text" width="500" height="600"></img>
//         case "Drizzle":
//             return <img src={Drizzle} alt="alt text" width="500" height="600"></img>
//         case "Snow":
//             return <img src={Snow} alt="alt text"idth="500" height="600"></img>
//         case "Rain":
//             return <img src={Rain} alt="alt text" width="500" height="600"></img>
//         case "Clear":
//             return <img src={Clear} alt="alt text" width="500" height="600"></img>
//         case "Clouds":
//             return <img src={Clouds} alt="alt text" width="500" height="600"></img>
//         default:
//             break;
//     }
// }




//-------------------------------------

    // if (locationInput !== "") {
    //     axios.post('http://localhost:4000/users/getFriendsInfo/weather', locationInput)
    //     .then(res => {
    //         console.log(`Current weather of ${locationInput.location} is: ${res.data.mainWeather}`)
    //         // console.log("res:")
    //         // console.log(res.data.mainWeather)
    //     //   setMainWeather(res.data.mainWeather)
    //     //   mainWeather = res.data.mainWeather
    //         // numberCount = numberCount + 1
    //         const giveImageJSX = (mainWeather) => {
    //             switch (mainWeather) {
    //                 case "Thunderstorm":
    //                     return <img src={Thunderstorm} alt="alt text" width="500" height="600"></img>
    //                 case "Drizzle":
    //                     return <img src={Drizzle} alt="alt text" width="500" height="600"></img>
    //                 case "Snow":
    //                     return <img src={Snow} alt="alt text"idth="500" height="600"></img>
    //                 case "Rain":
    //                     return <img src={Rain} alt="alt text" width="500" height="600"></img>
    //                 case "Clear":
    //                     return <img src={Clear} alt="alt text" width="500" height="600"></img>
    //                 case "Clouds":
    //                     return <img src={Clouds} alt="alt text" width="500" height="600"></img>
    //                 default:
    //                     break;
    //             }
    //         }
    //         // setImageJSXState(giveImageJSX(res.data.mainWeather))
    //         // console.log("inside request, imageJSXState:")
    //         // console.log(imageJSXState)
    //         imageJSX = giveImageJSX(res.data.mainWeather)
    //         console.log("JSX inside axios request:")
    //         console.log(imageJSX)
    //         // imageJSXString = "<img src={Thunderstorm} alt=\"alt text\" width=\"500\" height=\"600\"></img>"
    //     })
    //     .catch(err => {
    //         console.log('something went wrong')
    //         console.log(err)
    //     })
    // }
    // console.log("JSX outside axios request:")
    // console.log(imageJSX)
    // // console.log("numberCount:")
    // // console.log(numberCount)

    // // console.log("outside request, imageJSXState:")
    // // console.log(imageJSXState)
    // // console.log(mainWeather)

    // // let parsedimageJSXString = parse(imageJSXString)