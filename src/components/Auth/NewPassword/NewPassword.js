import React from 'react'
import './NewPassword.css'
import InputField from '../../ui/InputField/InputField'
const NewPassword = () => {
    return (
        <div>
            <form>
                <InputField
                    type="password"
                    placeholder="New Password"
                />
                <InputField
                    type="password"
                    placeholder="Confirm Password"
                />
                <button type="submit" className="sub-btn  gradient-background-p" >Reset Password </button>
            </form>
        </div>
    )
}

export default NewPassword