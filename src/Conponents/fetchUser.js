import React from "react";
import axios from "axios";

function fetchUser(query, page) {
  if (!query) {
    return new Promise.reject("this is not a promise");
  } else {
    return axios.get("https://api.github.com/search/users", {
      params: {
        q: query,
      },
    });
  }
}
export { fetchUser };
