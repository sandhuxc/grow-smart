import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
const Track1 = (child) => {
    const auth = localStorage.getItem("user");
    const ChildData = localStorage.getItem("ChildData");
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [headCircum, setheadCircum] = useState(0)
    const [TrackDate, setDob] = useState("")
    
    const BMI = 23;

    console.log(child)
const addChildDetails = async(event) => {
    const parentId = JSON.parse(auth)._id
    const id  = JSON.parse(ChildData)._id
    let url = `http://localhost:8000/addGrowthDetails/${id}`
    let result = await fetch(url,{
        method: "Post",
        body: JSON.stringify({height,weight,headCircum,TrackDate,BMI}),
        headers: {
            Authorization: JSON.parse(localStorage.getItem('token')),
            "Content-type": "application/json",
        },
    })
    result = await result.json();
    console.log(result)
    event.preventDefault();
}
const data = {
   
   labels: ['Child1'],
   datasets: [
    {
      label: ['Height1'],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
      hoverBorderColor: 'rgba(255, 99, 132, 1)',
      data: [4,5,7,4,3,5], // replace height with the actual height value
    },
    {
      label: ['Weight'],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
      hoverBorderColor: 'rgba(54, 162, 235, 1)',
      data: [6,7,8], // replace weight with the actual weight value
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
return (

 
<div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '40%', marginRight: '20px' }}>
       
      <br/>
      <br/>
      <br/>
            <form action="#" onSubmit={addChildDetails}>
           
                <div class="input-box">
                <label>Enter child Height (in cm):</label>
                <br/>
                    <input class="re_in" type="number" name="Height" required value={height} onChange = {(e) => setHeight(e.target.value)}/>
                    
                </div>
                <div class="input-box">
                <label>Enter child Weight (in kg):</label>
                <br/>
                    <input class="re_in" type="number" name="Weight" required value={weight} onChange = {(e) => setWeight(e.target.value)}/>
                    
                </div>
                <div class="input-box">
                <label>Enter child HeadCircumference (in cm):</label>
                <br/>
                    <input class="re_in" type="number" name="headCircum" required value={headCircum} onChange = {(e) => setheadCircum(e.target.value)}/>
                   
                </div>
                <div class="input-box">
                <label>Enter child Date of Birth:</label>
                <br/>
                    <input class="re_in" type="date" name="" required value={TrackDate} onChange = {(e) => setDob(e.target.value)}/>
                </div>
                <br/>
                <div class="input-box">
                            <input class="re_in" type="submit" value="Further Proceed" onClick={addChildDetails} />
                        </div>
                     
            </form>
            </div>
      <div style={{ width: '60%' }}>
        <h2>Track Child Health Graph</h2>
        <Bar data={data} options={options} />
      </div>
    </div>
)
}

export default Track1