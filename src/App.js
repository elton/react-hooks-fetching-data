import React, { useState } from "react";
import useDataApi from "./api/useDataApi";

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
        <div>Loading</div>
      ) : (
        <ul className={"ml-4"}>
          {data.hits.map((item) => (
            <li key={item.objectID} className={"pb-1 text-gray-800"}>
              <a href={item.uri}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
