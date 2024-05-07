import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory, useNavigate } from "react-router-dom";
import "./parent_view.scss";
function Parent_history_view() {
    const auth = localStorage.getItem("user");
      const [dietRequests, setDietRequests] = useState([]);

  const navigate = useNavigate();
  // const history = useHistory()
  const [requests, setRequests] = useState([]);
  useEffect(() => {
   fetchDietRequests();
  }, []);
    function ViewDiet(item) {
    console.log(item);
    localStorage.setItem("DietReq", JSON.stringify(item));

    navigate("/ViewReqParent");
  }
  function ViewPlan(item) {
    console.log(item);
    localStorage.setItem("DietReq", JSON.stringify(item));

    navigate("/view_diet_meal");
  }
 const fetchDietRequests = async () => {
      try {
        const parentId = JSON.parse(auth)._id; // Replace with the actual parent ID

        const response = await axios.get(`http://localhost:8000/diet-requests/${parentId}`);
        setDietRequests(response.data);
      } catch (error) {
        console.error(error);
      }
    };

     return (
    <div>
      <body classname="parent_re_list">
        <div class="parent_req_container"></div>
        <section class="all_req_parent">
              <div class="allreq_parent-list">
                <h1>Diet Requests History</h1>
                <table class="parent_table_req">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Child Name</th>
                      <th>Date</th>
                      <th>Request Time</th>
                      <th>Diet Request</th>
                      <th>View Diet plan</th>

                    </tr>
                  </thead>
                  <tbody>
                   
                     {dietRequests.map((dietRequest, index) => (
                       
                          <tr>
                            <th>{index + 1} </th>
                            <th>{dietRequest.name}</th>
                            <th>{dietRequest.requestDate} </th>
                            <th>{dietRequest.requestTime}</th>
                            <td>
                              <button onClick={() => ViewDiet(dietRequest)}>
                                View
                              </button>
                            </td>
                            <td>
                              <button onClick={() => ViewPlan(dietRequest)}>
                                View
                              </button>
                            </td>
                          </tr>
                          ))}
                     
                       
                    

                    <tr>
                      <td>123</td>
                      <td>Tahira khan</td>
                      <td>aiza</td>
                      <td>03-24-22</td>
                      <td>9:00AM</td>
                      <td>
                        <button onClick={ViewDiet}>View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
      </body>
    </div>
      );
}
export default Parent_history_view;