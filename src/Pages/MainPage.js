import React from 'react'
import {Outlet} from 'react-router-dom'
import BottomNav from '../components/common/BottomNav/BottomNav';
import TopNav from '../components/common/TopNav/TopNav';


const MainPage = () => {
    return (
        <div>
        
            <TopNav />
            <Outlet/>
            <BottomNav />
            
        </div>
    )
}

export default MainPage