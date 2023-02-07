import { arrayToStr } from "../../helpers/helpers";

function InputLabel({
  type,
  name,
  value,
  label,
  onChange = {},
  className = "",
  style = {},
  ...restProps
}) {
  const classNames = arrayToStr(["flex items-center font-poppins", className]);

  const styles = {
    ...style,
  };

  return (
    <article className={classNames} style={styles}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="w-5 h-5 rounded-lg"
        {...restProps}
      />
      <label
        htmlFor={name}
        onClick={(e) => {
          e.preventDefault();
          onChange({ target: { value } });
        }}
        className="text-blue-light font-medium text-sm ml-3"
      >
        {label}
      </label>
    </article>
  );
}

export default InputLabel;
