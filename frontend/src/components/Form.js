import React, {useState} from 'react'

export default function Form(props) {
    const {inputs, submitMsg, submitFunc} = props
    let initialState = {}

    inputs.forEach(input => {
        initialState[input.name] = ""
    })

    const [formData, setFormData] = useState(initialState)

    const renderInputs = () => {
        return inputs.map((input, index) => {
            return (
                <input 
                key={index}
                type={input.type}
                placeholder={input.placeholder}
                value={formData[input.name]}
                onChange={env => {
                    setFormData({...formData, [input.name]: env.target.value})
                }}
                name={input.name}
                />
            )
        })
    }
    const resetForm = () => {
        setFormData(initialState)
    }

    return (
        <div>
            <form>
                {renderInputs()}
            </form>
            <button
                onClick = {() => {
                    submitFunc(formData, resetForm)
                }}
            >
                {submitMsg || 'Submit'}
            </button>
        </div>
    )

}