import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import './nut.scss';
import Image1 from '../../assets/user.png';

function Nutri() {
  const [nprofiles, setnprofiles] = useState([]);
  const [currentNutrition, setcurrentNutrition] = useState("")
  const [dietplan, setDietplan] = useState("");
  var rating = 0
  var review = 0
  useEffect(() => {
    getProfiles();
  }, []);
  var check = false;
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");
  let userId = JSON.parse(auth)._id;
 
  const getPlan = async (nutId) => {
//    alert(" In diet plan")
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
      var reqId = result.dietRequestId
      if(result.error == "User has no dietRequest"){
        alert("You have to request DietPlan to proceed further")
      }else{
        let diet = await fetch(
          `http://localhost:8000/getDietRequest/${reqId}`,
          {
            headers: {
              // Authorization: JSON.parse(localStorage.getItem('token')),
            },
          }
        );
        diet = await diet.json();
        console.log(diet)
        if(diet.paid == "No"){
          const dataToSend = { nutritionId: nutId };
          navigate('/approve',{ state: dataToSend } )
        }else if(diet.paid == "Yes"){
          const dataToSend = { nutritionId: nutId };
          navigate('/viewDiet',{ state: dataToSend } )
        }
      }
    } catch (err) {

    }
  };

  function moveToViewDiet(nutri){
    localStorage.setItem('Nutrition', JSON.stringify(nutri));
    getPlan(nutri.nutritionId)
  }

  const getNutrition = async (nutId) => {
    try {
      let result = await fetch(`http://localhost:8000/nutrition/${nutId}`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token')),
        },
      });
      result = await result.json();


      console.log(result);
    } catch (err) {
      alert(err);
    }
  };
  const getProfiles = async () => {
    try {
      let result = await fetch(`http://localhost:8000/nutritionProfiles`, {
        headers: {
          Authorization: JSON.parse(localStorage.getItem('token')),
        },
      });
      result = await result.json();
      setnprofiles(result);
    //  console.log(result)
      getNutrition(result)
    } catch (err) {
      alert(err);
    }
  };

  const addNutritionId = (nutri) => {
    localStorage.setItem('NutritionId', JSON.stringify(nutri.nutritionId));


  };

  return (
    <div className="f2">
      <div className="bd">
        <div className="container-Nut flex-container">
          <div className="main-card">
            <div className="cards">
              {nprofiles.length > 0 && nprofiles.map((nutri) => (
                <div className="card">
                  <div className="content">
                    <div className="img">
                    <img src={`http://localhost:8000/${nutri.pic}`}  alt="" />
                    </div>
                    <div className="details">
                      <div className="name">{nutri.nutritionName} ({nutri.rating/nutri.reviews})</div>
                      <div className="job">Nutrition</div>
                      <div className="job">{nutri.fee}$ Fee</div>
                      {<div className="job1"> <a onClick={() => {moveToViewDiet(nutri)}}>View your DietPlan</a></div>
                      }
                    </div>
                    <p className="nutp">
                      Nutritionists give evidence-based information and advise on the effects of food and nutrition on the health and well-being of humans.
                    </p>
                    <div className="media-icons">
                      <a href="#">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </div>
                    <button className="btn draw-border" onClick={() => addNutritionId(nutri)}>
                      <a href="/addDiet">Request</a>
                    </button>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Nutri;