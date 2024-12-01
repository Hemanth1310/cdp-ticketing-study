import React, { useState } from 'react'
import './ConsentForm.css'
import { useNavigate } from 'react-router-dom'
export const ConsentForm = () => {

    const [consent1,setConsent1] =useState(false)
    const [consent2,setConsent2] =useState(false)
    const [consent3,setConsent3] =useState(false)
    const [name,setName] = useState()
    const navigate =  useNavigate();

    const allConsentsChecked = consent1 && consent2 && consent3 ? 'isConsentActive':'isConsentDisabled';

    const onSubmission=()=>{
        navigate('/Demographics')
    }

  return (
    <div className='consentForm'>
         <h1>Evaluating Booking/Ticketing Interfaces</h1>
    <div className="section">
        <p>
            If you have any questions regarding this study or your data, feel free to get in touch with 
            <strong> Hemanth Kumar Halaharavi</strong>, the principal investigator of this study 
            (<a href="mailto:hemanthk@uni-bremen.de">hemanthk@uni-bremen.de</a>).
        </p>
    </div>

    <h2>Consent Form</h2>
    <div className="section">
        <p>
            <strong>Declaration of Consent: </strong>
            The aim of this study is to learn about investigating users’ experiences and perceptions of booking/ticketing interfaces. 
            Participation is on a voluntary basis, and you are free to withdraw at any time without providing any reason and/or 
            facing any negative consequences. If you withdraw, your data will be fully deleted.
        </p>
        <p>
            Your personal data will not be collected, and recorded data will be anonymised. Data will only be accessible to 
            authorized personnel working on this project for research, publication, or auditing purposes. 
        </p>
        <p>
            We intend to publish a thesis and academic research papers based on findings from this study. Anonymised data will 
            therefore be stored for at least 4 years, as required by most major publishing venues. All data will be processed and 
            stored in accordance with GDPR, the Irish Data Protection Act (1998), and the Bremen Data Protection Act.
        </p>
        <p>
            If you haven’t done so, please make sure to also read the additionally attached Participant Information sheet. 
            Afterwards, please tick each box to indicate the following:
        </p>
    </div>

    <form id="consent-form">
        <div className="section">
            <label>
                <input type="checkbox" name="consent1" checked={consent1} onChange={(e)=>setConsent1(e.target.checked)} />
                I confirm that I have read and understood the participant information for this study.
            </label>
            <label>
                <input type="checkbox" name="consent2" checked={consent2} onChange={(e)=>setConsent2(e.target.checked)} />
                I understand that my participation is on a voluntary basis and that I am free to withdraw during the study without 
                reason AND that if I withdraw, my data will be deleted.
            </label>
            <label>
                <input type="checkbox" name="consent3" checked={consent3} onChange={(e)=>setConsent3(e.target.checked)} />
                I understand that data I provide will only be used for the purposes outlined above and will be processed and stored 
                in accordance with GDPR and the Irish and Bremen Data Protection Acts.
            </label>
        </div>

        {/* <div className='section declaration'>
           <b>Name:</b> 
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div> */}

        <div className="button-container">
            <button className={`blueButton ${allConsentsChecked}`} onClick={onSubmission}type="submit">Submit Consent</button>
        </div>
    </form>
    </div>
  )
}
