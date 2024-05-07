import { useState, useEffect } from 'react';
import axios from 'axios';
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Guidelines from "../../components/guidelines/Guidelines"
import "./nutprofiles.scss";

const NutProfiles = () => {
  const [nutritionDetails, setNutritionDetails] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState({});

  useEffect(() => {
    // Retrieve the logged-in nutrition's ID from local storage
    const auth = localStorage.getItem("user");
    let nutritionId = JSON.parse(auth)._id;

    // Call the API to get the details of the logged-in nutrition
    axios.get(`http://localhost:8000/getNutritionDetails/${nutritionId}`)
      .then(res => {
        setNutritionDetails(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedDetails(prevState => ({ ...prevState, [name]: value }));
  }

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleCancelEdit = () => {
    setIsEditing(false);
  }

  const handleSave = () => {
    axios.put(`http://localhost:8000/editNutritionDetails/${nutritionDetails.nutritionId}`, editedDetails)
      .then(res => {
        setNutritionDetails(res.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.log(error);
      });
  }

  if (!nutritionDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div classname="settings" style={{ backgroundColor:'#fff' }}>
         <div className="nut_profile">
      <div className="nut_images">
        <img
          src="https://images.pexels.com/photos/8851929/pexels-photo-8851929.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="nut_cover"
        />
        <img
          src="https://images.pexels.com/photos/8845085/pexels-photo-8845085.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="nut_profilePic"
        />
      </div>
      <div className="nut_profileContainer">
        <div className="nut_uInfo">
          <div className="nut_left">
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
          <div className="nut_center">
            <span>{nutritionDetails.nutritionName}</span>
            <div className="nut_info">
              <div className="nut_item">
                <PlaceIcon />
                <span>Pakistan</span>
              </div>
              <div className="nut_item">
                <LanguageIcon />
                <span>browser</span>
              </div>
            </div>
          </div>
          <div className="nut_right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        </div>
    
      <div className="input-box-container">
        <label htmlFor="nutritionId">Nutrition ID</label>
        <input type="text" id="nutritionId" name="nutritionId" value={nutritionDetails.nutritionId} disabled />
      </div>
      <div className="input-box-container">
        <label htmlFor="nutritionName">Name</label>
        <input type="text" id="nutritionName" name="nutritionName" value={isEditing ? editedDetails.nutritionName || nutritionDetails.nutritionName : nutritionDetails.nutritionName} onChange={handleInputChange} disabled={!isEditing} />
      </div>
      <div className="input-box-container">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" value={isEditing ? editedDetails.email || nutritionDetails.email : nutritionDetails.email} onChange={handleInputChange} disabled={!isEditing} />
      </div>
      <div className="input-box-container">
        <label htmlFor="fee">Fee</label>
        <input type="text" id="fee" name="fee" value={isEditing ? editedDetails.fee || nutritionDetails.fee : nutritionDetails.fee } onChange={handleInputChange} disabled={!isEditing} />
      </div>
      <div className="input-box-container">
        <label htmlFor="Experience">Experience</label>
        <input type="text" id="Experience" name="Experience" value={isEditing ? editedDetails.Experience || nutritionDetails.Experience : nutritionDetails.Experience} onChange={handleInputChange} disabled={!isEditing} />
      </div>
      <div className="input-box-container">
        <label htmlFor="Education">Education</label>
        <input type="text" id="Education" name="Education" value={isEditing ? editedDetails.Education || nutritionDetails.Education
: nutritionDetails.Education} onChange={handleInputChange} disabled={!isEditing} />
</div>
<div></div>
<br/>
<br/>
<div className="button-container" style={{ display: 'flex', justifyContent: 'center'  }}>
  {!isEditing && <button style={{ borderRadius: '50px', margin: '0 10px', width: '30%',backgroundColor:`#98fb98` }} onClick={handleEdit}>Edit</button>}
  {isEditing && (
    <>
      <button style={{ borderRadius: '50px', margin: '0 10px', width: '50%',backgroundColor:`#98fb98` }} onClick={handleSave}>Save</button>
      <button style={{ borderRadius: '50px', margin: '0 10px', width: '50%',backgroundColor:`#98fb98` }} onClick={handleCancelEdit}>Cancel</button>
    </>
)}
</div>
</div>
</div>
);
};

export default NutProfiles;