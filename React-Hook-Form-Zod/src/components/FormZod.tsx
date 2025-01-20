// import {FormData} from '../types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormZod = () => {
  return (
    <>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label>First Name :</label>
            <input className="" />
            {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
          </div>

          <div className="form-group">
            <label>Last Name :</label>
            <input className="" />
            {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input className="" />
            {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
          </div>

          <div className="form-group">
            <label>Age :</label>
            <input className="" type="number" />
            {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select name="gender">
              <option value="">Select Gender...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
          </div>

          <div className="form-group">
            <label>Address :</label>
            <input className="mb-1" placeholder="city" />
            {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
            <input className="" placeholder="state" />
          </div>

          <div className="form-group">
            <label>Start Date :</label>
            <DatePicker />
          </div>

          <div className="form-group">
            <label>Hobbies :</label>
            <div className="hobby-box">
              <input className="mb-1" placeholder="Hobby Name" />
              {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
              <button className="remove-btn">Remove</button>
            </div>
            <button>Add</button>
          </div>

          <div className="form-group">
            <label htmlFor="sub">Subscribe to Newsletter:</label>
            <input className="" type="checkbox" id="sub" name="subscribe" />
            {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
          </div>

          <div className="form-group">
            <label>Referral Source</label>
            <input className="" placeholder="Referral Source" />
            {/* {errors.firstName && <p> {errors.firstName.message} </p>} */}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormZod;
