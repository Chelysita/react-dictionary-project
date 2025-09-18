import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultkeyword);
  let [results, setresults] = useState(null);
  let [loaded, setloaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e1054aod00e03d00aeectb39af13a2bb`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setresults(response.data);
  }

  function searchWord(event) {
    setkeyword(event.target.value);
  }
  function load() {
    setloaded(true);
    search();
  }
  if (loaded) {
    return (
      <div>
        <section>
          <h2 className="text-center">What word do you want to look up?</h2>
          <form className="Dictionary" onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={searchWord}
              placeholder="Enter a word"
            />

            <input type="submit" value="Search" />

            <div className="hint text-start">
              ex: sunset, bench, pencil, bottle...
            </div>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
