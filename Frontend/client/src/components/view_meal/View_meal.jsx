import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function View_meal() {
  const location = useLocation();
  const [dietplan, setDietplan] = useState([]);
  const [foodIds, setfoodIds] = useState([]);
  var dietId;
  useEffect(() => {
    getPlan();
  }, []);
  const diet  = localStorage.getItem('DietReq')
  let nutId = JSON.parse(diet).nutritionId;
  localStorage.setItem('nutId', nutId)
  let userId = JSON.parse(diet).parentId;
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
      console.log(result);
      dietId = result._id;
      getfoodItemsId();
    } catch (err) {}
  };
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
      console.log("FoodItems", result);
    } catch (err) {}
  };

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
          </div>
        </div>
      </div>
    </div>
  );
}
export default View_meal;
