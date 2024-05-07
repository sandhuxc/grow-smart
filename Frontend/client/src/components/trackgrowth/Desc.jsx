import React from "react";

function Desc({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Child Weight..."
        value={formData.weight}
        onChange={(e) => {
          setFormData({ ...formData, weight: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Height..."
        value={formData.height}
        onChange={(e) => {
          setFormData({ ...formData, height: e.target.value });
        }}
      />
         <input
        type="text"
        placeholder="BMI..."
        value={formData.bmi}
        onChange={(e) => {
          setFormData({ ...formData, bmi: e.target.value });
        }}
      />
       <input
        type="text"
        placeholder="Head edge..."
        value={formData.hc}
        onChange={(e) => {
          setFormData({ ...formData, hc: e.target.value });
        }}
      />
          <input
        type="text"
        placeholder="Arm edge..."
        value={formData.ac}
        onChange={(e) => {
          setFormData({ ...formData, ac: e.target.value });
        }}
      />
    </div>
  );
}

export default Desc;