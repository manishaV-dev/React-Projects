import { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import Input from "./components/Input";
import Users from "./components/Users";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error message dynamically when the user starts typing:
    setError(""); // Clear error dynamically
  };

  //  Create a Utility Function for Validation
  const vallidatePassword = (password, confirmPassword) => {
    if (password.length < 8) return "Password must be 8 characters long";
    if (password !== confirmPassword) return "Passwords must match";
    if (!/[!@#$%^&*()<>,."]/.test(password))
      return "Password must contain a special character";
    if (!/[A-Z]/.test(password))
      return "Password must contain an uppercase letter";

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = vallidatePassword(
      formData.password,
      formData.confirmPassword
    );

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setUsers((prev) => [...prev, formData]);
    setFormData({ username: "", email: "", password: "", confirmPassword: "" });

    toast.success("😀 Successfully Logged In", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 w-96">
          <h2 className="text-center mb-6 text-rose-500 text-lg md:text-2xl font-bold uppercase">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit}>
            <Input
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              placeholder="Manisha Varma"
              onChange={handleChange}
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="example@gmail.com"
              onChange={handleChange}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              placeholder="******"
              onChange={handleChange}
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="******"
              onChange={handleChange}
            />

            {error && (
              <p className="text-xs text-red-500 font-semibold">{error}</p>
            )}
            <div className="text-center mt-5">
              <button className="px-6 py-2 rounded-full bg-rose-400 hover:bg-rose-700 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>

      {users.map((user, index) => (
        <Users userData={user} key={index} />
      ))}
    </>
  );
}

export default App;
