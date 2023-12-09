import React from 'react'
import HomePage from './HomePage'
import { Routes, Route  } from 'react-router-dom'
import AboutPage from './AboutPage'
import AccountPage from './AccountPage'
import BlogPage from './BlogPage'
import ChatPage from './ChatPage'
import RegisterationPage from './AuthPages/RegisterationPage/RegisterationPage'
import MainPage from './MainPage'
import LoginPage from './AuthPages/LoginPage/LoginPage'
import ForgotPasswordPage from './AuthPages/ForgotPasswordPage/ForgotPasswordPage'
import OTPverificationPage from './AuthPages/OTPverificationPage/OTPverificationPage'
import NewPasswordPage from './AuthPages/NewPassword/NewPasswordPage'
import PasswordChangesPage from './AuthPages/PasswordChangedPage/PasswordChangesPage'

const RouterPage = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="chat" element={<ChatPage />} />
        </Route >


        <Route path="registeration" element={<RegisterationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot/password" element={<ForgotPasswordPage />} />
        <Route path="otp" element={<OTPverificationPage />} />
        <Route path="password" element={<NewPasswordPage />} />
        <Route path="password/changed" element={<PasswordChangesPage />} />
        
      </Routes>
    </div>
  )
}

export default RouterPage