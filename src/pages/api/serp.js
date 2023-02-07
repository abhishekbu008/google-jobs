// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getJson, config } from "serpapi";

config.api_key = process.env.API_KEY;
config.timeout = 60000;

export default async function handler(req, res) {
  const response = await getJson("google_jobs", {
    ...req.query,
  });
  return res.send(response);
}
