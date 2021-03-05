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

async function getArrayOfFriends() { //use context to hold state and useffect. all child components will understand the friends 
    //make a context, pull friends array from mongodb, useeffect to update it.

    const token = localStorage.getItem('token')
    // const [listOfFriendsState, setListOfFriendsState] = useState([])
    // const getFriendsWithAxios = async () => {
    //     const response = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    //     // return response
    //     let listofFriends2;
    //     for(let i = 0; i < response.data.length; i++) {
    //         listofFriends2 += <tr><td>${response.data[i].name}</td><td>${response.data[i].location}</td></tr>
    //         console.log("listofFriends2 inside for loop:")
    //         console.log(listofFriends2)
    //     }
    // }
    const response = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    // return response
    console.log("response.data")
    console.log(response.data)
    let listofFriends2 = '';
    for(let i = 0; i < response.data.length; i++) {
        listofFriends2 += `<tr><td>${response.data[i].name}</td><td>${response.data[i].location}</td></tr>`
        console.log("listofFriends2 inside for loop:")
        console.log(listofFriends2)
        // const jsonData = await response.json()
        // setListOfFriendsState(response.data)
        // setListOfFriendsState(response.data)
        // console.log("response:")
        // console.log(response)
        // getFriendsWithAxios()
    }
    console.log("listofFriends2 outside loop:")
    console.log(listofFriends2)
    return listofFriends2
}



export default function FriendsList() {
    // // let rowsOfFriends
    // // let stringOfFriendDisplay
    // // let firstFriendString
    // const token = localStorage.getItem('token')

    // // const {data} = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    // // console.log('data from getFriendsList route') //this is the array of objects
    // // console.log(data)

    // // axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    // // .then(res => { //res is an array of objects
    // //     // console.log("res:")
    // //     // console.log(res.data)
    // //     for(let i = 0; i < res.data.length; i++) {
    // //         // rowsOfFriends += <tr><td>${res.data[i].name}</td><td>${res.data[i].location}</td></tr>
    // //         // console.log("rowsOfFriends inside for loop:")
    // //         // console.log(rowsOfFriends)
    // //     }
    // //     firstFriendString = "<tr><td>"+res.data[0].name+"</td><td>"+res.data[0].location+"</td></tr>"
    // //     firstFriend = `<tr><td>${res.data[0].name}</td><td>${res.data[0].location}</td></tr>`
    // //     // console.log("res.data[0].location:")
    // //     // console.log(res.data[0].location)
    // //     // console.log(`<tr><td>${res.data[0].name}</td><td>${res.data[0].location}</td></tr>`)
    // //     console.log("firstFriend inside request")
    // //     console.log(firstFriend)
    // //     console.log(`firstFriendString inside request: ${firstFriendString}`)
    // // })
    // // .catch(err => {
    // //     console.log(err)
    // //     alert('Invalid credentials.')
    // // })

    // const [listOfFriendsState, setListOfFriendsState] = useState([])

    // // let firstFriendTest;

    // // const response = axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    // //                 .then((res) => {
    // //                     setListOfFriendsState(res.data)
    // //                     // console.log("promise result.data", result.data)
    // //                     // //make the HTML that will become the JSX
    // //                     // firstFriendTest = result.data
    // //                 })
    // // // console.log("response:")
    // // // console.log(response)
    // // // firstFriendTest = response.data //array I want
    // // console.log("listOfFriendsState:")
    // // console.log(listOfFriendsState)


    // const getFriendsWithAxios = async () => {
    //     const response = await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
    //     return response
        
    //     // const jsonData = await response.json()
    //     // setListOfFriendsState(response.data)
    //     setListOfFriendsState(response.data)
    //     console.log("response:")
    //     console.log(response)
    //     // return response.data

    //     console.log("listOfFriendsState inside function:")
    //     console.log(listOfFriendsState)

    //     // setListOfFriendsState(response.data)

    //     // console.log("respoonse inside the request:")
    //     // console.log(response)

    //     // // firstFriend = response.data
    //     // // console.log("response.data:")
    //     // // console.log(response.data)
    //     // // console.log("firstFriend inside function with request:")
    //     // console.log('res.data inside request')
    //     // console.log(response.data) //returns the array of firends objects
    //     // firstFriendTest = response.data

    // }
    // getFriendsWithAxios()

    // console.log("listOfFriendsState OUTside function:")
    // console.log(listOfFriendsState)

    // // console.log("return of the function:")
    // // console.log(getFriendsWithAxios()) //returns a promise
    // // console.log("return of the function:")
    // // console.log(getFriendsWithAxios())


    // // console.log("firstFriend OUTside function with request:")
    // // console.log(firstFriend)

    // //firstFriend WORKS! array of objects, with each object being a friend

    // // for(let i = 0; i < firstFriend.length; i++) {
    // //     stringOfFriendDisplay += <tr><td>${firstFriend[i].name}</td><td>${firstFriend[i].location}</td></tr>
    // //     console.log("stringOfFriendDisplay inside for loop:")
    // //     console.log(stringOfFriendDisplay)
    // // }

    

    // // console.log("listOfFriendsState:")
    // // console.log(listOfFriendsState)

    // // console.log("firstFriend outside function:")
    // // console.log(firstFriend)

    // //make button for deleting a friend with the route /deleteFriend


    // // const renderDeleteButtons = () => {
    // //     return(
    // //                 <button
    // //                     // onClick={}
    // //                 >Delete friend
    // //                 </button>
    // //             )
    // // }

    // {
    // // console.log("rowsOfFriends outside of loop:")
    // // console.log(rowsOfFriends)

    // // console.log("firstFriend outside request:")
    // // console.log(firstFriend)
    // // console.log(`firstFriendString outside request: ${firstFriendString}`)

    // // const name2 = 'Name101'
    // // const testFriend = `<tr><td>${name2}</td><td>Paris, France</td></tr>`
    // }
    console.log("getArrayOfFriends()")
    console.log(getArrayOfFriends())

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                {/* <tr><td>Name1</td><td>Paris, France</td><td>{renderDeleteButtons()}</td></tr> */}
                <tr>
                    <td>Name1</td>
                    <td>Paris, France</td>
                    <td>
                        <button 
                        onClick={() => axios.post('localhost:4000/users/deleteFriend', {'name': 'FriendName3'})}
                        >Delete Friend
                        </button>
                    </td>
                </tr>
                {/* {rowsOfFriends}  */}
                {/* {parse(getArrayOfFriends())}  */}
            </tbody>
        </table>
    )
}
