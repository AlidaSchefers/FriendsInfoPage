import React, {useState, useEffect} from 'react'
import Navigation from './Navigation'
import DisplayFriends from './DisplayFriends'

export default function LogDecision() {
    const token = localStorage.getItem('token')
    const [isLoggedIn, setIsLoggedIn] = useState('false')
    useEffect( () => {
        setIsLoggedIn(Boolean(token))
    },
    [token])

    if(isLoggedIn){
        return (
            <div>
                You're logged in. <br />
                Token: {token} <br />
                Result of isLoggedIn: {isLoggedIn}
                <button
                        onClick={() => {
                            localStorage.setItem('token', null)
                            console.log(localStorage.getItem('token'))
                        }}
                >Logout</button>
            </div>
        )
    }else{
        return(
            <div>
                You're NOT logged in. <br />
                Token: {token} <br />
                Result of isLoggedIn: {isLoggedIn}
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