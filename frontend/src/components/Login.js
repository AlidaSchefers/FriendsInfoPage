import React from 'react'
import axios from 'axios'
import Form from './Form'

const inputs = [
    {name: 'email', type: 'text', placeholder: 'Enter Your Email'},
    {name: 'password', type:'password', placeholder: 'Enter Your Password'}
]

const submitMsg = "login"

const submitFunc = (formData, resetForm) => {
    axios.post('http://localhost:4000/users/login', formData)
    .then(res => {
        alert("Logged in.")
        console.log(`token: ${res.data}`)
        localStorage.setItem('token', res.data)

        resetForm()
    })
    .catch(err => {
        console.log(err)
        alert('Invalid credentials.')
    })
}

export default function Login() {
    return(
        <div id="login">
            This is the login page
        <Form inputs={inputs} submitMsg={submitMsg} submitFunc={submitFunc} />
        </div>
    )
}