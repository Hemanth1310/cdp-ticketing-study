import React, { useContext, useEffect, useState } from 'react'
import './SecondPart.css'
import { useParams } from 'react-router-dom';
import { BorderButton } from '../../Components/BorderButton/BorderButton';
import { SecondPartFlag } from '../../Contexts/SecondPartFlag';
export const SecondPart = () => {
    const {id,uid,spf} = useParams();
    // const {spflagger,handleSecondPartFlag}= useContext(SecondPartFlag)
    // const [occurance,setOccurance]=useState();
    // const tstatus =  spf==='fod' ?'fo':'so'
    const onContinue=()=>{
        
        // if(spf==='fod')setOccurance(true);
       
        if(id==='1'){
            window.location.href = `https://deft-flight-booking-app.firebaseapp.com/${uid}/so`
        }else if(id==='2'){
            window.location.href = `https://studyr-flight-booking-app.web.app/${uid}/so`
        }
    }

  return (
    <div className='second-part'>
        {spf==='fod'?
        <div className='second-part-content'>
            <h1>Evaluating Booking/Ticketing Interfaces</h1>
            <div class="section">
            <h2>Task 2</h2>
            <p> Please continue for the second part. </p>
            <p> 
                You will use the next flight booking interface to book the flight. As you interact with the apps, think about:
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
            <BorderButton onContinue={onContinue}>Click to Start Second Interface</BorderButton>
        </div>:<div>

            <h1>Evaluating Booking/Ticketing Interfaces</h1>
            <h2>Thank you for your participation! You can close the Window</h2>
        </div>
    
    }
   
</div>
  )
}
