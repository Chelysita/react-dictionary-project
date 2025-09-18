import React from "react";
import Synonyms from "./Synonym";
import "./Meaning.css";
import "./Dictionary.css";

export default function Meaning(props) {
  const synonyms = props.meaning.synonyms;
  if (props.meaning.example) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <strong> Definition: </strong>

          {props.meaning.definition}
        </p>
        <p>
          <strong> Example: </strong> {props.meaning.example}
        </p>
        <p>
          <Synonyms synonyms={synonyms} />
        </p>
      </div>
    );
  } else {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <strong> Definition: </strong>
          {props.meaning.definition}
        </p>

        <Synonyms synonyms={synonyms} />
      </div>
    );
  }
}
