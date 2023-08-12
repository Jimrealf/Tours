import React, { useState } from "react";

export default function Tours({ tours, removeTour }) {
  return (
    <div>
      <h1 className="underline">Our Tours</h1>

      <ul>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={removeTour} />
        ))}
      </ul>
    </div>
  );
}

function Tour({ tour, removeTour }) {
  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <li className="single-tour" key={id}>
      <img src={image} alt={name} />
      <div className="tour-info">
        <h2>{name}</h2>
        <span className="tour-price">${price}</span>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="btn delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </li>
  );
}
