import React from 'react'
import './SearchBox.css'
import mic from '../../../Assests/mic.png'
import Search from '../../../Assests/Search.png'

const SearchBox = () => {
  return (
    <div className='search-box-border border-gradient gradient-bottom'>
            <div className='search-box'>
                    <img src={Search} alt='search' />
                    <input className='search' type='text' placeholder='Search your StoreCode'  />
                    <img src={mic} alt="mic" />
                </div>
    </div>
  )
}

export default SearchBox