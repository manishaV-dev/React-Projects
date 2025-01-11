import { useState } from "react";

function App() {
  // 2 - Two way binding
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // 1 - form Handling
  function handleSubmit(e) {
    e.preventDefault();
    // console.log(`Name - ${username}, Email- ${email}`);

    if (password.length < 8) {
      setError("Password must be 8 characters long");
      return;
    }

    if (password != confirmPassword) {
      setError("Password and confirm password must be same");
      return;
    }

    if (!/[!@#$%^&*()<>,."]/.test(password)) {
      setError("Password must contain any special character");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain any capital letter");
      return;
    }

    setError("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    alert("Form Submitted");
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
      </div>
    </>
  );
}

export default App;
