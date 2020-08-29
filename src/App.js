import React, { useState } from "react";
import useDataApi from "./api/useDataApi";
import Hits from "./components/hits";

function App() {
  const [query, setQuery] = useState("redux");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=redux",
    {
      hits: [],
    }
  );

  return (
    <>
      <form
        onSubmit={(e) => {
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
          e.preventDefault();
        }}
      >
        <input
          className={
            "h-8 w-48 border rounded border-gray-400 p-2 m-4 text-gray-600 outline-none focus:border-blue-500"
          }
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className={
            "bg-blue-500 h-8 px-4 rounded-md text-white text-sm hover:bg-blue-700"
          }
        >
          Search
        </button>
      </form>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? (
        <div className="animate-spin h-6 w-6 text-purple-600 mx-auto mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      ) : (
        <div className={"flex flex-wrap px-2 py-4"}>
          {data.hits.map((item) => (
            <Hits key={item.objectID} hit={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
