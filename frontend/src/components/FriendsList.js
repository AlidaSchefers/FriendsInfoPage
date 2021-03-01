import React from 'react'
import axios from 'axios'

//get request for friends names and locations.
//return JSX component for table of each friend with a 'delete friend' button for each one. 
//this will list the friends the user currently has
// const token = localStorage.getItem('token')

// const responseData = axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
// console.log('responseData from getFriendsList route') //this is the array of objects
// console.log(responseData) //this is the array of objects
// console.log(responseData) //this is the array of objects

// const {data} = axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
// console.log('data from getFriendsList route') //this is the array of objects
// console.log(data)

export default function FriendsList() {
    let rowsOfFriends = ""
    let firstFriend = ""
    const token = localStorage.getItem('token')

    // const {data} = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    // console.log('data from getFriendsList route') //this is the array of objects
    // console.log(data)

    axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    .then(res => { //res is an array of objects
        // console.log("res:")
        // console.log(res.data)
        for(let i = 0; i < res.data.length; i++) {
            rowsOfFriends += `<tr><td>${res.data[i].name}</td><td>${res.data[i].location}</td></tr>`
            console.log("rowsOfFriends inside for loop:")
            console.log(rowsOfFriends)
        }
        firstFriend += `<tr><td>${res.data[0].name}</td><td>${res.data[0].location}</td></tr>`
        console.log("res.data:")
        console.log(res.data[0].location)
        console.log(`<tr><td>${res.data[0].name}</td><td>${res.data[0].location}</td></tr>`)
        console.log("firstFriend")
        console.log(firstFriend)
    })
    .catch(err => {
        console.log(err)
        alert('Invalid credentials.')
    })

    console.log("rowsOfFriends outside of loop:")
    console.log(rowsOfFriends)
    

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                {/* <tr><td>Name1</td><td>Paris, France</td></tr> */}
                {/* {rowsOfFriends}  */}
                {firstFriend} 
            </tbody>
        </table>
    )
}
