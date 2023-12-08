import React from 'react'
import './MostSearchedCodes.css'
import product1 from '../../../Assests/product1.png'
import product2 from '../../../Assests/product2.png'
import MostSreachedCard from '../../ui/MostSearchedCard/MostSreachedCard'
const MostSearchedCode = () => {
    const infos = [
        {
            id: 1,
            url: product1,
            code: "SIA5990",
            category: "PRODUCT"
        },
        {
            id: 2,
            url: product2,
            code: "SIA5920",
            category: "TRAVEL"
        }
    ]
    return (
        <div className='msc-sec'>
            <h3 className='text-gradient'>Most Searched Storecode Today!</h3>
            <div className='card-slide slides'>
                {infos.map((info) => (
                    <MostSreachedCard key={info.id} url={info.url} code={info.code} category={info.category} />
                ))}
            </div>

        </div>
    )
}

export default MostSearchedCode;