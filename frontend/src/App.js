// import logo from './logo.svg';
// import './App.css';
import React, {useState} from 'react'
// import Navigation from './components/Navigation'
import LogDecision from './components/LogDecision'
import TokenContextProvider from './contexts/tokenContext'
// import FriendsInfoContextProvider from './contexts/friendsInfoContext'
import Clouds from './publicpics/clouds1.jpg'
import axios from 'axios'
import getWeatherPicName from './config/decideWeatherPics'

function App() {
  return (
    // <LogDecision />
    <h1>This is App</h1>
  );
}
export default App;

// const returnWeatherPic = () => {
//   axios.post('localhost:4000/users/getFriendsInfo/weather', {location: 'Paris, France'})
//   .then(res => {
//     console.log("res:")
//     console.log(res)
//   })
//   .catch(err => {
//       console.log('something went wrong')
//       console.log(err)
//   })
// }


// //LATER:
// function App() {
//   console.log("get weather pic name:")
// console.log(getWeatherPicName('Clouds'))

//   let initialState = "";
//   const [location, setLocation] = useState(initialState)
//   // const resetInputBox = () => {
//   //   setLocation(initialState)
//   // }

//   const displayWeatherPic = () => {
//     //based on location, get the 
//   }

//   return ( //wrap the display with context provider that will provide global state. now all components will have access
//     // <TokenContextProvider>
//     //   <FriendsInfoContextProvider>
//     //     {/* <LogDecision /> */}
//     //   </FriendsInfoContextProvider>
//     // </TokenContextProvider>
//     <div>
//       <h1>GetaWeatherPic</h1>
//       <input
//       placeholder='Location'
//       onChange={env => {
//         setLocation(env.target.value)
//         console.log(location)
//     }}
//       /> 
//       <button onClick={displayWeatherPic()}
//         >Display Weather Picture
//       </button>
//       <img src={Clouds} alt="blue sky with white clouds"></img>
//       {returnWeatherPic()}
//     </div>
//   );
// }
// export default App;


//----------------------


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;