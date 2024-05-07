import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import "./childData.scss";
const ChildData = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiData, setBmiData] = useState([]);
  const [bmi, setBmi] = useState([]);

  useEffect(() => {
    getBMI();
  }, []);
  const location = useLocation();
  const receivedData = location.state;
  const ChildData = localStorage.getItem("ChildData");
  console.log(receivedData);
  // const calculateBmi = () => {
  //   const bmi = weight / ((height / 100) ** 2);
  //   const date = new Date().toLocaleDateString();
  //   setBmiData([...bmiData, { bmi, date }]);
  // };
  const calculateBmi = async (event) => {
    // const id  = JSON.parse(ChildData)._id
    const id = receivedData._id;
    if(!height || !weight){
      alert("please enter data")
    }
    else{
    const BMI = weight / (height / 100) ** 2;
    const TrackDate = new Date().toLocaleDateString();

    let url = `http://localhost:8000/addGrowthDetails/${id}`;
    let result = await fetch(url, {
      method: "Post",
      body: JSON.stringify({ TrackDate, BMI }),
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
        "Content-type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    window.location.reload(true);
     alert("data added please reload")
    // event.preventDefault();
  };
}
  const getBMI = async () => {
    const id = receivedData._id;
    let url = `http://localhost:8000/getBMI/${id}`;
    let result = await fetch(url, {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("token")),
        "Content-type": "application/json",
      },
    });
    result = await result.json();
    setBmiData(result);
    console.log(bmiData);
  };
  const data = bmiData.map(({TrackDate, BMI }) => ({ name: TrackDate, BMI }));
  console.log(data,"daa5")

  return (
    <div>
      <body>
        <div className="wrapper2">
 
          <div
            className="center-card2"
            style={{ width: "60%", marginRight: "1%" }}
          >
            
              <h2>BMI GRAPH</h2>
              <CardContent>
                <LineChart width={800} height={800} data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="BMI"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </CardContent>
         
          </div>
          <div className="right-card2">
            <CardHeader className="tit" title="Saved BMIs" />
            <CardContent>
              {bmiData.map((data, index) => (
                <div key={index+1}>
                <span> data {index}: </span>
                  <span>{data.BMI}: </span>
                  <span>{data.TrackDate}</span>
                  
                </div>
              ))}
            </CardContent>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ChildData;
