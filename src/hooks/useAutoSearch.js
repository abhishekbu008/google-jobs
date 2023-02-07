import { useEffect, useState } from "react";
import { promiseResolver } from "../helpers/helpers";
import useDebounceValue from "./useDebounceValue";

function useAutoSearch(query, searchHander, enabled = true, debounce = 300) {
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);
  const debounceQuery = useDebounceValue(query, debounce);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    let ignore = false;
    (async () => {
      if (debounceQuery.length > 0) {
        const [results, error] = await promiseResolver(
          searchHander(debounceQuery)
        );
        setError(error);
        if (!ignore && !error) {
          setSuggestions(results);
        }
      }
    })();

    return () => {
      ignore = true;
    };
  }, [debounceQuery]);

  return { suggestions, error };
}

export default useAutoSearch;
