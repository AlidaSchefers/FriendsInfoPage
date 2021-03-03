import React, {useState} from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import { values } from '../config/navButtonsConfig'

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
    // let rowsOfFriends
    let firstFriend
    let stringOfFriendDisplay
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

    // const [listOfFriendsState, setListOfFriendsState] = useState([])

    const getFriendsWithAxios = async () => {
        // const {data} = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
        const response = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
        // const jsonData = await response.json()
        // setListOfFriendsState(response.data)

        // firstFriend = response.data
        // console.log("response.data:")
        // console.log(response.data)
        // console.log("firstFriend inside function with request:")
        console.log('res.data inside request')
        console.log(response.data) //returns the array of firends objects
        return response.data

    }
    console.log("return of the function:")
    console.log(getFriendsWithAxios()) //returns a promise
    // console.log("return of the function EDITED:")
    // console.log(getFriendsWithAxios().data)
    

    console.log("firstFriend OUTside function with request:")
    console.log(firstFriend)

    //firstFriend WORKS! array of objects, with each object being a friend

    // for(let i = 0; i < firstFriend.length; i++) {
    //     stringOfFriendDisplay += <tr><td>${firstFriend[i].name}</td><td>${firstFriend[i].location}</td></tr>
    //     console.log("stringOfFriendDisplay inside for loop:")
    //     console.log(stringOfFriendDisplay)
    // }

    

    // console.log("listOfFriendsState:")
    // console.log(listOfFriendsState)

    console.log("firstFriend outside function:")
    console.log(firstFriend)

    //make button for deleting a friend with the route /deleteFriend


    const renderDeleteButtons = () => {
        return(
                    <button
                        // onClick={}
                    >Delete friend
                    </button>
                )
    }

    {
    // console.log("rowsOfFriends outside of loop:")
    // console.log(rowsOfFriends)

    // console.log("firstFriend outside request:")
    // console.log(firstFriend)
    // console.log(`firstFriendString outside request: ${firstFriendString}`)

    // const name2 = 'Name101'
    // const testFriend = `<tr><td>${name2}</td><td>Paris, France</td></tr>`
    }

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                <tr><td>Name1</td><td>Paris, France</td><td>{renderDeleteButtons()}</td></tr>
                {/* {rowsOfFriends}  */}
                {/* {parse(testFriend)}  */}
            </tbody>
        </table>
    )
}
