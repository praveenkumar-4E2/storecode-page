import React from 'react'
import './SearchBox.css'
import mic from '../../../Assests/mic.png'
import Search from '../../../Assests/Search.png'

const SearchBox = () => {
  return (
    <div className='search-box-border border-gradient gradient-bottom'>
            <div className='search-box'>
                    <img src={Search} alt='search' />
                    <input type='text' placeholder='Search your StoreCode'  className='search'/>
                    <img src={mic} alt="mic" />
                </div>
    </div>
  )
}

export default SearchBox