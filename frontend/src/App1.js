// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react'
// import Navigation from './components/Navigation'
import TokenContextProvider from './contexts/tokenContext'
// import FriendsInfoContextProvider from './contexts/friendsInfoContext'
import Clouds from './publicpics/clouds1.jpg'
import axios from 'axios'
import Welcome from './components1/Welcome1'
import getWeatherPicName from './config/decideWeatherPics'
import LocationInput from './components1/LocationInput1'

function App() {
  // res
  // axios.post('http://localhost:4000/users/getFriendsInfo/weather', {location: 'Paris, France'})
  // .then(res => {
  //   console.log("res:")
  //   console.log(res.data.mainWeather)
  // })
  // .catch(err => {
  //     console.log('something went wrong')
  //     console.log(err)
  // })

  // const displayWeatherPic = () => {
  //   //based on location, get the 
  // }
  return ( //wrap the display with context provider that will provide global state. now all components will have access
    // <TokenContextProvider>
    //   <FriendsInfoContextProvider>
    //     {/* <LogDecision /> */}
    //   </FriendsInfoContextProvider>
    // </TokenContextProvider>
    <div>
      <h1>GetaWeatherPic</h1>
      <LocationInput />
      {/* <img src={Clouds} alt="alt text" width="500" height="600"></img> */}
      {/* {returnWeatherPic()} */}
    </div>
  );
}
export default App;