import { AutoCompleteSearch, Picture, MatIcon, icons } from "../../components";
import { arrayToStr } from "../../helpers/helpers";
import backgroundImg from "../../assets/img/background.png";
import { searchJobs } from "../../services/job-search";
import { useContext } from "react";
import { QueryContext } from "@/store/query-context";

function Header({ className = "", style = {} }) {
  const classNames = arrayToStr(["relative", className]);

  const styles = {
    ...style,
  };

  const { query, setQuery, setResults, location, setLoading } =
    useContext(QueryContext);

  const handleQueryChange = (value) => {
    setQuery(value);
  };

  const handleSearchClick = async () => {
    if (!query) {
      return;
    }
    setLoading(true);
    const [results, error] = await searchJobs(query, location);
    if (error) {
      console.log(error);
    } else {
      setResults(results);
    }
    setLoading(false);
  };

  return (
    <article className={classNames} style={styles}>
      <Picture src={backgroundImg} className="object-cover h-36" />
      <AutoCompleteSearch
        className="center-div w-11/12 lg:w-8/12"
        autoSearch={false}
        onSearch={handleSearchClick}
        onChange={handleQueryChange}
        btnLabel="Search"
        debounce={1000}
        value={query}
        placeholder="Title, companies, expertise or benefits"
        disabled={!query}
        iconLeft={
          <MatIcon className="text-grey-light text-xl">{icons.work}</MatIcon>
        }
      />
    </article>
  );
}

export default Header;
