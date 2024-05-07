import React, { useState } from 'react'
import "./track.scss";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
const Track = () => {
    const auth = localStorage.getItem("user");
    const [childName, setchildName] = useState("")
    const [Age, setAge] = useState()
    const [gender, setGender] = useState("")

    const [dathOfBirth, setDob] = useState("")
    
const addChildDetails = async(event) => {
     event.preventDefault();
    // Check if date of birth corresponds to entered age
    const today = new Date();
    const birthDate = new Date(dathOfBirth);
    let userAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      userAge--;
    }
    if (userAge !== Number(Age)) {
      alert("Please enter a valid date of birth that corresponds to your age.");
      return;
    }
    const parentId = JSON.parse(auth)._id
    let url = "http://localhost:8000/addchild"
    let result = await fetch(url,{
        method: "Post",
        body: JSON.stringify({childName,gender,Age,dathOfBirth,parentId}),
        headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
            "Content-type": "application/json",
        },
    })
    result = await result.json();
    event.preventDefault();
 
    alert(`The childName,childUsername,Age,dathOfBirth you entered was: ${childName},${Age},${dathOfBirth}`);

}
function handleDobChange(e) {
    const date = e.target.value;
    setDob(date);

    // Calculate age from date of birth
    const today = new Date();
    const birthDate = new Date(date);
    let userAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      userAge--;
    }
    setAge(userAge);
  }
return (

 
<div className='rq_form'>
    <div class="containe_req">
        <div className="content_req">
            <div className="image-box">
                <img className="im_req"
                    src="https://images.pexels.com/photos/12346668/pexels-photo-12346668.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="" />
            </div>
            <form action="#" onSubmit={addChildDetails}>
                <div class="topic">Add Child Details</div>
                <div class="input-box">
                    <input class="re_in" type="text"  required value={childName} onChange = {(e) => setchildName(e.target.value.replace(/[^A-Za-z]/g, ''))} />
                    <label>Enter Child name</label>
                </div>
            <div class="input-box">
             <input class="re_in" type="number" name="Age" required min={1} value={Age} onChange={(e) => {const age = parseInt(e.target.value);
             if (age >= 0 && age <= 10) {
              setAge(age);
            }
}}/>
           <label>Enter child Age:</label>
</div>
    <div class="input-box">
        <input class="re_in" type="text" name="Gender" required value={gender} onChange={(e) => {
  const genderInput = e.target.value.trim().toLowerCase();
  const regex = /^[a-zA-Z]+$/;
  if (genderInput === 'male' || genderInput === 'female' || regex.test(genderInput)) {
    setGender(genderInput);
  }
}}/>
<label>Enter child Gender </label>
        </div>
    <div class="input-box">
        <input class="re_in" type="date" name="" required value={dathOfBirth} onChange = {(e) => handleDobChange(e)}/>
    </div>
                
                <div class="input-box">
                            <input class="re_in" type="submit" value="Further Proceed" onClick={addChildDetails} />
                        </div>
                     
            </form>
            </div>
      </div>
    </div>
)
}

export default Track;