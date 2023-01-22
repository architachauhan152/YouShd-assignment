import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'

export const SideBar = ({sidebarclass}) => {


  const {isLogin} = useContext(LoginContext);

  return (
    <div className={sidebarclass?'sidebar sidebar--open':'sidebar'}>
        <div style={{marginTop:'2rem', marginBottom:'1rem'}}>
            <img src="https://app-staging.youshd.com/images/dashboardLogo.svg" alt="" />
        </div>
        <li>Dashboard</li>
        <li>Payments</li>
        <li>Profile</li>
        <li>Settings</li>
        <Link to='/enter-number' style={{textDecoration:'none'}}>
            <li onClick={isLogin}>SignOut</li>
        </Link>
    </div>
  )
}
