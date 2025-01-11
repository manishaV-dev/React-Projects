function App() {
  // form Handling
  function handleSubmit(e) {
    e.preventDefault();
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
                  value="tbone"
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
                  value="example@gmail.com"
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
                  value="password"
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
                  value="password"
                  className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-500"
                />
              </label>

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
