import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import arrow from '../../../Assests/arrow.png'
import ForgotPasswordForm from '../../../components/Auth/ForgotPassword/ForgotPasswordForm';

const ForgotPasswordPage = () => {

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
                    <h1>Forget Password?</h1>
                </span>
                <span className='text-wrap'>
                    <p>
                        Please enter the email address linked with your account.
                    </p>
                </span>
                <ForgotPasswordForm />



            </div>
            <p>Remember Password?<Link to="/login" className='link-color'>Login</Link></p>
            <div>

            </div>

        </div>
    )
}

export default ForgotPasswordPage