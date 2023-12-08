import React from 'react'
import image1 from '../../../Assests/image1.png'
import image2 from '../../../Assests/image2.png'
import image3 from '../../../Assests/image3.png'
import image4 from '../../../Assests/image4.png'
import ProfileCard from '../../ui/ProfileCard/ProfileCard.js'
const ProfileSection = () => {

    const profileDetails = [
        {
            id:1,
            url: image1,
            name: "Shlok Srivastava"

        },
        {
            id:2,
            url: image2,
            name: "Ashish Chanchalani"
        },
        {
            id:3,
            url: image3,
            name: "Sejal Kumar"
        },
        {
            id:4,
            url: image4,
            name: "Bhuvan Bam"
        }
    ]
  return (
      <div className='profile-section'>
          <h4 className='text-gradient'>Top Influencers</h4>
          <div className='card-slide '>
                {profileDetails.map((profile) => (
                    <ProfileCard key={profile.id} src={profile.url} name={profile.name} />
                ))}
            </div>
          
    </div>
  )
}

export default ProfileSection