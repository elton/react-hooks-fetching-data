import React from "react";
import moment from "moment";

const Hits = ({ hit }) => {
  return (
    <div className={"w-full sm:w-1/2 lg:w-1/3 p-2"}>
      <div className="border-gray-200 border bg-white rounded-lg shadow p-4 h-48 lg:h-50 w-full text-gray-800 hover:bg-blue-100">
        <h2 className="text-xl">
          <a href={hit.url} className="">
            {hit.title}
          </a>
        </h2>
        <span className="text-sm text-gray-700">
          {hit.author} -{" "}
          <span className="text-gray-500">
            {moment(hit.created_at).format("MMMM Do YYYY")}
          </span>
        </span>
        <div className="mt-2 flex flex-wrap">
          {hit._tags.map((tag) => (
            <span className="bg-blue-400 mr-2 text-white px-3 py-1 mb-2 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hits;
