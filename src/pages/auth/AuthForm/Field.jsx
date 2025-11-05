const Field = (props) => {
  const { label, type, onChange, value } = props;
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="text-slate-500 pl-1">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 focused:outline-emerald-600 w-64"
      />
    </div>
  );
};

export default Field;
