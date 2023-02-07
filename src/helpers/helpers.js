import { FULL_TIME_KEY } from "../constants/constants";

export const arrayToStr = (arr) => arr.join(" ").trim();

export function* rangeGen(start = 0, end, step = 1) {
  for (let i = start; i < end; i = i + step) {
    yield i;
  }
}

export const range = (start, end) => {
  let length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start);
};

export const promiseResolver = async (request) => {
  try {
    const response = await request;
    return [response, null];
  } catch (err) {
    console.log(err);
    return [null, err];
  }
};

export const removeSpecialChars = (str) => str.replace(/[^\w\s]/gi, "");

export const getFulltimeResults = (results, isFulltime) => {
  let filteredResults = results;
  if (isFulltime) {
    filteredResults = (results ?? []).filter(
      (result) => result.schedule_type === FULL_TIME_KEY
    );
  }
  return filteredResults;
};
