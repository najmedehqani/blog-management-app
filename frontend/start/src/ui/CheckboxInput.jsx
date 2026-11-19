function CheckboxInput({ label, id, value, onChange,checked }) {
  return (
    <div className="flex items-center gap-x-3 text-secondary-600">
      <input
        type="checkbox"
        id={id}
        value={value}
        onChange={onChange}
        className="cursor-pointer form-checkbox rounded-[5px] border-none bg-secondary-200/80 w-4 h-4 checked:text-primary-900"
        checked={checked}
      />
      <label htmlFor={id} className="cursor-pointer">{label}</label>
    </div>
  );
}

export default CheckboxInput;
