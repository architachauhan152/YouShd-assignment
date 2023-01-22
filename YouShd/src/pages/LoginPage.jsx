import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/login/Button'

export const LoginPage = () => {
  return (
    <div className='loginMain'>
        <div className='loginBackground'>
            <div className='logoLoginPage'>
                <img src="https://app-staging.youshd.com/images/logo.png" alt="" />
            </div>
            <div className='taglineLogin'>
                <span>Shop. Post. </span>
                <span>Earn.</span>
            </div>
            <div className='dogLoginPage'>
                <img src="https://app-staging.youshd.com/images/loginDog.png" alt="" />
            </div>
            <Link to='/enter-number'>
            <div><Button val='Login/ Sign up'/></div>
            </Link>
            <div className='footerLink1'>By continuing, you agree to our <a href="https://www.youshd.com/privacy">YouShd Privacy</a></div>
            <div className='footerLink2'><a href="https://www.youshd.com/privacy">Policy</a> and <a href="https://www.youshd.com/terms-and-services">Terms of service.</a></div>
        </div>
    </div>
  )
}
