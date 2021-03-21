import React, {useContext, createContext, useState, useEffect} from 'react'
const FriendsInfoContext = createContext()

export function useFriendsInfoContext () {
    return useContext(FriendsInfoContext)
}

export default function FriendsInfoContextProvider({children}) {
    const [friendsInfo, setFriendsInfo] = useState(() => {
        
    })
}