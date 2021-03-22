import React, {useContext, createContext, useState, useEffect} from 'react'
import axios from 'axios'
import {useTokenContext} from './tokenContext'

const FriendsInfoContext = createContext()

export function useFriendsInfoContext () {
    return useContext(FriendsInfoContext)
}

export default function FriendsInfoContextProvider({children}) {
    const {token, setToken} = useTokenContext()

    const [friendsInfo, setFriendsInfo] = useState(() => {
        const lsFriendsInfo = localStorage.getItem('friendsInfo')
        console.log("lsFriendsInfo:")
        console.log(lsFriendsInfo)
        console.log("-------------")
        // return (lsFriendsInfo.length === 0 || lsFriendsInfo === null) ? [] : lsFriendsInfo;
        return (lsFriendsInfo === null) ? [] : lsFriendsInfo;
    })

    useEffect(() => {
        //get friendsInfo from the database if not in local storage
        axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
        .then(({data}) => {
            console.log(data)
            // setFriendsInfo(data)
            localStorage.setItem('friendsInfo', data)
        })
        .catch(error => {
            setFriendsInfo([])
            localStorage.setItem('friendsInfo', [])
            console.log(error)
        })
    }, [friendsInfo, token])

    return (
        <FriendsInfoContext.Provider value={[friendsInfo, setFriendsInfo]}>
            {children}
        </FriendsInfoContext.Provider>
    )
}

// export default function FriendsInfoContextProvider({children}) {
//     const [friendsInfo, setFriendsInfo] = useState([])
//     axios.get('http://localhost:4000/users/getFriendsList', {headers: {'auth-token': token}})
//         .then(({data}) => {
//             // setListOfFriendsState({data})
//             console.log(data[0].name)
//             setFriendsInfo(data[0].name)
//         })
//         .catch(error => {
//             setFriendsInfo('')
//             console.log(error)
//         })
// }