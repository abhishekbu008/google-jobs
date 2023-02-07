import { LOGOTEXT } from "../../constants/constants";
import { arrayToStr } from "../../helpers/helpers";

function Logo({ className = "", style = {} }) {
  const splittedLogo = LOGOTEXT.split(" ");

  const classNames = arrayToStr([
    "text-blue-dark font-poppins font-bold text-2xl",
    className,
  ]);

  const styles = {
    ...style,
  };

  return (
    <article className={classNames} style={styles}>
      <span>{splittedLogo[0]}</span>
      &nbsp;
      {splittedLogo[1] ? (
        <span className="font-light">{splittedLogo[1]}</span>
      ) : null}
    </article>
  );
}

export default Logo;
