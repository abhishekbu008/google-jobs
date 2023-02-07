import { arrayToStr } from "../../../helpers/helpers";

function NotFound({ className = "", style = {} }) {
  const classNames = arrayToStr([
    "bg-grey-extra-light rounded flex items-center justify-center",
    className,
  ]);

  const styles = {
    ...style,
  };

  return (
    <div className={classNames} style={styles}>
      <p className="text-grey-medium">not found</p>
    </div>
  );
}

export default NotFound;
