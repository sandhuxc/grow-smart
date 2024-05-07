import React from 'react'
import "./view_req_detail.scss";
import { useNavigate } from 'react-router-dom';
const View_req_detail = () => {
  const diet  = localStorage.getItem('DietReq')
  const navigate = useNavigate();
  
 // localStorage.removeItem('DietReq')
  return (
    
    <div>
      <body className='ppp_1_view'>
     
    <h1 className='Description_ppp'>Request Detail</h1>

      <main className='main_des1_parent'>
    <div class="container-reqdes1_parent">
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

    
    </div>
  </main>
  </body>
    </div>
  )
}

export default View_req_detail
