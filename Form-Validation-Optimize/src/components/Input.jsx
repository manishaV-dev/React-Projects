const Input = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-slate-500"
      />
    </label>
  );
};

export default Input;
