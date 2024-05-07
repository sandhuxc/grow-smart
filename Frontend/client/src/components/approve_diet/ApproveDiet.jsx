import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import "./approvediet.scss";
import axios from 'axios'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import StripeCheckout from "react-stripe-checkout"

function ApproveDiet() {
  const location = useLocation();
  const navigate = useNavigate();
  const [dietRequest, setDietRequest] = useState("");
  useEffect(() => {
    getRequest();
  }, []);
  const receivedData = location.state;
  console.log(receivedData.nutritionId);
  let nutId = receivedData.nutritionId;
  let NutritionId = receivedData.nutritionId;
  const auth = localStorage.getItem("user");
  const Nutrition = localStorage.getItem("Nutrition");
  let paymentAmount = JSON.parse(Nutrition).fee*10
  const dataToSend = { nutritionId: nutId };
  let userId = JSON.parse(auth)._id;
  let parentId = userId
  let parentName = JSON.parse(auth).name;
  const currentDate = new Date();
  const paymentDate = currentDate.toDateString();
   toast.configure()
  const [nut]=useState({
    name:"amna",
    payment:paymentAmount,
    description:"this is simple diet plan"
  })
  
  const getRequest = async () => {
    try {
      let result = await fetch(
        `http://localhost:8000/getDietDietRequest/${userId}/${nutId}`,
        {
          headers: {
            // Authorization: JSON.parse(localStorage.getItem('token')),
          },
        }
      );
      result = await result.json();
      setDietRequest(result);
      console.log(result);
    } catch (err) {}
  };

  const NutritionPayment = async () => {
    try {
      let result = await fetch("http://localhost:8000/payment", {
        method: "Post",
        body: JSON.stringify({
          NutritionId,
          parentName,
          parentId,
          paymentAmount,
          paymentDate
 
        }),
        headers: {
          "Content-type": "application/json",
          Authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      result = await result.json();
      console.log(result);
    } catch (err) {}
  };

  const changeStatustoPaid = async () =>{
      try {
        let result = await fetch(`http://localhost:8000/updatePaidStatus/${dietRequest._id}`, {
          headers: {
            "Content-type": "application/json",
          },
        });
        const res = await result.json();
      } catch (err) {
        console.log(err);
      }
    
  }
  async function handleToken(token,address){
    const response=await axios.post('http://localhost:8000/checkout',{token,nut})
    console.log(response.status);
    if(response.status===200){
     
      toast("Transaction successfully completed",{type:'success'})
      console.log(dietRequest._id)
      changeStatustoPaid()
      NutritionPayment()
        navigate('/viewDiet', { state: dataToSend })
    }
    else{
      
      toast("Transaction not completed",{type:'error'})
    }
   
  }
  return (
    <div>
    
      <main className='main_des'>
    <div class="container-reqdes">
      <div class="image-desreq">
        <img src="https://images.pexels.com/photos/5692269/pexels-photo-5692269.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </div>

      <table className='t-req'>
        <tr>
          <th>Name:</th>
          <td>{dietRequest.name}</td>
        </tr>
        <tr>
          <th>Parent Email:</th>
          <td>{dietRequest.email}</td>
        </tr>
        <tr>
          <th>Child Age:</th>
          <td>{dietRequest.age}</td>
        </tr>
        <tr>
          <th>Parent phone number:</th>
          <td>{dietRequest.phoneNumber}</td>
        </tr>
        <tr>
          <th>Diet Description:</th>
          <td>{dietRequest.dietDecription}</td>
        </tr>
        <tr>
          <th>Allergy Description:</th>
          <td>{dietRequest.allergyDesc}</td>
        </tr>
        <tr>
          <th>Approve Status:</th>
          <td>{dietRequest.approved}</td>
        </tr>
      </table>

      <div class="button-container-req14">
        <StripeCheckout class="submit-button-req14"
         stripeKey='pk_test_51Mj9rnCgjKRoygoHhQzgKAXXU5ToEYbFYrHeQ1Gfpi7e7Q6Ge8SQfIwfyIrs67zOficW9BBcWPAf9LfaU8h435KA00P47sbmoj'
         token={handleToken}
         amount={JSON.parse(Nutrition).fee*10}
         name={JSON.parse(Nutrition).nutritionName}
         billingAddress
         shippingAddress
         />
      </div>
    </div>
  </main>
    </div>
  )
}

export default ApproveDiet
