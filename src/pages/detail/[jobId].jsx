import { useContext, useEffect, useState } from "react";
import { QueryContext } from "@/store/query-context";
import { icons, Metadata, Picture, Typography } from "../../components";
import { removeSpecialChars } from "../../helpers/helpers";
import DetailSidebar from "@/page-components/DetailSidebar";
import NotFound from "@/assets/img/not-found.jpg";
import { useRouter } from "next/router";
import { JOB_DETAIL_KEY } from "@/constants/constants";

export default function Detail() {
  const { results } = useContext(QueryContext);
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState(
    results.find(
      (result) => removeSpecialChars(result.id) === router.query.jobId
    )
  );

  useEffect(() => {
    setSelectedJob(JSON.parse(localStorage.getItem(JOB_DETAIL_KEY)));
  }, []);

  const {
    img,
    location,
    jobTitle,
    company,
    description,
    applyBy,
    schedule_type,
    posted_at,
  } = selectedJob || {};

  return (
    <section className="lg:grid lg:grid-cols-[2fr_10fr] lg:gap-8 mt-11">
      <DetailSidebar applyBy={applyBy} />
      <article>
        <div className="flex">
          <Typography className="text-blue-light font-roboto text-2xl font-bold mr-6 mb-3">
            {jobTitle}
          </Typography>
          <Typography className="btn-typography">{schedule_type}</Typography>
        </div>
        <Metadata
          iconLeft={icons.schedule}
          text={posted_at}
          className="mb-8 text-sm text-grey-light"
        ></Metadata>
        <div className="flex gap-3 items-center">
          <Picture
            src={img || NotFound}
            className="w-11 h-11 object-cover mr-4 border mb-auto"
          />

          <div className="mb-8">
            <Typography className="mb-2.5">{company}</Typography>
            <Metadata
              iconLeft={icons.public}
              text={location}
              className="text-sm text-grey-light"
            ></Metadata>
          </div>
        </div>
        <Typography className="text-blue-light font-roboto text-lg font-normal">
          {description}
        </Typography>
      </article>
    </section>
  );
}
