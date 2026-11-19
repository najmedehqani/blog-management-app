import Button from "./Button";
import clsx from "clsx";
import SvgLoaderComponent from "./SVGLoaderComponent";

function SubmitButton({
  children,
  className,
  variant = "primary",
  isSubmitting,
  ...rest
}) {
  return (
    <Button
      className={clsx(
        "flex items-center justify-center gap-x-4  w-full",
        className,
      )}
      variant={variant}
      {...rest}
      type="submit"
      disabled={isSubmitting}
      aria-busy={isSubmitting}
    >
      {children}
      {isSubmitting && <SvgLoaderComponent />}
    </Button>
  );
}
export default SubmitButton;
