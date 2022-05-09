import React, { useEffect, useState } from "react";

export default function Search({ setResult }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function searchResults() {
      if (search !== "") {
        const result = await fetch(
          `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search}&numResults=10`
        );

        const data = await result.json();
        setResult(data.results);
      }
    }
    searchResults();
  }, [search, setResult]);

  return (
    <>
      <input
        type="text"
        placeholder="Search Videos"
        className="w-1/2 border-2 p-2 rounded-lg"
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}
