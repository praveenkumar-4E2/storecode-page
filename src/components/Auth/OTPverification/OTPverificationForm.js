import React from 'react'
import './OTPverificationForm.css'
const OTPverificationForm = () => {
    return (
        <div className="otp-form">

            <form >
                <div className='opt-fields'>
                    <span className='border-gradient gradient-right'>
                        <input type='text' />
                    </span>
                    <span className='border-gradient gradient-right'>
                        <input type='text' />
                    </span>
                    <span className='border-gradient gradient-right'>
                        <input type='text' />
                    </span>
                    <span className='border-gradient gradient-right'>
                        <input type='text' />
                    </span>
                </div>
                <button type="submit"  className='sub-btn gradient-background-p' >Verify</button>
            </form>
        </div>
    )
}

export default OTPverificationForm