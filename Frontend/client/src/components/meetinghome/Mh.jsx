import React, { useState } from "react";
import './mh.scss';
function Mh() {
  const [Food, setFood] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Weight, setWeight] = useState("");
  const [Calories, setCalories] = useState("");
  const [Carbs, setCarbs] = useState("");
  const [Category, setCategory] = useState("");

const addFoodItem = async () => {
  if(!Food || !Quantity || !Weight || !Calories || !Carbs || !Category){
    alert("Fill all fields")
  }
  else{
  try{
    let result = await fetch("http://localhost:8000/addFood", {
      method: "Post",
      body: JSON.stringify({
        Food,
        Quantity,
        Weight,
        Calories,
        Carbs,
        Category
      }),
      headers: {
        "Content-type": "application/json",
      //  Authorization: JSON.parse(localStorage.getItem("token")),
      },
    });

    const res = await result.json();
    window.location.reload(true);
  }catch{

  }
}
}
  

  return (
    <div className="card_nut_food">

      <div className="card_half_food">
        <img
          className="foodie_img_form"
          src="https://images.pexels.com/photos/4114144/pexels-photo-4114144.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="form_half_food">
        <div className="foodnut_form">
          <h2 className="food_nutform">Add Food Form </h2>
          <form  className="Nut_food-form">
            <label htmlFor="name">Food:</label>
            <input
              type="text"
              id="name"
              name="Food"
              value={Food}
              onChange={(e) => {
              
                setFood(e.target.value.replace(/[^A-Za-z]/gi, ''));
              }}
              className="food-form__input"
              required
            />
         
            
            <label htmlFor="fee">Quantity:</label>
            <input
              type="number"
              id="fee"
              name="fee"
              value={Quantity}
              onChange={(e) => {
            
                setQuantity(e.target.value);
              }}
              className="food-form__input"
              required
           
/>
  <label htmlFor="fee">Weight:</label>
            <input
              type="fee"
              id="fee"
              name="fee"
              value={Weight}
              onChange={(e) => {
              
                setWeight(e.target.value);
              }}
              className="food-form__input"
              required
            />
             <label htmlFor="fee">Calories:</label>
            <input
              type="fee"
              id="fee"
              name="fee"
              value={Calories}
              onChange={(e) => {
             
                setCalories(e.target.value);
              }}
              className="food-form__input"
              required
            />
             <label htmlFor="fee">Carbs:</label>
            <input
              type="fee"
              id="fee"
              name="fee"
              value={Carbs}
              onChange={(e) => {
             
                setCarbs(e.target.value);
              }}
              className="food-form__input"
              required
            />
          
          <label htmlFor="past">Category:</label>
            <input
              type="text"
              id="past"
              name="Experience"
              value={Category}
              onChange={(e) => {
              
                setCategory(e.target.value);
              }}
              className="food-form__input"
              required
            />
            <button
              type="submit"
              onClick={addFoodItem}
              className="Nut_food-form__submit-button "
             
            >
             
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Mh;