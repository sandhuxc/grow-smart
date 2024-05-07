import React from "react";
import "./diettable.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Diet_Table() {
  const [foodItems, setFoodItems] = useState([]);
  const [dietDecription, setdietDecription] = useState("");

  const diet = localStorage.getItem("DietReq");
  const dietRequestId = JSON.parse(diet)._id;
  var planId;
  const state = useLocation();
  var check = 0;
  useEffect(() => {
    getFoodItems();
  }, []);
  const updateDietReq = async () => {
    try {
      let result = await fetch(`http://localhost:8000/updateDietRequests/${dietRequestId}`, {
        headers: {
          "Content-type": "application/json",
        },
      });
      const res = await result.json();
    } catch (err) {
      console.log(err);
    }
  }
  const addDetails = async () => {
    try {
      let result = await fetch("http://localhost:8000/addFoodItem", {
        method: "Post",
        body: JSON.stringify({
          dietDecription,
          dietRequestId,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const res = await result.json();
      console.log(res._id);
      planId = res._id;
    } catch (err) {
      console.log(err);
    }
  };

  const addNewItem = async (item) => {
    var Food = item.Food;
    var Quantity = item.Quantity;
    var Weight = item.Weight;
    var Calories = item.Calories;
    var Carbs = item.Carbs;
    var Category = item.Category;

    try {
      let result = await fetch(`http://localhost:8000/addFoodItem/${planId}`, {
        method: "Post",
        body: JSON.stringify({
          Food,
          Quantity,
          Weight,
          Calories,
          Carbs,
          Category,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const res = await result.json();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  function addItem(item) {
    if (check == 0) {
      check += 1;
      addDetails();
      updateDietReq();
      //  addNewItem(item)
    } else {
      addNewItem(item);
      alert("Item Added")
    }
  }
  const getFoodItems = async () => {
    let result = await fetch("http://localhost:8000/getFoodItem", {
      headers: {
        //  Authorization: JSON.parse(localStorage.getItem('token'))
      },
    });
    result = await result.json();
    setFoodItems(result);
  };
  return (
    <div>
      <body>
        <div className="wrapper">
            <header className="head_table">
              <img
                src="https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </header>
            <div className="left-card">
          <h3>Add description</h3>
          <textarea className="textbox_des" type="text" placeholder="Add.." value={dietDecription} onChange={(e) => setdietDecription(e.target.value)} />
       </div>
<div className="center-card">
            <div className="card">
              <h2>Make Diet Plan</h2>
              <table className="diet_table">
                <thead>
                  <tr>
                    <th>Food</th>
                    <th>Quantity</th>
                    <th>Calories</th>
                    <th>Carbs</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Strawberries</td>
                    <td>1 cup</td>
                    <td>49</td>
                    <td>12 g</td>
                    <td>Fruit</td>
                    <td>
                      <button>Add</button>
                    </td>
                  </tr>
                  {foodItems.map((Item) => (
                    <tr>
                      <td>{Item.Food}</td>
                      <td>{Item.Quantity}</td>
                      <td>{Item.Calories}</td>
                      <td>{Item.Carbs}</td>
                      <td>{Item.Category}</td>
                      <td>
                        <button
                          onClick={() => {
                            addItem(Item);
                          }}
                        >
                          Add
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="right-card">
            <h3>No Food item available add item of your choice</h3>
            <a href="/addFood">
              <button>Add </button>
            </a>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Diet_Table;
