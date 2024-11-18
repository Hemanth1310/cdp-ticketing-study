import React from 'react'
import './Home.css'
import Welcome_banner from '../../Assets/Images/Welcome_banner.png'
import { useNavigate } from 'react-router-dom'
import { BorderButton } from '../../Components/BorderButton/BorderButton'
export const Home = () => {
    const navigate = useNavigate();

    const onContinue = ()=>{
        navigate('/intro')
    }
  return (
    <div className='home'>
       
        <img src={Welcome_banner}></img>
        <h1>Evaluating Booking/Ticketing Interfaces</h1>
        {/* <div className='BlueText' onClick={onContinue}>Click to continue</div> */}
        <BorderButton onContinue={onContinue}>Click to continue</BorderButton>
    </div>
  )
}
