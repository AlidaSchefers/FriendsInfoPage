//this will be the component where users add/delete friends
//this will require using the Form component, requests to the database, and a button to return to the friends' display page
import AddFriend from './addFriend'
import FriendsList from './FriendsList'

export default function Settings() {
    return(
        // <div>
        <AddFriend />,
        <FriendsList />
        // </div>
    )
}