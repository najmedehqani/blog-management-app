function RHFSelect({
  label,
  name,
  register,
  options,
  isRequired,
  disabled,
  placeholder,
  errors,
}) {
  const errorMessages = errors?.[name];
  const hasError = !!errorMessages;
  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </label>
      <select
        {...register(name)}
        id={name}
        className="textField__input"
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasError && (
        <span className="text-red-600 absolute right-0 -bottom-5 text-xs">
          {errorMessages?.message}
        </span>
      )}
    </div>
  );
}
export default RHFSelect;
