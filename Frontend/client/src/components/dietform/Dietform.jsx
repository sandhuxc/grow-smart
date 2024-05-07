import React, { useState } from 'react'
import "./dietform.scss";
import pic from "../../assets/im2.jpg";
const Dietform = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState()
    const [phoneNumber, setphoneNumber] = useState("")
    const [allergyDesc, setAllergyDesc] = useState("")
    const [dietDecription, setdietDecription] = useState("")
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const auth = localStorage.getItem("user");
    const nutritionId = JSON.parse(localStorage.getItem("NutritionId"))
    var today = new Date()
    var requestDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var requestTime = today.getHours()+":"+today.getMinutes()
    var parentId = JSON.parse(auth)._id
    var dataId = 0
    const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z]/gi, '');
    setName(value);
    if (!value) {
      setNameError("Please enter your name.");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9._%+-@]/g, '');
    setEmail(value);
    if (!value) {
      setEmailError("Please enter your email address.");
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("Enter valid email");
    }
  };
  const findchildChart = async () =>{
    try {
        let result = await fetch(`http://localhost:8000/getChildData/${name}/${parentId}`, {
          headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
          },
        });
        dataId = await result.json();
        alert(dataId)
        addDietRequest()
  }catch (err) {
    alert(err);
  }
}
    const addDietRequest = async () => {

        if (!name, !email, !age, !phoneNumber, !allergyDesc, !dietDecription) {
            alert("Please Enter All ")
        }
        else{
            try{

            let parentId = JSON.parse(auth)._id
            let parentName = JSON.parse(auth).name
            let result = await fetch("http://localhost:8000/addDietRequest", {
                method: "Post",
                body: JSON.stringify({ name, email, age, phoneNumber, allergyDesc , dietDecription ,parentId,requestDate,requestTime,dataId,parentName,nutritionId }), 
                headers: {
                    "Content-type": "application/json",
                    Authorization: JSON.parse(localStorage.getItem("token"))
                },
            })
            result = await result.json();
            console.log(result)
            alert("Data Submitted")
        }catch(err){
            alert(err)
        }

        }
    }
    return (
        
        <div className='req_form'>
            <div class="containe_req">
                <div className="content_req">
                    <div className="image-box">
                        <img className="im_req"
                            src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="" />
                    </div>
                    <form className='diet_req' action="#">
                        <div class="topic">Request DietForm</div>
                        <div class="input-box-diet">
                            <input class="re_in" type="text" name="" required value={name} onChange={handleNameChange}/>
                            <label>Enter name</label>
                        </div>
                        <div class="input-box-diet">
                            <input class="re_in" type="number" name="Age" required min={1} value={age} onChange={(e) => {const age = parseInt(e.target.value);
             if (age >= 0 && age <= 10) {
              setAge(age);
            }
}}/>
                            <label>Enter Age</label>
                        </div>
                        <div class="input-box-diet">
                            <input class="re_in" type="text" name="phone" required value={phoneNumber} onChange = {(e) => setphoneNumber(e.target.value.replace(/\D/g, ''))}/>
                            <label>Enter Phone Number</label>
                        </div>
                        <div class="input-box-diet">
                            <input class="re_in" type="text" name="email" required value={email} onChange={handleEmailChange} />
                    <label>Enter email</label>
                        </div>

                        <div class="message-box">
                            <textarea class="re_in" required value={allergyDesc} onChange = {(e) => setAllergyDesc(e.target.value.replace(/[^A-Za-z]/gi, ''))}></textarea>
                            <label>Any Food Allergy?</label>
                        </div>

                        <div class="message-box">
                            <textarea class="re_in" required value={dietDecription} onChange = {(e) => setdietDecription(e.target.value)}></textarea>
                            <label>Add Diet Description</label>
                        </div>
                        <div class="input-box-diet">
      
                            <input class="re_in" type="submit" value="Send Message" onClick={findchildChart} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dietform