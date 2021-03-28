import {useState} from 'react'
import axios from 'axios'
import Form from '../components/Form'
import GivePic from './GivePic'
import GivePic2 from './GivePic2'

const inputs = [
    {name: 'location', type: 'text', placeholder: 'Enter Location'},
]
const submitMsg = "Display Weather Pic"

export default function LocationInput() {
    const [location, setLocation] = useState("")
    // if(location !== "") {
    //     console.log("GivePic mainWeather:")
    //     console.log(GivePic(location))
    //     console.log("--------")
    // }
    const submitFunc = (formData, resetForm) => {
        setLocation(formData)
        // console.log("formData:")
        // console.log(formData.location)
        // localStorage.setItem('location2', formData.toString())
    }
    return(
        <div id="locationInput">
            <Form inputs={inputs} submitMsg={submitMsg} submitFunc={submitFunc} />
            {/* {GivePic(location)} */}
            {GivePic2(location)}
        </div>
    )
}