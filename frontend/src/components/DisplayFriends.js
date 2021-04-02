import React from 'react'
import FriendsList from './FriendsList'
import AddFriend from './addFriend'

export default function DisplayFriends() {
    // const renderLogoutButton = () => { //when press the button, console.log does not show. only until refresh or change page compnents (like do to welcome page)
    //     console.log(`token Navigation2: ${localStorage.getItem('token')}`)
    //     return (
    //             <button
    //                     onClick={() => localStorage.setItem('token', null)}
    //             >Logout</button>
    //         )
    // }

    // axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    //     .then(({data}) => {
    //         // setListOfFriendsState({data})
    //         console.log(data[0].name)
    //         listOfFriends += data[0].name
    //     })
    
    
    return(
        <div>
        <h1>FRIENDS DISPLAY</h1>
        <FriendsList />
        <br />
        <AddFriend />
        {/* <button
                        onClick={() => {
                            localStorage.setItem('token', null)
                            console.log(localStorage.getItem('token'))
                        }}
                >Logout</button> */}
        </div>
    )
}