import React from 'react'
import "./parentdescription.scss";
import { useNavigate } from 'react-router-dom';
const Parentdiscription = () => {
  const diet  = localStorage.getItem('DietReq')
  const navigate = useNavigate();
  function moveToDietTable(){
    navigate('/diettable', {
      state:{
        dietId: JSON.parse(diet)._id
      }
    })
  }
 // localStorage.removeItem('DietReq')
  return (
    
    <div>
      <body className='ppp_1'>
     <header className='Description'>
    <h1>View Parent Request</h1>
  </header>
      <main className='main_des1'>
    <div class="container-reqdes1">
      <div class="image-desreq1">
        <img class="image-desreq2" src="https://images.pexels.com/photos/6551090/pexels-photo-6551090.jpeg?auto=compress&cs=tinysrgb&w=600"/>
      </div>

      <table className='t-req1 rounded'>
        <tr>
          <th>Name:</th>
          <td>{JSON.parse(diet).name}</td>
        </tr>
        <tr>
          <th>Parent Email:</th>
          <td>{JSON.parse(diet).email}</td>
        </tr>
        <tr>
          <th>Child Age:</th>
          <td>{JSON.parse(diet).age}</td>
        </tr>
        <tr>
          <th>Parent phone number:</th>
          <td>{JSON.parse(diet).phoneNumber}</td>
        </tr>
        <tr>
          <th>Diet Description:</th>
          <td>{JSON.parse(diet).dietDecription}</td>
        </tr>
        <tr>
          <th>Allergy Description:</th>
          <td>{JSON.parse(diet).allergyDesc}</td>
        </tr>
      </table>

      <div class="button-container-req1">
        <button class="submit-button-req1"><a class="submit-button-req1" href="/dietway">Give DietPlan</a></button>
      </div>
    </div>
  </main>
  </body>
    </div>
  )
}

export default Parentdiscription
