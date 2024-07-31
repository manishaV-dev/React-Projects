import React from "react";

function FormInputCapitalize() {
  return (
    <>
      <div className="form-conatainer">
        <h2>Info-Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full-Name</label>
            <input type="text" name="fullName" id="fullName" placeholder="Enter your full Name"/>
          </div>

          <div className="form-group">
            <label htmlFor="bloodGroup">Blood-Group</label>
            <input type="text" name="bloodGroup" id="bloodGroup" placeholder="Enter your Blood-Group" />
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
