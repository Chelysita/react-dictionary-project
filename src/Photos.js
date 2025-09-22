import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="photos">
        <div className="grid-photos">
          {props.photos.map(function (photo, index) {
            return (
              <div className="photo">
                <a
                  href={props.photos.original}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    key={index}
                    src={photo.src.landscape}
                    alt="word-picture"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
