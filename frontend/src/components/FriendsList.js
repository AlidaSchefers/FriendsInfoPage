// I modeled this off of the GetaWeaherPic component.

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import parse from 'html-react-parser'
import { values } from '../config/navButtonsConfig'
// import {useFriendsInfoContext} from '../contexts/friendsInfoContext'
const token = localStorage.getItem('token')

        // 1) making the rows with a STRING LITERAL and a PARSER ------------------------------------------------------------------------------------------

const GiveFriendsArr = () => {
    
    const [listOfFriendsState, setListOfFriendsState] = useState([])
    let listOfFriends = '';

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

    if (listOfFriendsState.length > 0) {
        for(let i = 0; i < listOfFriendsState.length; i++) {
            listOfFriends += <tr><td>{listOfFriendsState[i].name}</td><td>{listOfFriendsState[i].location}</td><td><button type="button" onClick={() => DeleteFriendFunc(listOfFriendsState[i].name)}>Delete Friend</button></td></tr>
        }
    } 

    return listOfFriends
}

const DeleteFriendFunc = (friendName) => {
    console.log("User tried to delete the friend "+ friendName) 
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
                        <th>
                            <button type="button" onClick={() => DeleteFriendFunc("Hardcode Name1")}
                                >Delete Friend
                            </button>
                        </th>
                    </tr>
                    {GiveFriendsArr()} 
                </tbody>
            </table>
        </div>
    )
}

        // 2) making rows with JSX and no parser ------------------------------------------------------------------------------------------

// const GiveFriendsArr = () => {
    
//     const [listOfFriendsState, setListOfFriendsState] = useState([])
//     let listOfFriends = '';

//     useEffect(() => {
//         getFriendsArrWAxios()
//     }, []);
    
//     const getFriendsArrWAxios = async () => {
//         await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
//         .then(({data}) => {
//             setListOfFriendsState(data) //e.g. {{ _id: "60628a792b6f241e5d881394", name: "Emily", location: "Portland, Oregon" }, { _id: "60628a792b6f241e5d894864", name: "John", location: "Paris, France" }}
//         })
//         .catch(error => console.error(`Error: ${error}`))
//     }

//     if (listOfFriendsState.length > 0) {
//         for(let i = 0; i < listOfFriendsState.length; i++) {
//             listOfFriends += (`<tr>
//                 <td>${listOfFriendsState[i].name}</td>
//                 <td>${listOfFriendsState[i].location}</td>
//                 <td>
//                     <button onClick='${()=>DeleteFriendFunc(listOfFriendsState[i].name)}'>
//                         Delete Friend
//                     </button>
//                 </td>
//             </tr>`)
//         }
//     } 
//     return listOfFriends
// }

// const DeleteFriendFunc = (friendName) => {
//     console.log("user tried to delete the friend "+ friendName) 
// }

// export default function FriendsList() {
//     return (
//         <div>
//             <table>
//                 <tbody>
//                     <tr>
//                         <th>Name</th>
//                         <th>Location</th>
//                         <th>Delete button</th>
//                     </tr>
//                     <tr>
//                         <td>Hardcode Name1</td>
//                         <td>Hardcode Location1</td>
//                         <th>
//                             <button type="button" onClick={() => DeleteFriendFunc("Hardcode Name1")}
//                                 >Delete Friend
//                             </button>
//                         </th>
//                     </tr>
//                     {parse(GiveFriendsArr())} 
//                 </tbody>
//             </table>
//         </div>  
//     )
// }

        // Everything ------------------------------------------------------------------------------------------------------------------------

// const GiveFriendsArr = () => {
//     // console.log("token:")
//     // console.log(token)
    
//     const [listOfFriendsState, setListOfFriendsState] = useState([])
//     let listOfFriends = '';

//     useEffect(() => {
//         getFriendsArrWAxios()
//     }, []);
    
//     const getFriendsArrWAxios = async () => {
//         await axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
//         .then(({data}) => {
//             setListOfFriendsState(data) //e.g. {{ _id: "60628a792b6f241e5d881394", name: "Emily", location: "Portland, Oregon" }, { _id: "60628a792b6f241e5d894864", name: "John", location: "Paris, France" }}
//             // console.log('data we get back from axios get request:')
//             // console.log(data)
//         })
//         .catch(error => console.error(`Error: ${error}`))
//     }

//     // console.log("listOfFriendsState:")    
//     // console.log(listOfFriendsState)

//     if (listOfFriendsState.length > 0) {
//         for(let i = 0; i < listOfFriendsState.length; i++) {
//             // listOfFriends += '<tr><td>'+listOfFriendsState[i].name+'</td><td>'+listOfFriendsState[i].location+'</td></tr>'
//             // listOfFriends += ('<tr><td>'+listOfFriendsState[i].name+'</td><td>'+listOfFriendsState[i].location+'</td><td><button type="button" onClick='+DeleteFriendFunc(listOfFriendsState[i].name)+'>Delete Friend</button></td></tr>')
//             // listOfFriends += ('<tr><td>'+listOfFriendsState[i].name+'</td><td>'+listOfFriendsState[i].location+'</td><td><button type="button" onClick={DeleteFriendFunc(listOfFriendsState[i].name)}>Delete Friend</button></td></tr>')
//             // listOfFriends += (`<tr>
//             //     <td>${listOfFriendsState[i].name}</td>
//             //     <td>${listOfFriendsState[i].location}</td>
//             //     <td>
//             //         <button onClick='${()=>DeleteFriendFunc(listOfFriendsState[i].name)}'>
//             //             Delete Friend
//             //         </button>
//             //     </td>
//             // </tr>`)
//             // listOfFriends += (`<tr>
//             // <td>${listOfFriendsState[i].name}</td>
//             // <td>${listOfFriendsState[i].location}</td>
//             // <td>
//             // <button type="button">
//             //     Delete Friend
//             // </button>
//             // </td>
//             // </tr>`)

//             // listOfFriends += (`<tr><td>${listOfFriendsState[i].name}</td><td>${listOfFriendsState[i].location}</td></tr>`)
//             // listOfFriends += '<tr><td>{listOfFriendsState[i].name}</td><td>{listOfFriendsState[i].location}</td><td><button type="button" onClick={() => {DeleteFriendFunc(listOfFriendsState[i].name)}}>Delete Friend</button></td></tr>'
//             // listOfFriends += '<tr><td>NAME</td><td>LOCATION</td></tr>'
//             // listOfFriends += <tr><td>{listOfFriendsState[i].name}</td><td>{listOfFriendsState[i].location}</td></tr>
//             listOfFriends += <tr><td>{listOfFriendsState[i].name}</td><td>{listOfFriendsState[i].location}</td><td><button type="button" onClick={() => DeleteFriendFunc(listOfFriendsState[i].name)}>Delete Friend</button></td></tr>
//             // console.log("listOfFriendsState[i].name:")
//             // console.log(listOfFriendsState[i].name)
//             // {() => {
//             //     submitFunc(formData, resetForm)
//             // }}
//         }
//     } 
//     // console.log("listOfFriends--")
//     // console.log(listOfFriends)
//     return listOfFriends
// }

// const DeleteFriendFunc = (friendName) => {
//     console.log("user tried to delete the friend "+ friendName) 
//     // console.log("token2:")
//     // console.log(token)
//     // axios.post('http://localhost:4000/users/deleteFriend', {
//     //     headers: {'auth-token': token}, 
//     //     'name': friendName
//     //     })
//     //     .then(console.log('user deleted'))
//     //     .catch(error => console.error(`Error: ${error}`))
// }


// export default function FriendsList() {

//     return (
//         <div>
//             <table>
//                 <tbody>
//                     <tr>
//                         <th>Name</th>
//                         <th>Location</th>
//                         <th>Delete button</th>
//                     </tr>
//                     <tr>
//                         <td>Hardcode Name1</td>
//                         <td>Hardcode Location1</td>
//                         <th>
//                             <button type="button" onClick={() => DeleteFriendFunc("Hardcode Name1")}
//                                 >Delete Friend
//                             </button>
//                         </th>
//                     </tr>
//                     <tr>
//                         {/* <td>NAME</td>
//                         <td>LOCATION</td>
//                         <td>
//                             <button type="button" onClick={() => DeleteFriendFunc("FriendNameTest")}>
//                             Console log confirmation
//                             </button>
//                         </td> */}
//                     </tr>
//                     {/* <tr><td>NAME</td><td>LOCATION</td><td><button type="button" onClick={() => console.log("button was pressed")}>Console log confirmation</button></td></tr> */}
//                     {GiveFriendsArr()} 
//                     {/* {parse(GiveFriendsArr())}  */}
//                 </tbody>
//             </table>
//             {/* {parse(GiveFriendsArr())}  */}
//         </div>
//     )
// }
