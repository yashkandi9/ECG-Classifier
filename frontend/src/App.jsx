// src/App.jsx
import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🫀 ECG Anomaly Classifier</h1>
      <UploadForm onResult={setResult} />
      {result && <ResultCard data={result} />}
    </div>
  );
}

export default App;
