import React, { useContext, useState } from 'react'
import './Gateway.css'
import { BorderButton } from '../../Components/BorderButton/BorderButton'
import { UserIDContext } from '../../Contexts/userIDContext';
export const Gateway = () => {
    const [startPoint,setStartPoint] = useState();
    const {newUID,handleNewUser} = useContext(UserIDContext)

   const onContinue=()=>{
    const urls = [
        `https://deft-flight-booking-app.firebaseapp.com/fo`,
        `https://studyr-flight-booking-app.web.app/fo`
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
          You will be provided with a persona and asked to use it to book a flight using the flight booking interface.
        </p>
        <p>After completing the booking, you’ll answer a set of questions about your experience. 
        </p>
        <p>Once you begin the task, you will not be able to return to the previous steps.</p>
        <p>Please continue once you feel ready to proceed.</p>
        <p>Thank you for your participation!</p>
        </div>
        <p>{startPoint}</p>
        <BorderButton onContinue={onContinue}>Proceed to the Task</BorderButton>
    </div>
  )
}
