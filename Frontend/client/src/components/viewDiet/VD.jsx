import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./vd.scss";
function VD() {
  const location = useLocation();
  const [dietplan, setDietplan] = useState([]);
  const [foodIds, setfoodIds] = useState([]);
  var [alreadySubmitted, setAlreadySubmitted] = useState(false);
  var [dietplanID , setdietplanId] = useState('')
  var dietId;
  
  useEffect(() => {
    getPlan();
    checkFeedBack();
  }, []);
  const receivedData = location.state;
  console.log(receivedData.nutritionId);
  let nutId = receivedData.nutritionId;
  const auth = localStorage.getItem("user");
  localStorage.setItem('nutId', nutId)
  const dataFeedback = { dietId: dietplan._id };
  let userId = JSON.parse(auth)._id;

  const navigate = useNavigate();

  const getPlan = async () => {
    try {
      let result = await fetch(
        `http://localhost:8000/getDietPlan/${userId}/${nutId}`,
        {
          headers: {
            // Authorization: JSON.parse(localStorage.getItem('token')),
          },
        }
      );
      result = await result.json();
      setDietplan(result);
      setdietplanId(result._id)
      console.log("dplan",result);
      dietId = result._id;
      getfoodItemsId();
  
    } catch (err) {}
  };
  const checkFeedBack = async () =>{

    console.log("dietplanId :", dietplanID)
    try{
      let result = await fetch(
        `http://localhost:8000/checkFeedBack/${dietplanID}/${nutId}`,
        {
          headers: {
             Authorization: JSON.parse(localStorage.getItem('token')),
          },
        }
      );
      result = await result.json();
      console.log("dietplan :", dietplanID)
      console.log("result: " , result)
      if(result[0].dietRevId == dietplanID){
        alert("true")
        setAlreadySubmitted(true)
      }else{
        alert("false")
        setAlreadySubmitted(false)
      }
    }catch(err){
      console.log(err)
    }
  }
  const getfoodItemsId = async () => {
    try {
      let result = await fetch(
        `http://localhost:8000/getgetfoodItemsId/${dietId}`,
        {
          headers: {
            // Authorization: JSON.parse(localStorage.getItem('token')),
          },
        }
      );
      result = await result.json();
      setfoodIds(result);
      //console.log("FoodItems", result);
    } catch (err) {}
  };
  function GiveFeedBack(){
    console.log("In vd: ",dataFeedback.dietId )
    navigate('/add',{ state: dataFeedback } )
  }
  return (
    <div>
      <div className="wrapper1">
        <div className="center-card1">
          <header className="head_table1">
            <img
              src="https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </header>
          <h1>{dietplan.dietDecription}</h1>
          <div className="card1">
            <h2>View My Diet Plan</h2>
            <table className="diet_table1">
              <thead>
                <tr>
                  <th>Food</th>
                  <th>Quantity</th>
                  <th>Calories</th>
                  <th>Carbs</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {foodIds.length > 0 &&
                  foodIds.map((Item) => (
                    <tr>
                      <td>{Item.Food}</td>
                      <td>{Item.Quantity}</td>
                      <td>{Item.Calories}</td>
                      <td>{Item.Carbs}</td>
                      <td>{Item.Category}</td>
                    </tr>
                  ))}
              </tbody>
              
            </table>
            {foodIds.length > 0 && !alreadySubmitted && <button onClick={GiveFeedBack} type="button" className="h21"> GiveFeedBack</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VD;
