import React from 'react'
import InputField from '../../ui/InputField/InputField'

const ForgotPasswordForm = () => {
    return (
        <div>
            <form>
                <InputField
                    type="email"
                    placeholder="Enter your email"
                />
                <button type="submit" className='sub-btn gradient-background-p' >Send Code</button>
            </form>
        </div>
    )
}

export default ForgotPasswordForm