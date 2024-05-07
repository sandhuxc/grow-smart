import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "./viewPayment.scss";

function ViewPayment() {
  const auth = localStorage.getItem("user");
  let totalPaymentAmount = 0
  console.log(JSON.parse(auth)._id);
  const navigate = useNavigate();
  // const history = useHistory()
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    getRequests();
  }, []);


  const getRequests = async () => {
    let ID = JSON.parse(auth)._id;
    let result = await fetch(`http://localhost:8000/viewPayment/${ID}`, {
      // headers:{
      //     Authorization: JSON.parse(localStorage.getItem('token'))
      // }
    });
    result = await result.json();
    setPayments(result);
    console.log(result);
  };
  const Logout = () => {
    localStorage.clear();
    navigate("/back");
  };
  return (
    <div>
      <body classname="h1_nn">
        <div class="container_nut1">
          <nav className="nut_nav1">
            <ul>
              <li>
                <div href="#" class="logo_nut1">
                  <img
                    className="n1_1"
                    src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                  <span className="nut-nav-item1">Nutrition</span>
                </div>
              </li>
              <li>
                <div className="nut-nav-item-wrapper">
                  <i class="fa fa-dashboard"></i>
                  <span class="nut-nav-item1">
                    <a href="/NutritionDashBoard">Dashboard</a>
                  </span>
                </div>
              </li>
              <li>
                <div className="nut-nav-item-wrapper">
                  <i class="fa fa-file-image-o"></i>
                  <span class="nut-nav-item1">
                    <a href="/guidelineshare">Guidelines</a>
                  </span>
                </div>
              </li>
              <li>
                <div className="nut-nav-item-wrapper">
                  <i class="fa fa-apple"></i>
                  <span class="nut-nav-item1">
                    <a>Manage Dietplan</a>
                  </span>
                </div>
              </li>
              <li>
                <div className="nut-nav-item-wrapper">
                  <i class="fa fa-comment"></i>
                  <span class="nut-nav-item1"> <a href="/addviewfeedback">Check Feedbacks</a></span>
                </div>
              </li>
              <li>
                <div className="nut-nav-item-wrapper">
                  <i class="fa fa-user-circle"></i>
                  <span class="nut-nav-item1">
                    <a href="/profile">Profile Settings</a>
                  </span>
                </div>
              </li>

              <li>
                <a href="/login" class="logout" onClick={Logout}>
                  <i class="fa fa-sign-out-alt"></i>
                  <span class="nut-nav-item">Log out</span>
                </a>
              </li>
            </ul>
          </nav>

          <section className="mainnut">
            <div class="main-top">
              <h1>Dashboard</h1>
              <i class="fas fa-user-cog"></i>
            </div>
            <div class="users-1">
              <div class="card-1">
                <img src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <h4>Manage Dietplan</h4>
                <p>For More Info</p>
                <a href="/NutdashVAR">
                  <button>Click Here</button>
                </a>
              </div>
              <div class="card-1">
                <img src="https://images.pexels.com/photos/8535572/pexels-photo-8535572.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <h4>Upload Guidelines</h4>
                <p>For more info</p>

                <a href="/guidelineshare">
                <button>Click Here</button>
                </a>
              </div>
              <div class="card-1">
                <img src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <h4>Profile Updation</h4>
                <p>For more info</p>
                <a href="/profile">
                <button>Update Profile</button> </a>
              </div>
              <div class="card-1">
                <img src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <h4>Related Feedbacks</h4>
                <p>For more info</p>

                <a href="/addviewfeedback">
                  <button>Check Feedbacks</button>
                </a>
              </div>
            </div>
            <section class="attendance">
              <div class="attendance-list">
                <h1>Payment History</h1>
                <table class="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Parent Name</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Nutrition Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((item, index) => {
                        totalPaymentAmount += item.paymentAmount; 
                        return (
                            
                          <tr>
                            <th>{index + 1}</th>
                            <th>{item.parentName} </th>
                            <th>{item.paymentDate}</th>
                            <th>{item.paymentAmount} </th>
                            <th>{JSON.parse(auth).name}</th>
                          </tr>
                        );
 
                    })}
<h1>Total Amount: {totalPaymentAmount}</h1>
                  </tbody>
                </table>
              </div>
            </section>
          </section>
        </div>
      </body>
    </div>
  );
}

export default ViewPayment;
