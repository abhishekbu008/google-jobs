import { useContext, useEffect, useState } from "react";
import { Pagination, Spinner } from "../../components";
import {
  arrayToStr,
  getFulltimeResults,
  removeSpecialChars,
} from "../../helpers/helpers";
import { QueryContext } from "@/store/query-context";
import JobCard from "./JobCard/JobCard";
import { JOB_DETAIL_KEY } from "../../constants/constants";
import { searchJobs } from "../../services/job-search";
import { useRouter } from "next/router";

function JobList({ className = "", style = {} }) {
  const classNames = arrayToStr([className]);
  const router = useRouter();

  const styles = {
    ...style,
  };

  const [currentPage, setCurrentPage] = useState(1);
  const {
    results,
    setResults,
    location,
    query,
    isFulltime,
    setLoading,
    loading,
  } = useContext(QueryContext);

  const filteredResults = getFulltimeResults(results, isFulltime) || [];

  useEffect(() => {
    setLoading(true);
    (async () => {
      const page = currentPage === 1 ? 0 : (currentPage - 1) * 10;
      const [results, error] = await searchJobs(query, location, page);
      if (error) {
        console.log(error);
      } else {
        setResults(results);
      }
      setLoading(false);
    })();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClick = (id) => {
    const selectedJob = results.find((result) => result.id === id);
    localStorage.setItem(JOB_DETAIL_KEY, JSON.stringify(selectedJob));
    router.push({
      pathname: `/detail/${removeSpecialChars(id)}`,
      query: {
        jobId: `/detail/${removeSpecialChars(id)}`,
      },
    });
  };

  return (
    <div className={classNames} style={styles}>
      {loading && (
        <div className="mt-28">
          <Spinner />
        </div>
      )}
      {!loading &&
        filteredResults.map((result) => (
          <JobCard
            key={result.id}
            {...result}
            className="mb-8"
            onClick={handleClick}
          />
        ))}
      {!loading && filteredResults.length === 0 && (
        <p>Server Down! please try again later</p>
      )}
      {!loading && (
        <Pagination
          totalCount={filteredResults.length}
          pageSize={5}
          className="ml-auto w-fit"
          currentPage={currentPage}
          onPageChange={handlePageChange}
          infinite={true}
        />
      )}
    </div>
  );
}

export default JobList;
