import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  const items = props.synonyms;
  if (items) {
    return (
      <div className="synonyms">
        <p>Synonyms: </p>
        <ul>
          {items.map(function (sinonimo) {
            return <li>{sinonimo}</li>;
          })}
        </ul>
      </div>
    );
  } else return null;
}
