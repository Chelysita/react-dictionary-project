import React from "react";
import Synonyms from "./Synonym";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);

  const synonyms = props.meaning.synonyms;

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p> Definition: &nbsp;{props.meaning.definition}</p>

      <p>
        <Synonyms synonyms={synonyms} />
      </p>
    </div>
  );
}
