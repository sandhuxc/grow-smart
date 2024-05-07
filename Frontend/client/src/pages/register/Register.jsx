import "./register.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useRef } from "react";


const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, SetRole] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [nameAlert, setNameAlert] = useState(false);
  const [phoneAlert, setPhoneAlert] = useState(false);
  const navigate = useNavigate(); // use to redirect to the page we want
  const [fieldCheck, setFieldCheck] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
    role: false,
  });

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/back");
    }
  });

  const regiterData = async () => {
    const newFieldCheck = { ...fieldCheck };
    let hasError = false;
    if (name.length < 4) {
      newFieldCheck.name = true;
      hasError = true;
    } else {
      newFieldCheck.name = false;
    }
    

    if (phone.length > 0 && phone.length !== 11) {
      newFieldCheck.phone = true;
      hasError = true;
    } else {
      newFieldCheck.phone = false;
    }
    if (!email.includes("@")) {
      newFieldCheck.email = true;
      hasError = true;
    } else {
      newFieldCheck.email = false;
    }
    if (password.length < 6) {
      newFieldCheck.password = true;
      hasError = true;
    } else {
      newFieldCheck.password = false;
    }
    if (!role) {
      newFieldCheck.role = true;
      hasError = true;
    } else {
      newFieldCheck.role = false;
    }
    setFieldCheck(newFieldCheck);

    if (hasError) {
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("role", role);
    formData.append("profilePic", profilePic);

    try {
      const res = await axios.post("http://localhost:8000/register", formData);
      console.log(res);

      if (res.data.result.role == "Parent") {
        localStorage.setItem("user", JSON.stringify(res.data.result));
        localStorage.setItem("token", JSON.stringify(res.data.auth));
        navigate("/back");
      } else if (res.data.result.role == "Nutrition") {
        localStorage.setItem("nutritionDetails", JSON.stringify(res.data.result));
        navigate("/nut_approve_form");
      }
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1 className="left_1">
            <span>Grow Smart</span>
          </h1>
          <p className="left_2">
            Grow Smart is to help parents interact with other parents to discuss
            their child’s daily routine activities, find diet tips and cover all
            parent concerns on a single platform.{" "}
          </p>
          <span className="left_3">Do you have an account?</span>
          <Link to="/login">
            <button className="left_4">Login</button>
          </Link>
      </div>
      <div className='right'>
       <h1 className='right_1'>Register</h1>
      <form  className='right_2'>
      <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value.replace(/[^A-Za-z]/gi, ''))} pattern="[A-Za-z]+" required ></input>
      {fieldCheck.name && <Alert severity="warning">Name Must be greater than 4 letters!</Alert>}
      <input type="tel" placeholder='PhoneNo' value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} pattern= "^(0|\+92)[0-9]{11}$" required></input>
        {fieldCheck.phone && <Alert severity="warning">phone number must be of 11 numbers!</Alert>}
        <input onChange={(e) => setProfilePic(e.target.files[0])} type = "file">Upload Profile Pic</input>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
        {fieldCheck.email && <Alert severity="warning">Please enter a valid email!</Alert>}
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
        {fieldCheck.password && <Alert severity="warning">Password must be at least 6 characters long!</Alert>}
        <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={role} onChange={(e) => SetRole("Parent")} ></input>
  <label class="form-check-label" for="inlineCheckbox1">Parent</label>
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value={role} onChange={(e) => SetRole("Nutrition")} ></input>
  <label class="form-check-label" for="inlineCheckbox1">Nutrition</label>


</div>

<button className='right_3' onClick={regiterData} type="button">Register</button>
      </form>
      </div>

           
        </div>
      </div>
  
  );
};
export default Register;
