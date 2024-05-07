import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ProfilePosts from "../../components/profilePosts/profilePost";
import ProfileQueries from "../../components/profileQueries/profileQueries"
import { useState,useEffect } from "react";
const Profile = () => {
  const User = localStorage.getItem("user");
  let parentId = JSON.parse(User)._id
  let Name = JSON.parse(User).name
  let pic = JSON.parse(User).profilePic
  let rating = JSON.parse(User).rating
  let review = JSON.parse(User).reviews

  let rate = rating/review
  console.log("RAtug: " , rating , review)

  const [Childs, setChilds] = useState([])
  useEffect(()=>{
    getChilds()

}, [])
const getChilds = async ()=>{
  
  let result = await fetch(`http://localhost:8000/getChilds/${parentId}`,{
      headers:{
          Authorization: JSON.parse(localStorage.getItem('token'))
      }
  });
  result = await result.json();

  console.log(result)
   setChilds(result)
}
  return (
   
    <div className="profile">
      
      <div className="imagespic">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="coverpic"
        />
        <img
          src={`http://localhost:8000/${pic}`}
          alt=""
          className="profilePic"
        />
       
      </div>
      <div className="profileContainer">
        <div className="uInfopic">
          <div className="leftpic">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center_1">
            <span className="a1">{Name} ({rate.toFixed(2)})</span>
            <div className="infopic">
              <div className="itempic">
                <span>{review} People has rate your Comments</span>
              </div>
            </div>
          </div>
          <div className="rightpic">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <ProfilePosts />
      <ProfileQueries/>
      </div>
    </div>
  );
};

export default Profile;