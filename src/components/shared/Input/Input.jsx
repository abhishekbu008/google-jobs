import { arrayToStr } from "../../../helpers/helpers";

function Input({
  value,
  onChange,
  iconLeft = null,
  type = "text",
  placeholder = "",
  className = "",
  style = {},
}) {
  const classNames = arrayToStr([
    "pl-4 flex items-center shadow-default",
    className,
  ]);

  const styles = {
    ...style,
  };

  return (
    <article className={classNames}>
      {iconLeft}
      <input
        className="outline-none pl-2 pr-6 overflow-hidden h-full w-full placeholder:text-grey-light placeholder:text-xs"
        style={styles}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </article>
  );
}

export default Input;
