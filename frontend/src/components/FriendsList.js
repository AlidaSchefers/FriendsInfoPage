// I modeled this off of the GetaWeaherPic component.

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { values } from '../config/navButtonsConfig'
// import {useFriendsInfoContext} from '../contexts/friendsInfoContext'
const token = localStorage.getItem('token')

const GiveFriendsArr = () => {
    
    const [listOfFriendsState, setListOfFriendsState] = useState([])
    // let listOfFriends = '';

    useEffect(() => {
        getFriendsArrWAxios()
    }, []);
    
    const getFriendsArrWAxios = async () => {
        await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
        .then(({data}) => {
            setListOfFriendsState(data) //e.g. {{ _id: "60628a792b6f241e5d881394", name: "Emily", location: "Portland, Oregon" }, { _id: "60628a792b6f241e5d894864", name: "John", location: "Paris, France" }}
        })
        .catch(error => console.error(`Error: ${error}`))
    }

    return listOfFriendsState
}

const DeleteFriendFunc = (friendName) => {
    console.log("user tried to delete the friend "+ friendName) 
    console.log("token2:")
    console.log(token)

    axios.post('http://localhost:4000/users/deleteFriend', 
        {'name': friendName},
        { headers: {'auth-token': token} })
        .then(console.log('user deleted'))
        .catch(error => console.error(`Error: ${error}`))
}

export default function FriendsList() {
    //use map inside the return
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
                        <th>
                            <button type="button" onClick={() => DeleteFriendFunc("Hardcode Name1")}
                                >Delete Friend
                            </button>
                        </th>
                    </tr>
                    {GiveFriendsArr().map((friend) => (
                        <tr>
                            <td>{friend.name}</td>
                            <td>{friend.location}</td>
                            <td><button onClick={()=>DeleteFriendFunc(friend.name)}>Delete Friend</button></td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>  
    )
}