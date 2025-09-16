import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  let [results, setresults] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e1054aod00e03d00aeectb39af13a2bb`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setresults(response.data);
    console.log(response.data);
  }

  function searchWord(event) {
    setkeyword(event.target.value);
  }

  return (
    <div>
      <form className="Dictionary" onSubmit={handleSubmit}>
        <input type="search" onChange={searchWord} />
        <input type="submit" value="Search" />
      </form>

      <Results results={results} />
    </div>
  );
}
