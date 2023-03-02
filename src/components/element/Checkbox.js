const Checkbox = ({ id, value, checked, onChange, name }) => {
  return (
    <input
      id={id}
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
      type="checkbox"
      className="block w-5 h-5 !p-2 bg-white  !rounded-lg cursor-pointer text-xs"
    />
  );
};

export default Checkbox;
