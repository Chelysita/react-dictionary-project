import "./Dictionary.css";
import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
