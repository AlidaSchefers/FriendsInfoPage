import React, {useState} from 'react'
import Welcome from './Welcome'
import Signup from './Signup'
import Login from './Login'
import ButtonConfig from '../config/navButtonsConfig'
import DisplayFriends from './DisplayFriends'

export default function Navigation() {
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
                        onClick={() => setPage(btn.page)}>
                        {btn.text}
                    </button>
                )
            }
        })
    }


    return (
        <div>
            {renderPage()}
            {renderButtons()}
        </div>
    )

    //if there is a valid token


}