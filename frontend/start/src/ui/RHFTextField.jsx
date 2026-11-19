export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  errors,
  isRequired,
  validationSchema = {},
  className,
  disabled,
  ...rest
}) {
  const errorMessages = errors?.[name];
  const hasError = !!errorMessages;
  return (
    <div
      className={`textField relative ${hasError ? "textField--invalid" : ""}`}
    >
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        disabled={disabled}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {hasError && (
        <span className="text-red-600 absolute right-0 -bottom-5 text-xs">
          {errorMessages?.message}
        </span>
      )}
    </div>
  );
}
