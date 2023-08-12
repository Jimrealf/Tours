import React from "react";

export default function Empty({ fetchTours }) {
  return (
    <div>
      <h1>No Tours Left</h1>
      <button
        className="btn"
        onClick={() => {
          fetchTours();
        }}
      >
        Refresh
      </button>
    </div>
  );
}
