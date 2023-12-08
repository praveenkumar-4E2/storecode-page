import React from 'react'
import './BottomNav.css'
import { NavLink } from 'react-router-dom'
import home from '../../../Assests/home.png'
import about from '../../../Assests/About.png'
import blog from '../../../Assests/blog.png'
import chat from '../../../Assests/ChatIcon.png'
import user from '../../../Assests/user.png'

const BottomNav = () => {
    return (
        <div className='bottom-nav'>
            <nav>
                <NavLink to="/" className="col">
                    <div><img src={home} alt='home' /></div>
                    <div>Home</div>
                </NavLink>

                <NavLink to="/about" className="col">
                    <div><img src={about} alt='about' className='icon' /></div>
                    <div>About</div>
                </NavLink>

                <NavLink to="/chat" className="col">
                    <div><img src={chat} alt='chat' className='icon' /></div>
                    <div>Chat</div>
                </NavLink>

                <NavLink to="/blog" className="col" >
                    <div><img src={blog} alt='blog' className='icon' /></div>
                    <div>Blog</div>
                </NavLink>

                <NavLink to="/account" className="col">
                    <div><img src={user} alt='user' className='icon' /></div>
                    <div>Account</div>


                </NavLink>
            </nav>


        </div>
    )
}

export default BottomNav