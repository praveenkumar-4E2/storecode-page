import React from 'react'
import InputField from '../../ui/InputField/InputField'
import './RegisterationForm.css'
const RegisterationForm = () => {
    return (
        <div>
            <form>
                <InputField
                    type="text"
                    placeholder="Name"
                />
                <InputField
                    type="email"
                    placeholder="Email Id"
                />
                <InputField
                    type="text"
                    placeholder="Contact"
                />
                <InputField
                    type="password"
                    placeholder="Password"
                />
                <InputField
                    type="password"
                    placeholder="Confirm Password"
                />
                <InputField
                    type="text"
                    placeholder="select"
                />
                <button type="submit" name="Register" className='sub-btn gradient-background-p' >Register</button>
            </form>

        </div>
    )
}

export default RegisterationForm