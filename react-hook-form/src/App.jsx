import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h2>React-Hook-Form</h2>
      <div className="form-container">
        <form>
          <div  className="form-group">
            <label>First Name :</label>
            <input />
          </div>

          <div  className="form-group">
            <label>Middle Name :</label>
            <input />
          </div>

          <div className="form-group">
            <label>Last Name :</label>
            <input />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
