import Link from "next/link";
import { icons, MatIcon, Typography } from "@/components/index";

function DetailSidebar({ applyBy }) {
  return (
    <aside>
      <Link className="block" href="/">
        <Typography className="link-text flex items-center mb-9">
          <MatIcon className="rotate-180 mr-4">{icons.trending_flat}</MatIcon>
          <span>Back to search</span>
        </Typography>
      </Link>
      <Typography className="heading mb-4">How to apply</Typography>
      <Typography className="font-poppins font-medium text-sm">
        {applyBy}
      </Typography>
    </aside>
  );
}

export default DetailSidebar;
