import React, { useState } from "react";

function FormInputCapitalize() {
  const [formData, setFormData] = useState({ fullName: "", bloodGroup: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      if (name === "fullName") {
        const words = value.split(" ");
        const capitalizedName = words
          .map((word) =>
            word ? word[0]?.toUpperCase() + word.slice(1).toLowerCase() : ""
          )
          .join(" ");
        return { ...prevFormData, [name]: capitalizedName };
      } else if (name === "bloodGroup") {
        return { ...prevFormData, [name]: value.toUpperCase() };
      } else {
        return { ...prevFormData, [name]: value };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
      <div className="form-conatainer">
        <h2>Info-Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full-Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full Name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="bloodGroup">Blood-Group</label>
            <input
              type="text"
              name="bloodGroup"
              id="bloodGroup"
              placeholder="Enter your Blood-Group"
              value={formData.bloodGroup}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default FormInputCapitalize;
