import React from "react";

function Childdet({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Full Name..."
        value={formData.Name}
        onChange={(e) => {
          setFormData({ ...formData,Name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Age..."
        value={formData.Age}
        onChange={(e) => {
          setFormData({ ...formData, Age: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Date Of Birth..."
        value={formData.dob}
        onChange={(e) => {
          setFormData({ ...formData, dob: e.target.value });
        }}
      />
    </div>
  );
}

export default Childdet;