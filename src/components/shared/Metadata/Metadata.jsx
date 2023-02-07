import { arrayToStr } from "../../../helpers/helpers";
import MatIcon from "../MatIcon/MatIcon";
import Typography from "../Typography/Typography";

function Metadata({
  iconLeft,
  text,
  className = "",
  style = {},
  iconClasses = "",
}) {
  const classNames = arrayToStr(["flex items-center h-fit", className]);
  const styles = {
    ...style,
  };

  const iconClassNames = arrayToStr(["mr-1", iconClasses])

  return (
    <div className={classNames} style={styles}>
      {iconLeft && <MatIcon className={iconClassNames}>{iconLeft}</MatIcon>}
      <Typography>{text}</Typography>
    </div>
  );
}

export default Metadata;
