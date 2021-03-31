// model this off of GetaWeaherPic component!!

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import { values } from '../config/navButtonsConfig'
// import {useFriendsInfoContext} from '../contexts/friendsInfoContext'
const token = localStorage.getItem('token')
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDYyODk0MTJiNmYyNDFlNWQ4ODEzOTMiLCJpYXQiOjE2MTcwNzA0MjJ9.5Ycntu3iYR35J4JFNMqnYKq0Cp69UEU02MogDO0bJZg'


//get request for friends names and locations.
//return JSX component for table of each friend with a 'delete friend' button for each one. 
//this will list the friends the user currently has
// const token = localStorage.getItem('token')

//-----------------------------

const GiveFriendsArr = () => {
    console.log("token:")
    console.log(token)
    
    const [listOfFriendsState, setListOfFriendsState] = useState([])
    let listOfFriends = '';

    useEffect(() => {
        getFriendsArrWAxios()
    }, []); //no [] or [localStorage.getItem('lsFriendsList')]
    
    const getFriendsArrWAxios = async () => {
        await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
        .then(({data}) => {
            setListOfFriendsState(data) //e.g. {{ _id: "60628a792b6f241e5d881394", name: "Emily", location: "Portland, Oregon" }}
            console.log('data we get back from axios get request:')
            console.log(data)
        })
        .catch(error => console.error(`Error: ${error}`))
    }

    console.log("listOfFriendsState:")    
    console.log(listOfFriendsState)

    if (listOfFriendsState.length > 0) {
        for(let i = 0; i < listOfFriendsState.length; i++) {
            // listOfFriends += '<tr><td>'+listOfFriendsState[i].name+'</td><td>'+listOfFriendsState[i].location+'</td></tr>'
            listOfFriends += 
                (`<tr><td>${listOfFriendsState[i].name}</td><td>${listOfFriendsState[i].location}</td><td><button type="button" onClick=${DeleteFriendFunc(listOfFriendsState[i].name)}>Delete Friend</button></td></tr>`)
        }
    } 
    return listOfFriends
}

const DeleteFriendFunc = (friendName) => {
    console.log("token2:")
    console.log(token)
    axios.post('http://localhost:4000/users/deleteFriend', {
        headers: {'auth-token': token}, 
        'name': friendName
        })
        .then(console.log('user deleted'))
        .catch(error => console.error(`Error: ${error}`))
}


export default function FriendsList() {

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Delete button</th>
                    </tr>
                    <tr>
                        <td>Hardcode Name1</td>
                        <td>Hardcode Location1</td>
                    </tr>
                    {parse(GiveFriendsArr())} 
                </tbody>
            </table>
            {/* {parse(GiveFriendsArr())}  */}
        </div>
    )
}
