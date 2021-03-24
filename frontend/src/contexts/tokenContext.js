import React, {useContext, createContext, useState, useEffect} from 'react'
import axios from 'axios'

//useContex make a shortcut for using context
//dont need i to import the context and useContext, just a single function

const TokenContext = createContext() //createContext built-in react hook. allows us to create a global state variable that can be passed to components.

//hooks are react-only, a single call that do something under the hood. 

export function useTokenContext () { //export doesn't work with ES6 syntax like = () =>
    return useContext(TokenContext)
}
//camel case and 'use' means our own hook
//this custom hook will provide token and setToken

export default function TokenContextProvider({children}) { //components should be Pascal cap. {children} is same as props.children
//provider is the one giving info to other sub-components.
    const [token, setToken] = useState(() => {
        const lsToken = localStorage.getItem('token')
        return (lsToken.trim() === undefined || lsToken === null || typeof lsToken !== 'string') ? "" : lsToken
    }) //can have static variable or function in useState
    //problem: "lsToken.trim() === undefined" is ok in firefox but not chrome. removing the .trim() makes chrome work.
    
    useEffect(() => {
        //make a request with token to check if valid
        console.log('testing123');
        if (token !== ""){
            axios.get('http://localhost:4000/users/checktoken', {
                headers: {'auth-token': token}
            })
            .then(res => {
                localStorage.setItem('token', token)
                // console.log(res.status)
            })
            .catch(err => {
                setToken('') //empty, so won't run this again b/w we don't loop when empty string (the conditional we used)
                localStorage.setItem('token', '')
                console.log(err)
            })
        }
        
        // http://localhost:4000/users/checktoken
    }, [token])
    //with [], means only run this one time when the component mounts. only run once per refresh

    return ( //start with object in value. easy to expand upon. has privder and consumer 
        //with {{token, setToken}}, will create property-value
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    )
}

// export default function LogDecision() {
//     const token = localStorage.getItem('token')
//     // const data = useContext(TokenContext) //extracts data
//     const [isLoggedIn, setIsLoggedIn] = useState('false')
//     useEffect( () => {
//         setIsLoggedIn(Boolean(token))
//     },
//     [token])

//     if(isLoggedIn){
//         return (
//             <div>
//                 You're logged in. <br />
//                 Token: {token} <br />
//                 Result of isLoggedIn: {isLoggedIn}
//                 <button
//                         onClick={() => {
//                             localStorage.setItem('token', null)
//                             console.log(localStorage.getItem('token'))
//                         }}
//                 >Logout</button>
//             </div>
//         )
//     }else{
//         return(
//             <div>
//                 You're NOT logged in. <br />
//                 Token: {token} <br />
//                 Result of isLoggedIn: {isLoggedIn}
//             </div>
//         )
//     }