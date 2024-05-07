import "./queryadd.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
const Queryadd = () => {
  const [queryContent, setqueryContent] = useState("");
  const [category, setCategory] = useState('')
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  //const [querydate , setDate] = useState()
  const auth = localStorage.getItem("user");
  let profilePic = JSON.parse(auth).profilePic;
  console.log(profilePic);

  //var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const navigate = useNavigate();
  const PostQuery = async () => {
    if (!queryContent) {
      alert("Fill query please");
    } else {
      let parentName = JSON.parse(auth).name;
      let parentId = JSON.parse(auth)._id;
      try {
        let result = await fetch("http://localhost:8000/addQuery", {
          method: "Post",
          body: JSON.stringify({
            queryContent,
            parentName,
            profilePic,
            category,
            parentId
          }),
          headers: {
            "Content-type": "application/json",
            Authorization: JSON.parse(localStorage.getItem("token")),
          },
        });
        const res = await result.json();
        if(category == "Parenting Style"){
          window.location.replace("/blog1");
        }else if(category == "Sleep Schedule"){
          window.location.replace("/blog2");
        }else if(category == "Diet Related"){
          window.location.replace("/blog3");
        }else if(category == "Activities"){
          window.location.replace("/blog4");
        }else if(category == "Toddler Development"){
          window.location.replace("/blog5");
        }else if(category == "Child Emotional Development"){
          window.location.replace("/blog6");
        }
        
      } catch (err) {
        console.log(err)
        alert("please add appropriate query");
      }
    }
  };
  return (
    <div className="s">
      <div className="container">
        <div className="top">
          <img src={`http://localhost:8000/${profilePic}`} alt="" />
          <input
            required
            type="text"
            placeholder={`Ask any Querie ${JSON.parse(auth).name}?`}
            value={queryContent}
            onChange={(e) => setqueryContent(e.target.value)}
          />
        </div>

        <hr />
        <div className="bottom">
          <div className="left">
          <select
            id="category"
            className="field_class" 
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Select an option</option>
            <option value="Parenting Style">Parenting Style</option>
            <option value="Sleep Schedule">Sleep Schedule</option>
            <option value="Diet Related">Diet Realted</option>
            <option value="Activities">Activities</option>
            <option value="Toddler Development">Toddler Development</option>
            <option value="Child Emotional Development">Child Emotional Development</option>
            <option value="Others">Others</option>
          </select>
          </div>
          <div className="right">
            <button onClick={PostQuery}>Post Query</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queryadd;
