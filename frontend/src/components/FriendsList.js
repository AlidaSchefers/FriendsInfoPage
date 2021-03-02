import React, {useState} from 'react'
import axios from 'axios'
import parse from 'html-react-parser'

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
    let rowsOfFriends
    // let firstFriend
    // let firstFriendString
    const token = localStorage.getItem('token')

    // const {data} = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    // console.log('data from getFriendsList route') //this is the array of objects
    // console.log(data)

    // axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    // .then(res => { //res is an array of objects
    //     // console.log("res:")
    //     // console.log(res.data)
    //     for(let i = 0; i < res.data.length; i++) {
    //         // rowsOfFriends += <tr><td>${res.data[i].name}</td><td>${res.data[i].location}</td></tr>
    //         // console.log("rowsOfFriends inside for loop:")
    //         // console.log(rowsOfFriends)
    //     }
    //     firstFriendString = "<tr><td>"+res.data[0].name+"</td><td>"+res.data[0].location+"</td></tr>"
    //     firstFriend = `<tr><td>${res.data[0].name}</td><td>${res.data[0].location}</td></tr>`
    //     // console.log("res.data[0].location:")
    //     // console.log(res.data[0].location)
    //     // console.log(`<tr><td>${res.data[0].name}</td><td>${res.data[0].location}</td></tr>`)
    //     console.log("firstFriend inside request")
    //     console.log(firstFriend)
    //     console.log(`firstFriendString inside request: ${firstFriendString}`)
    // })
    // .catch(err => {
    //     console.log(err)
    //     alert('Invalid credentials.')
    // })

    const [listOfFriendsState, setListOfFriendsState] = useState({})

    const getFriendsWithAxios = async () => {
        const response = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
        // const jsonData = await response.json()
        // setListOfFriendsState(response.data)
        console.log("response.data:")
        console.log(response.data)
    }
    getFriendsWithAxios()

    // console.log("listOfFriendsState:")
    // console.log(listOfFriendsState)



    // console.log("rowsOfFriends outside of loop:")
    // console.log(rowsOfFriends)

    // console.log("firstFriend outside request:")
    // console.log(firstFriend)
    // console.log(`firstFriendString outside request: ${firstFriendString}`)

    // const name2 = 'Name101'
    // const testFriend = `<tr><td>${name2}</td><td>Paris, France</td></tr>`

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                {/* <tr><td>Name1</td><td>Paris, France</td></tr> */}
                {/* {rowsOfFriends}  */}
                {/* {parse(testFriend)}  */}
            </tbody>
        </table>
    )
}
