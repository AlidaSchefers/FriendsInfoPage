import React from 'react'
import Form from './Form'
import axios from 'axios'

const inputs = [
    {name: 'name', type: 'text', placeholder: "Enter Your Friend's Name"},
    {name: 'location', type:'text', placeholder: "Enter Your Friend's Location (e.g. Paris, France"}
]

const submitMsg = "add friend"

export default function createFriend() {
    const submitFunc = (formData, resetForm) => {
        axios.post('http://localhost:4000/users/createFriend', {...formData, 'auth-token':localStorage.getItem('token')})
        .then(res => {
            alert("New Friend Added.")
            // console.log(`token createFriend file: ${res.data}`)
            // localStorage.setItem('token', res.data)
            console.log(res.data);
            resetForm()
        })
        .catch(err => {
            console.log('something went wrong')
            console.log(err)
        })
    } //now able to access the context, now that it is inside the fuhnction
    return(
        <div id="addfriend">
            You can add a friend here
        <Form inputs={inputs} submitMsg={submitMsg} submitFunc={submitFunc} />
        </div>
    )
}