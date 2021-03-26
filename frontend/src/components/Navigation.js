import React, {useState} from 'react'
import Welcome from './Welcome'
import Signup from './Signup'
import Login from './Login'
import ButtonConfig from '../config/navButtonsConfig'
import DisplayFriends from './DisplayFriends'

export default function Navigation() {
    // let token = localStorage.getItem('token')
    // console.log(`token Navigation1: ${token}`) //why does this not show up when I refresh the page?
    //this only shows up when I go to a different page?

    // let initialPage = token ? 'displayfriends' : 'welcome'

    // if(!token){
    const [page, setPage] = useState('welcome')
    
    // const [page, setPage] = useState('displayfriends')
    //if there is NO token

    const renderPage = () => {
        switch (page) {
            case 'welcome':
                return <Welcome />
            case 'signup':
                return <Signup />
            case 'login':
                return <Login />
            case 'displayfriends':
                return <DisplayFriends />
            default:
                return "404 Page Not Defined"
        }
    }

    const renderButtons = () => {
        return ButtonConfig.map(btn => {
            if(btn.page === page) return null
            else{
                return(
                    <button
                        onClick={() => setPage(btn.page)}
                    >{btn.text}
                    </button>
                )
            }
        })
    }

    const renderLogoutButton = () => { //when press the button, console.log does not show. only until refresh or change page compnents (like do to welcome page)
        if(page === 'login') {
            return (
                <button
                        onClick={() => localStorage.setItem('token', null)}
                >Logout</button>
            )
        }
        console.log(`token Navigation2: ${localStorage.getItem('token')}`)
    }


    return (
        <div id="nav">
            {/* {localStorage.getItem('token')} */}
            --------------<br />
            {renderPage()}
            {renderButtons()}
            {renderLogoutButton()}
        </div>
    )
}