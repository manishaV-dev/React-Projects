import { useState } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import Users from "./components/Users";

function App() {
  // 2 - Two way binding
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  // Handle onchange event
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // 1 - form Handling
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(`Name - ${username}, Email- ${email}`);

    if (formData.password.length < 8) {
      setError("Password must be 8 characters long");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password and confirm password must be same");
      return;
    }

    if (!/[!@#$%^&*()<>,."]/.test(formData.password)) {
      setError("Password must contain any special character");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain any capital letter");
      return;
    }

    // set previous data plus newly added data
    // setUsers([...users, { username, email, password, confirmPassword }]);

    setUsers((prevUser) => [
      ...prevUser,
      {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      },
    ]);

    // setError("");
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");

    setError("");
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    // alert("Form Submitted");
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
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 w-96">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <h2 className="text-center mb-6 text-rose-500 text-lg md:text-2xl font-bold uppercase">
              Create an Account
            </h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                <span className="block text-sm font-medium text-slate-700">
                  Username
                </span>
                <input
                  type="text"
                  value={formData.username}
                  name="username"
                  // onChange={(e) => setUsername(e.target.value)}
                  onChange={handleChange}
                  placeholder="Manisha Varma"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-500"
                />
              </label>

              <label className="block mb-4">
                <span className="block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-500"
                />
              </label>

              <label className="block mb-4">
                <span className="block text-sm font-medium text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="******"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-500"
                />
              </label>

              <label className="block mb-4">
                <span className="block text-sm font-medium text-slate-700">
                  Confirm Password
                </span>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="******"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-500"
                />
              </label>

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
        </div>

        <ToastContainer />
      </div>

      {users.map((user, index) => {
        return <Users userData={user} key={index} />;
      })}
    </>
  );
}

export default App;
