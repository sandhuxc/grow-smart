import React from 'react'
import { useState } from 'react';
import Parentdet from "./Parentdet";
import Childdet from "./Childdet";
import Desc from "./Desc";

function Trackgrowth() {
  
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      email: "",
      fname: "",
      Name: "",
      Age: "",
      dob: "",
      weight: "",
      height: "",
      bmi:"",
      hc:"",
      ac:"",
    });
  
    const FormTitles = ["Parents Detail", "Child Details", "Growth Detail"];
  
    const PageDisplay = () => {
      if (page === 0) {
        return <Parentdet formData={formData} setFormData={setFormData} />;
      } else if (page === 1) {
        return <Childdet formData={formData} setFormData={setFormData} />;
      } else {
        return <Desc formData={formData} setFormData={setFormData} />;
      }
    };
  
    return (
        
      <div className="form">
        
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="a1">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>

          </div>
        </div>
        <div class = "contact-footer">
      
      </div>
      </div>
    );
    
  }
export default Trackgrowth
