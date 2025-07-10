// src/components/ResultCard.jsx
import React from "react";

function ResultCard({ data }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Prediction Result:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ResultCard;
