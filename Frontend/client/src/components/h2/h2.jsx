import React from 'react';
import './h2.scss';
import { useNavigate } from 'react-router-dom';

function H2() {
  const navigate = useNavigate();
  const diet = localStorage.getItem('DietReq');

  function moveToDietTable() {
    navigate('/diettable', {
      state: {
        dietId: JSON.parse(diet)._id,
      },
    });
  }

  return (
    <div className="new-slide_d">
      <div className="new-slide1_d">
        <div className="nut_content1_d">
          <div className="nut_txt1_d">
            <h1>In Which Way <span>You Want To Proceed</span></h1>
            <button className="nut_txt1_d2" onClick={moveToDietTable}>By Using Diet plan form</button>
            <br />
            <br />
            <a  className="nut_txt1_d2" href="/meeting">By Online Meeting</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default H2;
