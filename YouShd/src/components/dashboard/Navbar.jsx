import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = ({openSidebar}) => {
  return (
    <div>
        <div className='navMain'>
            <div className='logo-menu'>
                <div className='menuDash' onClick={openSidebar}><MenuIcon /></div>
                <div className='logoDash'><img src="https://app-staging.youshd.com/images/dashboardLogo.svg" alt="" /></div>
            </div>
            <div className='walletDash'>
                <img src="https://app-staging.youshd.com/images/wallet.svg" alt="" />
            </div>
        </div>
    </div>
  )
}
