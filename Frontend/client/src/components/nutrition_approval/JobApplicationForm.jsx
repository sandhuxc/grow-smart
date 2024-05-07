import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./JobApplicationForm.scss";

function JobApplicationForm() {
  const nutrition = localStorage.getItem("nutritionDetails");

  const [Experience, setExperience] = useState("");
  const [Education, setEducation] = useState("");
  const [Cnic, setCnic] = useState("");
  const [fee, setfee] = useState("");
  const [resume, setResume] = useState("");
  const [video, setVideo] = useState(null); 
  const approveStatus = "Pending";
  let nutritionId = JSON.parse(nutrition)._id;
  let nutritionName = JSON.parse(nutrition).name;
  let email = JSON.parse(nutrition).email;
  let pic = JSON.parse(nutrition).profilePic;
  const navigate = useNavigate();
  const SubmitDetails = async (event) => {
    const formData = new FormData();
    formData.append("nutritionId", nutritionId);
    formData.append("nutritionName", nutritionName);
    formData.append("email", email);
    formData.append("resume", resume);
    formData.append("video", video);
    formData.append("fee", fee);
    formData.append("Cnic", Cnic);
    formData.append("Education", Education);
    formData.append("Experience", Experience);
    formData.append("approveStatus", approveStatus);
    formData.append("pic", pic);

    console.log(formData);
    const cnicRegex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;
      // if (!cnicRegex.test(Cnic)) {
      //   alert("CNIC must be in the correct format (XXXXX-XXXXXXX-X).");
      //   return;
      // }
      if (isNaN(fee) || fee <= 0) {
        alert("Fee must be a valid number.");
        return;
      }
    try {
      const res = await axios.post(
        "http://localhost:8000/addDetails",
        formData
      );
      console.log(res);

      if (res.data.approveStatus == "Approved") {
        localStorage.setItem("user", JSON.stringify(res.data.result));
        localStorage.setItem("token", JSON.stringify(res.data.auth));
        navigate("/back");
      } else if (res.data.approveStatus == "Pending") {
        navigate("/approvealstatus");
      }
    } catch (err) {
      alert(err);
      console.log(err);
    }
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can submit the form data to a server here
  };
  const [selectedFile, setSelectedFile] = useState(null);
const handleFileSelect=(event)=> {
    const file = event.target.files[0];
    const fileType = file.type;
    if (fileType.startsWith('video/')) {
      setSelectedFile(file);
    } else {
      alert('Please select a video file.');
    }
  };
  
  const [selectedSkills, setSelectedSkills] = useState([]);

  return (
    <div className="card_nut_approve">
      <div className="card_half">
        <img
          className="nut_img_form"
          src="https://images.pexels.com/photos/2869318/pexels-photo-2869318.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="form_half">
        <div class="Nutrition_details_form">
          <h2 className="head_nutform">Nutrition Details Form </h2>
          <form onSubmit={handleSubmit} className="job-application-form">
            <label htmlFor="name">Education:</label>
            <input
              type="text"
              id="name"
              name="Education"
              value={Education}
              onChange={(e) => {
                setEducation(e.target.value);
              }}
              className="job-application-form__input"
              required
            />
            <label htmlFor="past">Past Experience:</label>
            <input
              type="text"
              id="past"
              name="Experience"
              value={Experience}
              onChange={(e) => {
                setExperience(e.target.value);
              }}
              className="job-application-form__input"
              required
            />
            <label htmlFor="cnic">CNIC:</label>
            <input
              type="text"
              id="cnic"
              name="Cnic"
              value={Cnic}
              onChange={(e) => {
                setCnic(e.target.value);
              }}
              className="job-application-form__input"
              required
            />
            <label htmlFor="fee">fee:</label>
            <input
              type="fee"
              id="fee"
              name="fee"
              value={fee}
              onChange={(e) => {
                setfee(e.target.value);
              }}
              className="job-application-form__input"
              required
            />

            <label htmlFor="resume">Upload Resume:</label>
            <input
              onChange={(e) => setResume(e.target.files[0])}
              type="file"
            ></input>

<label htmlFor="video">Upload Video:</label>
      <input htmlFor="video" type="file" accept="video/*" onChange={handleFileSelect} />


            <button
              type="submit"
              className="job-application-form__submit-button"
              onClick={SubmitDetails}
            >
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobApplicationForm;
