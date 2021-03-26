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
    const isLoggedIn = (token !== "")

    // if(isLoggedIn){
    //     return (
    //         <div>
    //             You're logged in. <br />
    //             <br />
    //             Token from context: {token} <br />
    //             <br />
    //             Token from local storage: {localStorage.getItem('token')} <br />
    //             Boolean of ls token: {Boolean(localStorage.getItem('token')).toString()} <br />
    //             <br />
    //             {/* this token from ls ^^ only shows up on a refresh of the page. the token from context shows up immediately, no refresh needed. */}
    //             <br />
    //             Result of isLoggedIn: {Boolean(isLoggedIn).toString()} <br />
    //             ------------<br />
    //             <button
    //                     onClick={() => {
    //                         setToken('') //logging out. triggeres changing token
    //                         localStorage.setItem('token', '')
    //                     }}
    //             >Logout</button>
    //         <Settings />
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>
    //             You're NOT logged in. <br />
    //             Token from context: {token} <br />
    //             Token from local storage: {localStorage.getItem('token')} <br />
    //             Result of isLoggedIn: {Boolean(isLoggedIn).toString()}
    //         <Navigation />
    //         </div>
    //     )
    // }

///////
    if(isLoggedIn){
        return (
        <div>
        <DisplayFriends />
        <button
                        onClick={() => {
                            localStorage.setItem('token', '')
                            setToken('')
                            console.log(localStorage.getItem('token'))
                        }}
                >Logout</button>
        </div>
        )
    }else{
        return(
            <div>
                You're NOT logged in. <br />
                Token from context: {token} <br />
                Token from local storage: {localStorage.getItem('token')} <br />
                Result of isLoggedIn: {Boolean(isLoggedIn).toString()}
            <Navigation />
            </div>
        )
    }
////////
}