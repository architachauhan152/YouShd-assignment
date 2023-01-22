import React, { useContext, useState } from 'react'
import MuiPhoneNumber from 'material-ui-phone-number';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NumButton } from '../components/number/NumButton';
import { LoginContext } from '../context/LoginContext';
import { Navigate, useNavigate } from 'react-router-dom';

export const NumberPage = () => {

    
    const {token} = useContext(LoginContext);
    const [phone,setPhone] =useState('');
    const navigate = useNavigate();

    function handleOnChange(value) {
        setPhone(value);
    }
    const checkNum = () => {
        var [code,num] = phone.trim().split(' ');
        if(num.length===11){
            navigate('/enter-otp')
        }
        else{
            alert('Enter valid number');
        }
    }
    
    if(token==='ritu'){
        return <Navigate to={'/dashboard'} />
    }

    return (
    <div>
        <div className='loginBackground'>
            <div className='headingMain'>
                <div className='numPageHeading'>Please enter your phone number </div>
                <div className='numPageHeading'>to get started</div>
            </div>
            <div style={{marginLeft:'3rem'}}>
                <MuiPhoneNumber defaultCountry={'us'} value={phone} className='numInput' onChange={handleOnChange}/>
            </div>
            <div className='backContinueMain'>
                <div className='backContinue'>
                    <div><button className='backButton'><ArrowBackIcon /></button></div>
                    <div onClick={checkNum}><NumButton val='Continue'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
