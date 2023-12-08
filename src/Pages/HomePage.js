import React from 'react'
import SearchBox from '../components/common/SearcBox/SearchBox'
import CodeCard from '../components/sections/CodeCard/CodeCard'
import MostSearchedCode from '../components/sections/MostSearchedCodes/MostSearchedCode'
import ProfileSection from '../components/sections/ProfileSection/ProfileSection'

const HomePage = () => {
  const StyledComponent = {
    width: '100%',
    padding:'2vw'
  }
  return (
    <div style={StyledComponent}>
      <SearchBox />
      <CodeCard />
      <MostSearchedCode />
      <ProfileSection/>
    </div>
  )
}

export default HomePage