import React from "react";
import "./Card.css";

export default function Card({ name, img }) {
  return (
    <div>
      <div className="card">
        <h3>კერძი:{name}</h3>
        <img className="img" src={img} alt="" width={150} />
      </div>
    </div>
  );
}
