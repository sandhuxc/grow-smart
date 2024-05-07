import React, { useState } from 'react';
import './pending.scss'
function Pending() {

   return (
    <div className="waiting-page-container">
      <h1 className='approvehead'>Waiting for Approval</h1>
      <p>Your request has been sent and is awaiting approval.</p>
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default Pending
