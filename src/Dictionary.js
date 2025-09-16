import "./Dictionary.css";
import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e1054aod00e03d00aeectb39af13a2bb`;
    axios.get(apiUrl).then(handleResponse);
    alert(`Searching for ${keyword}`);
  }
  function handleResponse(response) {
    console.log(response.data);
  }

  function searchWord(event) {
    setkeyword(event.target.value);
  }

  return (
    <form className="Dictionary" onSubmit={handleSubmit}>
      <input type="search" onChange={searchWord} />
      <input type="submit" value="Search" />
    </form>
  );
}
