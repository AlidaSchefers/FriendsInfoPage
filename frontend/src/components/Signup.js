import React from 'react'
import Form from './Form'
import axios from 'axios'

const inputs = [
    {name: 'username', type: 'text', placeholder: 'Enter A Username'},
    {name: 'email', type: 'text', required: true, placeholder: 'Enter An Email'},
    {name: 'password', type: 'password', required: true, placeholder: 'Enter A Password', autocomplete: 'new-password'}
]

const submitMsg = "sign up"

// const submitFunc = (formData, resetForm) => {
//     console.log(formData)
//     axios.post('http://localhost:4000/users/signup', formData)
//     .then(response => {
//         alert(`User ${response.data.username} was successfully created.`)
//         resetForm()
//     })
//     .catch(error => {
//         console.log(error)
//     })
// }

const submitFunc = (formData, resetForm) => {
    console.log(formData)
    axios.post('http://localhost:4000/users/signup', formData) //need http://
    .then(response => {
        alert(`User ${response.data.username} was successfully created.`)
        //after user is successfully created, clear the input fields! 
        resetForm() 
    })
    .catch() //we are not checking for invalid emails or passwords, no just leave it like this.
}


export default function Signup() {
    return(
        <div id="signup">
            This is the signup page
            <Form inputs={inputs} submitMsg={submitMsg} submitFunc={submitFunc}/>
        </div>
    )
}