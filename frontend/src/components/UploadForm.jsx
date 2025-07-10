// src/components/UploadForm.jsx
import React, { useState } from "react";

function UploadForm({ onResult }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    onResult(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".npy,.csv" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">Predict</button>
    </form>
  );
}

export default UploadForm;
