// import logo from './logo.svg';
// import './App.css';
import React from 'react'
// import Navigation from './components/Navigation'
import LogDecision from './components/LogDecision'
import TokenContextProvider from './contexts/tokenContext'


function App() {
  return ( //wrap the display with context provider that will provide global state. now all component
    <TokenContextProvider>
      <LogDecision />
    </TokenContextProvider>
  );
}
export default App;



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