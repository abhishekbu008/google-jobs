import { paddings } from "../../../constants/constants";
import { arrayToStr } from "../../../helpers/helpers";

function Button({
  children,
  active,
  disabled,
  onClick = () => {},
  size = "sm",
  className = "",
  style = {},
  type = "primary",
}) {
  const classNames = arrayToStr([
    "rounded",
    type === "primary" ? "bg-blue-medium " : "",
    type === "primary" ? "text-white" : "",
    active && !disabled ? "bg-blue-medium text-white" : "",
    disabled
      ? "opacity-80 cursor-not-allowed bg-blue-medium text-grey-light hover:bg-blue-medium hover:text-white"
      : "",
    paddings[size].px,
    paddings[size].py,
    className,
  ]);

  const styles = {
    ...style,
  };

  return (
    <button className={classNames} style={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
