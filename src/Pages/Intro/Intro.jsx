import React from 'react'
import './Intro.css'
import { useNavigate } from 'react-router-dom'
import { BorderButton } from '../../Components/BorderButton/BorderButton'
export const Intro = () => {

    const navigate= useNavigate();
    
    const onContinue=()=>{
        navigate('/consentForm')
    }
  return (
    <div className='intro'>
        <h1>Evaluating Booking/Ticketing Interfaces</h1>
        <div class="section">
        <h2>Introduction</h2>
        <p>
            Thank you for your interest in taking part in our study. This research is part of a project investigating 
            users’ experiences and perceptions of booking/ticketing interfaces. For the purpose of this study, we are comparing two flight booking applications:
        </p>
        <ul>
            <li>A replica of a standard airline website interface.</li>
            <li>A redesigned user-centric flight booking interface, proposed to enhance usability.</li>
        </ul>
        </div>

        <div class="section">
            <h2>Purpose</h2>
            <p>
                The purpose of this research is to understand and compare the user experience (UX) of both applications. 
                By examining usability, accountability, and other UX parameters, we aim to highlight the differences in user satisfaction 
                and design effectiveness between the two interfaces.
            </p>
        </div>

        <div class="section">
            <h2>What You Will Be Asked to Do</h2>
            <p>Participation involves engaging with two flight booking applications:</p>
            <ul>
                <li>
                    <strong>Standard Airline Website:</strong> Interact with the replica of an existing interface to complete 
                    a series of predefined tasks.
                </li>
                <li>
                    <strong>Proposed Redesign:</strong> Use the redesigned application to perform the same tasks.
                </li>
            </ul>
            <p>
                After completing the tasks, you will be asked to answer a series of questions related to your experience with 
                each interface. These questions will assess parameters such as ease of use, trust, and perceived accountability of the systems.
            </p>
        </div>

        <div class="section">
            <h2>Data Collection and Uses</h2>
            <p>
                During the study, we would collect your anonymized demographic details, task performance data, and your feedback on usability and trust. 
                The data will be analyzed to draw insights into user preferences, usability, and the impact of interface design on flight booking experiences.
            </p>
        </div>

        <div class="section">
            <h2>Confidentiality</h2>
            <p>
                Findings from your participation will be reported without any reference to you specifically. 
                All information that you provide will only be accessible to researchers involved in the project. 
                Demographics will be fully anonymized.
            </p>
        </div>

        <div class="section">
            <h2>Data Retention</h2>
            <p>
                During the study, data will be stored on Firebase. Once completed, all data will be moved from Firebase 
                to encrypted password-protected computers and retained for at least 4 years as per research guidelines.
            </p>
        </div>

        <div class="section">
            <h2>Contact Information</h2>
            <p>
                If you wish to withdraw or access data relevant to your participation, please contact  
                <strong> Hemanth Kumar Halaharavi</strong> (<a href="mailto:hemanthk@uni-bremen.de">hemanthk@uni-bremen.de</a>).
            </p>
            <p>
                Alternatively, you can contact Hemanth’s supervisor <strong> Thomas Mildner</strong> 
                (<a href="mailto:mildner@uni-bremen.de">mildner@uni-bremen.de</a>) about this or any other concerns you may have about your participation.
            </p>
        </div>
        
        <BorderButton onContinue={onContinue}>Click to continue</BorderButton>
    </div>
  )
}
