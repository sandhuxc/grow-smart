import React from "react";

function Parentdet({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Email..."
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Full Name"
        value={formData.fname}
        onChange={(event) =>
          setFormData({ ...formData, fname: event.target.value })
        }
      />
     
    </div>
  );
}

export default Parentdet;