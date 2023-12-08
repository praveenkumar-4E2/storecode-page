import React from 'react'
import './ProfileCard.css'


const ProfileCard = ({src,name}) => {
  return (
    <div className='card  border-gradient gradient-bottom' >
      <div className='card-container'>
        <img src={src} alt='pro' />
        <p>{ name}</p>
        <h3>******</h3>
      </div>
    </div>
  )
}

export default ProfileCard