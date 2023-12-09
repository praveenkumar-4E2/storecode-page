import React from 'react'
import arrow from '../../../Assests/arrow.png'
import SocialMediaLinks from '../../../components/sections/SocialMediaLinks/SocialMediaLinks';
import LoginForm from '../../../components/Auth/Login/LoginForm';
import { Link, useNavigate } from 'react-router-dom'


const LoginPage = () => {
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
                    <h1>Welcome back! Glad to see you, Again!</h1>
                </span>

                <LoginForm />
                <SocialMediaLinks text="Or Login with" />

            </div>
            <div>
                <p>Don't have an Account? <Link to="/" className='link-color'>Register Now</Link></p>
            </div>


        </div>
    )
}

export default LoginPage