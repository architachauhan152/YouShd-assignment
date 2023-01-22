import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { BackDrop } from '../components/dashboard/BackDrop'
import { Navbar } from '../components/dashboard/Navbar'
import { SideBar } from '../components/dashboard/SideBar'
import { WalletCard } from '../components/dashboard/WalletCard'
import { LoginContext } from '../context/LoginContext'

export const DashboardPage = () => {
    const {token} = useContext(LoginContext);
    const [sidebar,setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState)=>!prevState)
    }

    if(token!='ritu'){
        return <Navigate to={'/enter-otp'} />
    }



  return (
    <div>
        <div className='dashMain'>
            <div className='dashSubMain'>
                <div className='navDiv'><Navbar openSidebar={toggleSidebar}/></div>
                <BackDrop sidebarclass={sidebar} closeSidebar={toggleSidebar}/>
                <SideBar sidebarclass={sidebar}/>
                <hr />
                <div className='socialHeadDash'>
                        <a href="https://www.instagram.com/" style={{textDecoration:'none'}}>
                        <div className='socialMainDash'>
                            <div className='insta-icon'></div>
                            <div className='social-name'>Instagram</div>
                        </div>
                        </a>
                        <a href="https://www.tiktok.com/login" style={{textDecoration:'none'}}>
                        <div className='socialMainDash'>
                            <div className='tiktok-icon'></div>
                            <div className='social-name'>TikTok</div>
                        </div>
                        </a>
                </div>
                <div style={{width:'80%', marginLeft:'11.5%'}}>
                    <WalletCard />
                </div>
            </div>
            <div className='productHeading'>My products</div>
            <div className='myProdHead'>
                <div>
                    <div className='prodSubHeading'>Can’t find a product?</div>
                    <div className='prodContent'>Please try verifying the email used to shop with our partner brand</div>
                </div>
                <div className='prodArrowIconDiv'><img src="https://app-staging.youshd.com/images/arrow-right.svg" alt="" /></div>
            </div>
            <div className='giftImg'>
                <img src="https://app-staging.youshd.com/images/no-product.svg" alt="" />
            </div>
            <div className='productHeading' style={{textAlign:'center'}}>
                No products here
            </div>
            <div style={{color:'grey', width:'70%',textAlign:'center',marginLeft:'4rem'}}>You have not purchased an eligible product from our featured brands yet.</div>
            <div style={{color:'grey', fontWeight:'500',textAlign:'center'}}>Shop now to start earning!</div>
            <div style={{textAlign:'center',marginBottom:'2rem'}}><button style={{padding:'0.8rem',borderRadius:'10px',border:'none', color:'white', backgroundColor:'black',fontWeight:'600',marginTop:'2rem'}}>Our featured stores</button></div>
        </div>
    </div>
  )
}
