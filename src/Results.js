import React from "react";
import Meaning from "./Meaning";
import "./Dictionary.css";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1>{props.results.word}</h1>
          <h3>
            <i className="phonetic">{props.results.phonetic}</i>
          </h3>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
