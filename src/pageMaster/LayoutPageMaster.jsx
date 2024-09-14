import React from 'react'
import Register from '../pages/Register'
import HeaderMenu from '../components/HeaderMenu'
import Footer from '../components/Footer'

const LayoutPageMaster = () => {
  return (
    <div>
        <HeaderMenu></HeaderMenu>

        <div style={{minHeight:650}} className='content'>
            {/* <Outlet></Outlet> */}
            <Register></Register>
        </div>
        
        <Footer></Footer>
    </div>
  )
}

export default LayoutPageMaster