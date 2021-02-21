import React from 'react'
import axios from 'axios'

//get request for friends names and locations.
//return JSX component for table of each friend with a 'delete friend' button for each one. 
//this will list the friends the user currently has

export default function FriendsList() {
    const token = localStorage.getItem('token')
    axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
        alert('Invalid credentials.')
    })
}
