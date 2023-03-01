const Checkbox = ({ id, value, checked, onChange, name }) => {
  return (
    // <div></div>
    <input
      id={id}
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
      type="checkbox"
      className="block w-6 h-6 bg-white  accent-blue-500  !rounded"
    />
  );
};

export default Checkbox;
