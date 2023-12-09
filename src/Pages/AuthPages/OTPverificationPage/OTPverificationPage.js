import React from 'react'
import arrow from '../../../Assests/arrow.png'
import { Link,useNavigate } from 'react-router-dom'
import OTPverificationForm from '../../../components/Auth/OTPverification/OTPverificationForm';


const OTPverificationPage = () => {

    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return (

        <div className='container'>
            <div className='page-width'>
                <div className='arrow'>
                    <img src={arrow} alt='back' onClick={goBack} />
                </div>
                <span className='text-gradient'>
                    <h1>OTP Verification</h1>
                </span>
                <span className='text-wrap'>

                    <p>
                        Enter the verification code we just sent on your email address.
                    </p>
                </span>
                <OTPverificationForm />

            </div>
                <p>Didn’t received code?<Link to="/login" className='link-color'>Resend</Link></p>
            
        </div>
    )
}

export default OTPverificationPage