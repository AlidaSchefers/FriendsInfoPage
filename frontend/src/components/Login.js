import React from 'react'
import axios from 'axios'
import Form from './Form'
import {useTokenContext} from '../contexts/tokenContext' //this file contains the useContext

const inputs = [
    {name: 'email', type: 'text', placeholder: 'Enter Your Email'},
    {name: 'password', type:'password', placeholder: 'Enter Your Password'}
]

const submitMsg = "login"

//problem: on Chrome, you get a data breach alert and suggests that you change your password. How to avoid this?
export default function Login() {
    const {setToken} = useTokenContext()
    
    const submitFunc = (formData, resetForm) => {
        axios.post('http://localhost:4000/users/login', formData)
        .then(res => {
            alert("Logged in.")
            // console.log(`token Login file: ${res.data}`)
            // localStorage.setItem('token', res.data)
            setToken(res.data)
    
            resetForm()
        })
        .catch(err => {
            console.log(err)
            alert('Invalid credentials.')
        })
    } //now able to access the context, now that it is inside the fuhnction
    return(
        <div id="login">
            This is the login page
        <Form inputs={inputs} submitMsg={submitMsg} submitFunc={submitFunc} />
        </div>
    )
}