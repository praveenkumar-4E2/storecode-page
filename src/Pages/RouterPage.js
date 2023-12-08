import React from 'react'
import HomePage from './HomePage'
import {Routes,Route} from 'react-router-dom'
import AboutPage from './AboutPage'
import AccountPage from './AccountPage'
import BlogPage from './BlogPage'
import ChatPage from './ChatPage'


const RouterPage = () => {
  return (
      <div>
          
          <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/*" element={<HomePage/>} />
                <Route path="about" element={<AboutPage/>} />
                <Route path="account" element={<AccountPage/>} />
                <Route path="blog" element={<BlogPage/>} />
                <Route path="chat" element={<ChatPage/>} />
            </Routes>
    </div>
  )
}

export default RouterPage