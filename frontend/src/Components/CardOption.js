import React, { useState } from "react";

export default function CardOption({ image, heading, content }) {
  const [selected, setSelected] = useState(false);

  const selectCard = () => {
    setSelected(!selected);
  };

  return (
    <div className="col">
      <div
        className={`card ${selected ? "selected" : ""} h-100 py-auto`}
        onClick={selectCard}
      >
        <img
          src={image}
          alt="..."
          className={`card-img ${selected ? "selected" : ""}`}
        />
        <h4>{heading}</h4>
        <small className="text-secondary fw-medium">{content}</small>
        <input type="checkbox" className="checkbox" checked={selected} />
      </div>
    </div>
  );
}
