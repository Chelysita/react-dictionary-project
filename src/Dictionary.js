import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultkeyword);
  let [results, setresults] = useState(null);
  let [loaded, setloaded] = useState(false);
  let [photos, setphotos] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleImageResponse(response) {
    setphotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e1054aod00e03d00aeectb39af13a2bb`;
    axios.get(apiUrl).then(handleResponse);
    let imageApiKey = "e1054aod00e03d00aeectb39af13a2bb";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
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
          <form className="Dictionary-form" onSubmit={handleSubmit}>
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
