import React from "react";
import { useState } from "react";
import { fetchUser } from "./fetchUser.js";
export default function Github() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIserror] = useState(false);
  const [users, setUsers] = useState([]);
  const handleSearch = () => {
    setIsLoading(true);
    fetchUser(query)
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((err) => {
        setIserror(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div>
      <h1>Github</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search"
      />
      <button disabled={isLoading} onClick={handleSearch}>
        {isLoading ? "loading" : "SEARCH"}
      </button>
      <div>
        {users?.map((item) => (
          <div key={item.id}>{item.login}</div>
        ))}
      </div>
    </div>
  );
}
