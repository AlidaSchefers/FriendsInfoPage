import React, {useState, useEffect} from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import { values } from '../config/navButtonsConfig'
// import {useFriendsInfoContext} from '../contexts/friendsInfoContext'
// const token = localStorage.getItem('token')
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRiNmI2ZGI3ZmU2NTIyZGM4NTQ1ZTQiLCJpYXQiOjE2MTU1NTY1OTB9.po2EGAJ-OGJp-jWFN7gU64hsJ0cemAtaYngpNjJpvGE'


//get request for friends names and locations.
//return JSX component for table of each friend with a 'delete friend' button for each one. 
//this will list the friends the user currently has
// const token = localStorage.getItem('token')

//-----------------------------

const useAxiosToGetFriendsArr = () => {
    
    let listOfFriends = '';
    const [listOfFriendsState, setListOfFriendsState] = useState({})
    useEffect(() => {
        axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
        .then(({data}) => {
            // setListOfFriendsState({data})
            // console.log(data[0].name)
            listOfFriends += data[0].name
        })
    }, []); //no [] or [localStorage.getItem('lsFriendsList')]
    // for(let i = 0; i < listOfFriendsState.length; i++) {
    //     // listOfFriends += `<tr><td>${listOfFriendsState[i].name}</td><td>${listOfFriendsState[i].location}</td></tr>`
    console.log("listOfFriendsStateA")    
    console.log(listOfFriendsState)    
    // listOfFriends += '<tr><td>'+listOfFriendsState.data[0].name+'</td><td>'+listOfFriendsState.data[0].location+'</td></tr>'
    // console.log("listOfFriends:")
    // console.log(listOfFriends)
    
    //     console.log("listofFriends inside for loop:")
    //         console.log(listOfFriends)
    // }
    // console.log("listofFriends outside for loop:")
    //     console.log(listOfFriends)
    listOfFriends += '<tr><td>FriendName1</td><td>FriendLocation1</td></tr>' //works fine
    return listOfFriends
}


export default function FriendsList() {
    // const {friendsInfo, setFriendsInfo} = useFriendsInfoContext()
    // console.log("friendsInfo:")
    // console.log(friendsInfo)
    // console.log("friendsInfo from local storage:")
    // console.log(localStorage.getItem('friendsInfo'))
    // console.log(typeof localStorage.getItem('friendsInfo'))
    // console.log("-------------")
    
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
                {parse(useAxiosToGetFriendsArr())} 
            </tbody>
        </table>
    )
}
