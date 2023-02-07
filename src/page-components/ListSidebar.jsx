import { useContext, useEffect } from "react";
import { icons, InputLabel, MatIcon, Typography } from "../components";
import Input from "../components/shared/Input/Input";
import { arrayToStr } from "../helpers/helpers";
import useDebounceValue from "../hooks/useDebounceValue";
import { searchJobs } from "../services/job-search";
import { QueryContext } from "@/store/query-context";
import { locations } from "../constants/constants";

function ListSidebar({ className = "", style = {} }) {
  const classNames = arrayToStr([className]);

  const styles = {
    ...style,
  };

  const {
    query,
    setResults,
    location,
    setLocation,
    isFulltime,
    setIsFulltime,
    setLoading,
  } = useContext(QueryContext);

  const debouncedLocation = useDebounceValue(location);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const [results, error] = await searchJobs(query, debouncedLocation);
      if (error) {
        console.log(error);
      } else {
        setResults(results);
      }
      setLoading(false);
    })();
  }, [debouncedLocation]);

  const onChange = async (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className={classNames} style={styles}>
      <InputLabel
        label="Full time"
        checked={isFulltime}
        name="fulltime"
        onChange={() => setIsFulltime((prev) => !prev)}
        type="checkbox"
        className="mb-8 accent-blue-medium"
      />
      <Typography className="heading">Location</Typography>
      <Input
        className="h-12 mb-6 bg-white"
        value={location}
        onChange={onChange}
        placeholder="City, state, zip code or country"
        iconLeft={
          <MatIcon className="text-grey-light text-xl">{icons.public}</MatIcon>
        }
      />
      {locations.map((loc) => (
        <InputLabel
          key={loc.id}
          type="radio"
          label={loc.name}
          className="mb-4 accent-blue-medium"
          onChange={onChange}
          name={"location"}
          value={loc.value}
          checked={loc.value.toLowerCase() === location.toLowerCase()}
        />
      ))}
    </div>
  );
}

export default ListSidebar;
