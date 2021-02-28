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

// const rowsOfFriends = (res) => {
//     let rows = ""
//     for(let i = 0; i < res.length; i++) {
//         rows += `<tr> <td>${res[i].name}</td> <td>${res[i].location}</td> </tr>`
//     }
//     return rows
// }

export default function FriendsList() {
    let rowsOfFriends = ""
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
        }
    })
    .catch(err => {
        console.log(err)
        alert('Invalid credentials.')
    })

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                {/* <tr> <td>Name1</td> <td>Location1</td> </tr> */}
                {rowsOfFriends} 
                {/* {rowsOfFriends(data)}  */}
            </tbody>
        </table>
    )
}
