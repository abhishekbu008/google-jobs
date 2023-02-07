import axios from "../lib/axios/google-jobs-client";
import { SERP } from "../constants/constants";
import { promiseResolver } from "../helpers/helpers";

export const searchJobs = async (query, location, page = 0) => {
  const params = {
    engine: SERP.ENGINE.JOBS,
    q: query,
    start: page,
  };
  if (!query) {
    params.q = "jobs";
  }

  if (location) params.location = location;

  const [response, err] = await promiseResolver(
    axios.get("/", {
      params: params,
    })
  );

  if (!response) {
    return [null, err];
  }

  const jobResults = response.data.jobs_results.map((jobResult) => ({
    id: jobResult.job_id,
    img: jobResult.thumbnail,
    location: jobResult.location,
    jobTitle: jobResult.title,
    company: jobResult.company_name,
    description: jobResult.description,
    applyBy: jobResult.via,
    schedule_type: jobResult.detected_extensions.schedule_type,
    posted_at: jobResult.detected_extensions.posted_at,
  }));

  return [jobResults, null];
};
