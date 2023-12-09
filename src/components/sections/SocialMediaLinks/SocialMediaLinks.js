import React from 'react'
import './SocialMediaLinks.css'
import apple from '../../../Assests/apple.png'
import fb from '../../../Assests/fb.png'
import google from '../../../Assests/google.png'

const SocialMediaLinks = ({text}) => {
  return (
    <div className='links'>
    <div className='lines'>

      <div className='line line1'></div>
      <span>{text}</span>
      <div className='line line2'></div>
    </div>
        
    <div className='social-icons'>
      <div className='link border-gradient gradient-right'><img src={fb} alt='fb' /></div>
      <div className='link border-gradient gradient-right' ><img src={ google} alt='gg' /></div>
      <div className='link border-gradient gradient-right'><img src={apple} alt='apple'/></div>
            
      </div>

  </div>
  )
}

export default SocialMediaLinks