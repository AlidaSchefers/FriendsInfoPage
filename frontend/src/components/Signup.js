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
    .catch(error => {
        console.log(error);
        // console.log("oh no! It didn't work.")
        const errorsArr = error.response.data.errors
        let alertStr = ""
        for(let i = 0; i < errorsArr.length; i++) {
            alertStr += `${errorsArr[i].msg}\n`
            //could be better/simpler
        }
        alert(alertStr)
    })

    // axios.post('localhost:4000/users/signup', formData)
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(error => {
    //     console.log(error);
    // })
}


export default function Signup() {
    return(
        <div>
            This is the signup page
            <Form inputs={inputs} submitMsg={submitMsg} submitFunc={submitFunc}/>
        </div>
    )
}