import React from 'react'
import './TopNav.css'
import { NavLink } from 'react-router-dom'
import dp from '../../../Assests/dp.png'
import logo from '../../../Assests/logo.png'

import SearchBox from '../SearcBox/SearchBox.js'

const TopNav = () => {
  return (
    <div className='top-nav'>
      <div>
        <NavLink to="/" className="row">
          <div><img src={logo} alt='logo' /></div>
          <div className='title'><h4>StoreCode</h4></div>
        </NavLink>
      </div>
      <div className='row' >
        <SearchBox />
        <div>
          <img src={dp} alt='dp' className='top-nav-img' />
        </div>
      </div>
    </div>
  )
}

export default TopNav