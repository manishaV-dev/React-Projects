import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("Submitting the form", data);
  };

  return (
    <>
      <h2>React-Hook-Form</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>First Name :</label>
            <input
              className={errors.firstName ? "error-input" : ""}
              {...register("firstName", {
                required: true,
                minLength: { value: 5, message: "Min Length 15" },
              })}
            />
            {errors.firstName && <p> {errors.firstName.message} </p>}
          </div>

          <div className="form-group">
            <label>Middle Name :</label>
            <input
              className={errors.middleName ? "error-input" : ""}
              {...register("middleName", { required: true })}
            />
          </div>

          <div className="form-group">
            <label>Last Name :</label>
            <input
              className={errors.lastName ? "error-input" : ""}
              {...register("lastName", { required: true })}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
