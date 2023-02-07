import { arrayToStr } from "../../../helpers/helpers";

function Typography({ children, className = "", style = {} }) {
  const classNames = arrayToStr([className]);

  const styles = {
    ...style,
  };

  return (
    <p className={classNames} style={styles}>
      {children}
    </p>
  );
}

export default Typography;
