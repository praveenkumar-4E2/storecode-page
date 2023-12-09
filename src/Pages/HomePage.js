import React from 'react'
import CodeCard from '../components/sections/CodeCard/CodeCard'
import MostSearchedCode from '../components/sections/MostSearchedCodes/MostSearchedCode'
import ProfileSection from '../components/sections/ProfileSection/ProfileSection'

const HomePage = () => {
  const StyledComponent = {
    width: '100%',
    padding:'0px 20px'
  }
  return (
    <div style={StyledComponent}>
      <CodeCard />
      <MostSearchedCode />
      <ProfileSection/>
    </div>
  )
}

export default HomePage