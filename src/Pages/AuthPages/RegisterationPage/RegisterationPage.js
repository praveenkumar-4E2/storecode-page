import React from 'react'
import './RegisterationPage.css'
import { Link, useNavigate } from 'react-router-dom'
import RegisterationForm from '../../../components/Auth/Registeration/RegisterationForm';
import SocialMediaLinks from '../../../components/sections/SocialMediaLinks/SocialMediaLinks';
import arrow from '../../../Assests/arrow.png'


const RegisterationPage = () => {

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
        <h1>Register to get started</h1>
      </span>
        <RegisterationForm />
        <SocialMediaLinks text="Or Register with"/>
    </div>
    <div>
    <p>Already have an Account? <Link to="login" className='link-color'>Login</Link></p>
    </div>
  </div>
  )
}

export default RegisterationPage