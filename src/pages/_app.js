import { Logo } from "@/components";
import { locations } from "@/constants/constants";
import { QueryContext } from "@/store/query-context";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState(locations[0].value);
  const [isFulltime, setIsFulltime] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <QueryContext.Provider
      value={{
        query,
        results,
        setQuery,
        setResults,
        location,
        setLocation,
        isFulltime,
        setIsFulltime,
        loading,
        setLoading,
      }}
    >
      <section className="font-roboto mx-3 lg:mx-28 mb-32 mt-8">
        <Logo className="mb-8" />
        <Component {...pageProps} />
      </section>
    </QueryContext.Provider>
  );
}
