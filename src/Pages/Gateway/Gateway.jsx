import React, { useState } from 'react'
import './Gateway.css'
import { BorderButton } from '../../Components/BorderButton/BorderButton'
export const Gateway = () => {
    const [startPoint,setStartPoint] = useState();
   const onContinue=()=>{
    const urls = [
        "https://deft-flight-booking-app.firebaseapp.com/",
        "https://studyr-flight-booking-app.web.app/"
      ];
      const randomIndex = Math.random() > 0.5 ? 0 : 1;
      window.location.href = urls[randomIndex]; 
   }
  return (
    <div className='gateway'>
        <h1>Evaluating Booking/Ticketing Interfaces</h1>
        <div class="section">
        <h2>Task</h2>
        <p>  Thank you for your interest in taking part in our study.</p>
        <p> 
            You will use two different flight booking apps to book this flight. As you interact with the apps, think about:
        </p>
        <ul>
            <li>How clear and easy the process is.</li>
            <li>Whether the app feels trustworthy and straightforward.</li>
            <li>If the app meets your needs without making you feel pressured or misled</li>
        </ul>
        <p>After using each app, you’ll answer a set of questions about your experience. 
        </p>
        <p>Thank you for your participation!</p>
        </div>
        <p>{startPoint}</p>
        <BorderButton onContinue={onContinue}>Click to Start First Interface</BorderButton>
    </div>
  )
}
