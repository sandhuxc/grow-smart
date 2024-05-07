import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import "./nutreq.scss";
function Nut_req() {
     const auth = localStorage.getItem("user");
  console.log(JSON.parse(auth)._id);
  const navigate = useNavigate();
  // const history = useHistory()
  const [requests, setRequests] = useState([]);
  useEffect(() => {
    getRequests();
  }, []);
    function ViewDiet(item) {
    console.log(item);
    localStorage.setItem("DietReq", JSON.stringify(item));

    navigate("/view-req-des");
  }
  function ViewPlan(item) {
    console.log(item);
    localStorage.setItem("DietReq", JSON.stringify(item));

    navigate("/Nutritiondietplan");
  }
  const getRequests = async () => {
    let ID = JSON.parse(auth)._id;
    let result = await fetch(`http://localhost:8000/getDietRequests/${ID}`, {
      // headers:{
      //     Authorization: JSON.parse(localStorage.getItem('token'))
      // }
    });
    result = await result.json();
    setRequests(result);
    console.log(result);
  };
     return (
    <div>
      <body classname="nut_re_list">
        <div class="nut1_req_container"></div>
        <section class="all_req_nut">
              <div class="allreq-list">
                <h1>list of all Diet Plans</h1>
                <table class="table_req">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Parent Name</th>
                      <th>Child Name</th>
                      <th>Date</th>
                      <th>Request Time</th>
                      <th>Receive Diet Req</th>
                      <th>Given Diet plan</th>

                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((item, index) => {
                      if (item.approved === "Yes") {
                        return (
                          <tr>
                            <th>{index + 1}</th>
                            <th>{item.parentName} </th>
                            <th>{item.name}</th>
                            <th>{item.requestDate} </th>
                            <th>{item.requestTime}</th>
                            <td>
                              <button onClick={() => ViewDiet(item)}>
                                View
                              </button>
                            </td>
                            <td>
                              <button onClick={() => ViewPlan(item)}>
                                View
                              </button>
                            </td>
                          </tr>
                        );
                      } else {
                        return null;
                      }
                    })}

                    <tr>
                      <td>06</td>
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
export default Nut_req;