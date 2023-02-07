import Image from "next/image";
import { arrayToStr } from "../../../helpers/helpers";

function Picture({ src, className = "", style = {} }) {
  const classNames = arrayToStr([
    "block w-full rounded-lg object-center",
    className,
  ]);

  const styles = {
    ...style,
  };

  return (
    <Image
      src={src}
      className={classNames}
      style={styles}
      alt="image"
      width={500}
      height={500}
    />
  );
}

export default Picture;
