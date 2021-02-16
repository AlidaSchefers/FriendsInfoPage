import React from 'react'

export default function DisplayFriends() {
    // const renderLogoutButton = () => { //when press the button, console.log does not show. only until refresh or change page compnents (like do to welcome page)
    //     console.log(`token Navigation2: ${localStorage.getItem('token')}`)
    //     return (
    //             <button
    //                     onClick={() => localStorage.setItem('token', null)}
    //             >Logout</button>
    //         )
    // }
    
    
    return(
        <div>
        FRIENDS DISPLAY
        {/* <button
                        onClick={() => {
                            localStorage.setItem('token', null)
                            console.log(localStorage.getItem('token'))
                        }}
                >Logout</button> */}
        </div>
    )
}