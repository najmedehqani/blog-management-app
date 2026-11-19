import clsx from "clsx";
const btnType = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  danger: "btn--danger",
};

function Button({
  children,
  onClick,
  variant = "primary",
  className,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={clsx("btn", btnType[variant] ?? btnType.primary, className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
