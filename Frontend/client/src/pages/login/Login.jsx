import "./login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useRef } from "react";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const navigate = useNavigate();

  const [credentialError, setcredentialError] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const checkNutritionStatus = async (nutId,res) => {
    try {
      let result = await fetch(
        `http://localhost:8000/getNutritionDetails/${nutId}`,
        {}
      );
      result = await result.json();
      console.log(result);
      if (result.approveStatus == "Pending") {
        alert("Application is Pending");
        navigate("/back");
      } else if (result.approveStatus == "Rejected") {
        alert("Application is rejected");
      } else if (result.approveStatus == "Approved") {
        localStorage.setItem("user", JSON.stringify(res.User));
        localStorage.setItem("token", JSON.stringify(res.auth));
        navigate("/NutritionDashBoard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const checkLogin = async (event) => {
    event.preventDefault();

    try {
      let result = await fetch("http://localhost:8000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      result = await result.json();
      // alert(result.User.name, " Logged-In");

      if (email != result.User.email) {
        //  credentialError(true);
        alert("Incorrect Password andddd Email");
        setIsInvalid(true);
        console.log(result);
      } else {
        console.log(result);
        setIsInvalid(false);
        if (result.User.role == "Parent") {
          localStorage.setItem("user", JSON.stringify(result.User));
          localStorage.setItem("token", JSON.stringify(result.auth));
          navigate("/");
        } else if (result.User.role == "Nutrition") {
          checkNutritionStatus(result.User._id, result);
        }
      }
    } catch (err) {
      setIsInvalid(true);
      // alert("Incorrect Email or Password")
    }
  };
  return (
    <div className="login1">
    <div className="login">
      <div className="card">
        <div className="left">
          <h1 className="h18">
            <span>Grow Smart</span>
          </h1>
          <p className="h19">
            Grow Smart is to help parents interact with other parents to discuss
            their child’s daily routine activities, find diet tips and cover all
            parent concerns on a single platform.{" "}
          </p>
          <span className="h17">Don't you have an account?</span>
          <Link to="/register">
            <button className="h20">Register</button>
          </Link>
        </div>
        <div className="right">
          <h1 className="h11">Login</h1>
          <form onSubmit={checkLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            {credentialError || !email || (
              <span className="invalidInput"></span>
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {credentialError || <span className="invalidInput"></span>}
            <button onClick={checkLogin} type="button" className="h21">
              Login{" "}
            </button>
            {isInvalid && <p>Incorrect email or password</p>}
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
