import React from 'react'
import './MostSearchedCard.css'
import product1 from '../../../Assests/product1.png'

const MostSreachedCard = ({url,code,category}) => {
    return (
        <div className='msCard  border-gradient gradient-bottom'>
            <p className='msCard--title'>{category}</p>
            <div className='msCard--innerCard'>
                <img src={url} alt='product1' />
                <h5 className='text-gradient'>{code}</h5>
            </div> 

        </div>
    )
}

export default MostSreachedCard