import React, {useState, useEffect} from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import { values } from '../config/navButtonsConfig'
const token = localStorage.getItem('token')

//get request for friends names and locations.
//return JSX component for table of each friend with a 'delete friend' button for each one. 
//this will list the friends the user currently has
// const token = localStorage.getItem('token')

//-----------------------------

const useAxiosToGetFriendsArr = () => {
    let listOfFriends;
    const [listOfFriendsState, setListOfFriendsState] = useState({})
    useEffect(() => {
        axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
        .then(({data}) => {
            setListOfFriendsState({data})
        })
    }, []); //no [] or [localStorage.getItem('lsFriendsList')]
    for(let i = 0; i < listOfFriendsState.length; i++) {
        listOfFriends += `<tr><td>${listOfFriendsState[i].name}</td><td>${listOfFriendsState[i].location}</td></tr>`
        console.log("listofFriends inside for loop:")
            console.log(listOfFriends)
    }
    console.log("listofFriends outside for loop:")
        console.log(listOfFriends)
    return listOfFriends
}


export default function FriendsList() {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                <tr>
                    <td>Name1</td>
                    <td>Paris, France</td>
        
                </tr>
                {useAxiosToGetFriendsArr()} 
            </tbody>
        </table>
    )
}
