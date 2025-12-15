import React, { useState } from "react";
import axios from "axios";

interface CertificateData {
  id: string;
  name: string;
  domain: string;
  date: string;
  url?: string;
}

const Verify: React.FC = () => {
  const [certificateId, setCertificateId] = useState<string>("");
  const [result, setResult] = useState<CertificateData | null>(null);
  const [error, setError] = useState<string>("");

  const API_URL =
    "https://script.google.com/macros/s/AKfycbydFGweevEjoLaBCGmP_604x481u1sn4pHzbBq-6yLcASvHxopcGAg-ZCZUdL_x-9D3/exec";

  const handleVerify = async () => {
    setResult(null);
    setError("");

    try {
      const response = await axios.get<CertificateData | null>(
        `${API_URL}?id=${certificateId}`
      );

      if (response.data) {
        setResult(response.data);
      } else {
        setError("❌ Invalid Certificate ID");
      }
    } catch (err: unknown) {
      console.error(err);
      setError("❌ Server Error");
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "500px", margin: "auto" }}>
      <h1>Verify Certificate</h1>

      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleVerify}
        style={{
          marginTop: "20px",
          padding: "12px",
          background: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          width: "100%",
          cursor: "pointer",
        }}
      >
        Verify
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "15px", fontWeight: 500 }}>
          {error}
        </p>
      )}

      {result && (
        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "#f7f7f7",
          }}
        >
          <h3>✔ Certificate Found</h3>
          <p>
            <strong>Name:</strong> {result.name}
          </p>
          <p>
            <strong>Domain:</strong> {result.domain}
          </p>
          <p>
            <strong>Date:</strong> {result.date}
          </p>

          {result.url && (
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4f46e5", fontWeight: 600 }}
            >
              View Certificate
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Verify;
