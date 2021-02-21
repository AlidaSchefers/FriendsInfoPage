import React, {useState, useEffect, useContext} from 'react'
import Navigation from './Navigation'
import DisplayFriends from './DisplayFriends'
import {useTokenContext} from '../contexts/tokenContext'
import Settings from './Settings'

export default function LogDecision() {
    // const token = localStorage.getItem('token')
    // // const data = useContext(TokenContext) //extracts data
    // const [isLoggedIn, setIsLoggedIn] = useState('false')
    // useEffect( () => {
    //     setIsLoggedIn(Boolean(token))
    // },
    // [token])
    const {token, setToken} = useTokenContext()
    const isLoggedIn = token !== ""

    if(isLoggedIn){
        return (
            <div>
                You're logged in. <br />
                Token: {token} <br />
                Result of isLoggedIn: {isLoggedIn}
                <button
                        onClick={() => {
                            setToken('') //logging out. triggeres changing token
                        }}
                >Logout</button>
            <Settings />
            </div>
        )
    }else{
        return(
            <div>
                You're NOT logged in. <br />
                Token: {token} <br />
                Result of isLoggedIn: {isLoggedIn}
            <Navigation />
            </div>
        )
    }


    // if(isLoggedIn){
    //     return (
    //     <div>
    //     <DisplayFriends />
    //     <button
    //                     onClick={() => {
    //                         localStorage.setItem('token', null)
    //                         console.log(localStorage.getItem('token'))
    //                     }}
    //             >Logout</button>
    //     </div>
    //     )
    // }else{
        // return <Navigation />
    // }
}