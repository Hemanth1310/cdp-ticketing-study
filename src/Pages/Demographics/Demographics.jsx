import React, { useContext, useState } from 'react'
import './Demographics.css'
import { ref, set, push,get } from "firebase/database";
import { database } from '../../firebase.js';
import { useNavigate } from 'react-router-dom';
import { UserIDContext } from '../../Contexts/userIDContext.jsx';
export const Demographics = () => {

    const navigate = useNavigate();
    const {newUID,handleNewUser} = useContext(UserIDContext)
    const [errors,setErrors]=useState({})
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        occupation: "",
        bookingFrequency: "",
        primaryDevice: "",
        experiencedDifficulties: "",
        difficultiesDescription: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


    const validation=()=>{
        const newErrors={}
        if(!formData.age)newErrors.age='Please enter Age!!';
        if(!formData.gender)newErrors.gender='Please enter Gender!!';
        if(!formData.occupation)newErrors.occupation='Please enter occupation!!';
        if(!formData.bookingFrequency)newErrors.bookingFrequency='Please enter Booking frequency!!';
        if(!formData.primaryDevice)newErrors.primaryDevice='Please enter primary device details!!'
        if(!formData.experiencedDifficulties)newErrors.experiencedDifficulties='Please enter the following field!!';

        setErrors(newErrors)
        return Object.keys(newErrors).length===0;
    }

    const addRecord = async () => {
        const demosRef = ref(database, 'demograpics-data'); // Reference to the 'bookings' node
        push(demosRef, formData)
          .then(() => {
            console.log("Data pushed successfully");
          })
          .catch((error) => {
            console.error("Error pushing data: ", error);
          });
         gentrateUserID(); 
      };
    
      const gentrateUserID = async () =>{
        const demosRef =ref(database,'demograpics-data');
        const snapshot = await get(demosRef);

        try{if(snapshot.exists()){
            const children = snapshot.val(); // Get the raw data as an object
            const uid = Object.keys(children).length; 
            console.log('newuid'+ uid)
            handleNewUser('p'+uid) 
        }else{
            console.log('No user found')
            handleNewUser('0') 
        }}catch(e){
            console.log('Error occured. No connection to DB'+ e );
        }
      }
    
    const handleSubmit = () => {
       if(validation())
        {
            addRecord();
            console.log("Submitted Data:", formData);
            navigate('/testGateway')
        }
       
      };

      
     
    
      return (
        <div className='demographics'>
            <div className='demographics-form'>
            <h1>Demographics Questions</h1>
            <p>Please provide the following information. Your responses will remain anonymous:</p>
        
            {/* Age */}
            <div className='question-section ' >
                <div className='radio-type'>
                    <label className='question-tag'>Age:</label>
                    <div className='options'>
                    <label><input type="radio" name="age" value="18-24" onChange={handleChange} /> 18–24</label>
                    <label><input type="radio" name="age" value="25-34" onChange={handleChange} /> 25–34</label>
                    <label><input type="radio" name="age" value="35-44" onChange={handleChange} /> 35–44</label>
                    <label><input type="radio" name="age" value="45-54" onChange={handleChange} /> 45–54</label>
                    <label><input type="radio" name="age" value="55+" onChange={handleChange} /> 55+</label>
                    </div>
                </div>
                {errors.age && <span className='errorElement'>{errors.age}</span>}
            </div>
           
            {/* Gender */}
            <div className='question-section '>
                <div className='radio-type'>
                    <label  className='question-tag'>Gender:</label>
                    <div className='options'>
                    <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
                    <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
                    <label><input type="radio" name="gender" value="Non-binary" onChange={handleChange} /> Non-binary</label>
                    <label><input type="radio" name="gender" value="Prefer not to say" onChange={handleChange} /> Prefer not to say</label>
                    </div>
                </div>
                {errors.gender && <span className='errorElement'>{errors.gender}</span>}
            </div>
           
            {/* Occupation */}
            <div className='question-section'>
                <label  className='question-tag'>
                Occupation: 
                <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
                </label>
                {errors.occupation && <span className='errorElement'>{errors.occupation}</span>}
            </div>
           
            {/* Booking Frequency */}
            <div className='question-section'>
                <label  className='question-tag'>How often do you book flights?</label>
                <div>
                <label><input type="radio" name="bookingFrequency" value="Rarely" onChange={handleChange} /> Rarely (0–1 times/year)</label>
                <label><input type="radio" name="bookingFrequency" value="Occasionally" onChange={handleChange} /> Occasionally (2–5 times/year)</label>
                <label><input type="radio" name="bookingFrequency" value="Frequently" onChange={handleChange} /> Frequently (6+ times/year)</label>
                </div>
                {errors.bookingFrequency && <span className='errorElement'>{errors.bookingFrequency}</span>}
            </div>
           
            {/* Primary Device */}
            <div className='question-section'>
                <label  className='question-tag'>Primary device for flight booking:</label>
                <div >
                <label><input type="radio" name="primaryDevice" value="Smartphone" onChange={handleChange} /> Smartphone</label>
                <label><input type="radio" name="primaryDevice" value="Laptop/Desktop" onChange={handleChange} /> Laptop/Desktop</label>
                <label><input type="radio" name="primaryDevice" value="Tablet" onChange={handleChange} /> Tablet</label>
                <label className='options'>
                    <input type="radio" name="primaryDevice" value="Other" onChange={handleChange} /> Other: 
                    <input type="text" name="primaryDeviceOther" disabled={formData.primaryDevice !== "Other"} onChange={handleChange} />
                </label>
                </div>
                {errors.primaryDevice && <span className='errorElement'>{errors.primaryDevice}</span>}
            </div>
            
            {/* Booking Difficulties */}
            <div className='question-section'>
                <label  className='question-tag'>Have you experienced difficulties booking flights online?</label>
                <div className='options'>
                <label><input type="radio" name="experiencedDifficulties" value="Yes" onChange={handleChange} /> Yes</label>
                <label><input type="radio" name="experiencedDifficulties" value="No" onChange={handleChange} /> No</label>
                </div>
                {errors.experiencedDifficulties && <span className='errorElement'>{errors.experiencedDifficulties}</span>}
            </div>
            
            {/* Description of Difficulties */}
            {formData.experiencedDifficulties === "Yes" && (
                <div >
                <label className='text-area'>
                    <p>If yes, please describe briefly: </p>
                    <textarea name="difficultiesDescription" value={formData.difficultiesDescription} onChange={handleChange}></textarea>
                </label>
                </div>
            )}

            </div>
        
        <div className="button-container">
            <button className={`blueButton`} onClick={handleSubmit}type="submit">Submit</button>
        </div>
        
        </div>
      );
}
