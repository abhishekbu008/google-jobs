import { arrayToStr } from "../../../helpers/helpers";

function MatIcon({ children, className = "", style = {}, ...restProps }) {
  const classNames = arrayToStr(["material-symbols-outlined", className]);
  const styles = {
    ...style,
  };

  return (
    <span className={classNames} style={styles} {...restProps}>
      {children}
    </span>
  );
}

export default MatIcon;
