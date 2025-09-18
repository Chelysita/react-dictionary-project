import React from "react";
import "./Synonyms.css";
import "./Dictionary.css";

export default function Synonyms(props) {
  const items = props.synonyms;
  if (items) {
    return (
      <div className="synonyms">
        <strong>Synonyms: </strong>

        <ul>
          {items.map(function (sinonimo) {
            return <li>{sinonimo}</li>;
          })}
        </ul>
      </div>
    );
  } else return null;
}
