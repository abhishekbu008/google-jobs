import {
  Picture,
  Typography,
  NotFound,
  icons,
  Metadata,
} from "../../../components";
import { arrayToStr } from "../../../helpers/helpers";

function JobCard({
  id,
  img,
  location,
  jobTitle,
  company,
  schedule_type,
  posted_at,
  onClick = () => {},
  className = "",
  style = {},
}) {
  const classNames = arrayToStr([
    "bg-white p-2 flex shadow-default flex-wrap cursor-pointer",
    className,
  ]);

  const styles = {
    ...style,
  };

  return (
    <article className={classNames} style={styles} onClick={() => onClick(id)}>
      {img ? (
        <Picture src={img} className="w-24 h-24 object-contain mr-4 border self-start mb-3" />
      ) : (
        <NotFound className="w-24 h-24 mr-4 mb-3" />
      )}
      <div className="flex-1">
        <Typography className="mb-2">{company}</Typography>
        <Typography className="mb-3">{jobTitle}</Typography>
        <div className="flex justify-between flex-wrap">
          <Typography className="btn-typography mb-3">
            {schedule_type}
          </Typography>
          <div className="flex text-grey-light mb-3">
            <Metadata
              iconLeft={icons.public}
              text={location}
              className="text-sm mr-7"
              iconClasses="text-md"
            />
            <Metadata
              iconLeft={icons.schedule}
              text={posted_at}
              className="text-sm"
              iconClasses="text-md"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default JobCard;
