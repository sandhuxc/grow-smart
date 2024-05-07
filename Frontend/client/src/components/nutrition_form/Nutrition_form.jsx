import React from 'react';
import './NutritionForm.scss'
const Nutrition_form = () => {
  
  return (
    <div className="n_f">
    <div class="Nutrition_survey-form">
      <h2 className='head_nutrition'>Nutrition Patient Questionnaire</h2>
      <form className='nut_p_form'>
        <fieldset className='field_nutform'>
          <legend>Personal Information</legend>
          <div>
            <label className='form_nut_p' for="name">Child Name:</label>
            <input className='in_nut-p' type="text" id="name" name="name" required/>
          </div>
          <div>
            <label className='form_nut_p' for="age">Child Age:</label>
            <input className='in_nut-p' type="number" id="age" name="age" required/>
          </div>
          <div>
            <label className='form_nut_p' for="gender">Gender:</label>
            <select className='s_nut_p' id="gender" name="gender" required>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Medical Information</legend>
          <div>
            <label className='form_nut_p' for="height">Height (in cm):</label>
            <input className='in_nut-p' type="number" id="height" name="height" required/>
          </div>
          <div>
            <label className='form_nut_p' for="weight">Weight (in kg):</label>
            <input className='in_nut-p' type="number" id="weight" name="weight" required/>
          </div>
          <div>
            <label className='form_nut_p' for="medical-history">Do your child have any medical conditions?</label>
            <textarea className='txt_nut_p' id="medical-history" name="medical-history" rows="4"></textarea>
          </div>
          <div>
            <label className='form_nut_p' for="medications">Are your child currently taking any medications?</label>
            <textarea className='txt_nut_p' id="medications" name="medications" rows="4"></textarea>
          </div>
          <div>
            <label className='form_nut_p' for="physical-activity">What is your child level of physical activity?</label>
            <textarea className='txt_nut_p' id="physical-activity" name="physical-activity" rows="4"></textarea>
          </div>
          <div>
            <label className='form_nut_p' for="food-intake-time">Your child Food Intake Time:</label>
            <input className='in_nut-p' type="time" id="food-intake-time" name="food-intake-time"/>
          </div>
          <div>
            <label className='form_nut_p' for="food-intake">What is your child daily food intake like?</label>
            <textarea className='txt_nut_p' id="food-intake" name="food-intake" rows="4"></textarea>
          </div>
          <div>
            <label className='form_nut_p' for="fav-food">What is your child favorite food?</label>
            <textarea className='txt_nut_p' id="fav-food" name="fav-food" rows="4"></textarea>
          </div>
          <div>
          <label className='form_nut_p' for="meal-times">Typical Meal Times and Snacks:</label>
          <textarea className='txt_nut_p' id="meal-times" name="meal-times" rows="4"></textarea>
          </div>
          
        </fieldset>
        <button className="btn_Nut_P" type="submit"><a className="btn_Nut_P" href="/dietway">Submit</a></button>
      </form>
    </div> 
    </div>
  );
};

export default Nutrition_form;
