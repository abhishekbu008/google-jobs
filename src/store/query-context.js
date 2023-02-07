import { createContext } from "react";

export const QueryContext = createContext({
  query: "",
  setQuery: () => {},
  results: [],
  setResults: () => {},
  location: "",
  setLocation: () => {},
  isFulltime: false,
  loading: false,
  setLoading: () => {},
  jobId: null,
  setJobId: () => {},
});
