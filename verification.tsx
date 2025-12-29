import React, { useState } from "react";
import axios from "axios";

interface CertificateData {
  status: "valid" | "invalid";
  id?: string;
  name?: string;
  domain?: string;
  date?: string;
  url?: string;
}

const Verify: React.FC = () => {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState<CertificateData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL =
    "https://script.google.com/macros/s/AKfycbxwayyyO3YfUp8euSZLq80-7D9h8YaWB5rGuIDW6l7lC0uICZ_Ry5lSl5-oDtxo6HjIiA/exec";

  const handleVerify = async () => {
    setResult(null);
    setError("");

    if (!certificateId.trim()) {
      setError("Please enter a Certificate ID");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get<CertificateData>(
        `${API_URL}?id=${certificateId.trim()}`
      );

      if (response.data.status === "valid") {
        setResult(response.data);
      } else {
        setError("❌ Invalid Certificate ID");
      }
    } catch (err) {
      console.error(err);
      setError("❌ Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "520px",
        margin: "60px auto",
        borderRadius: "16px",
        background: "#ffffff",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Certificate Verification
      </h1>

      <p style={{ textAlign: "center", color: "#6b7280", fontSize: "14px" }}>
        Verify InternLink internship certificates instantly
      </p>

      <input
        type="text"
        placeholder="Enter Certificate ID (e.g. IL12DM0000)"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        style={{
          width: "100%",
          padding: "14px",
          marginTop: "25px",
          borderRadius: "10px",
          border: "1px solid #d1d5db",
          fontSize: "15px",
        }}
      />

      <button
        onClick={handleVerify}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "14px",
          background: loading ? "#9ca3af" : "#4f46e5",
          color: "#fff",
          border: "none",
          borderRadius: "10px",
          width: "100%",
          fontSize: "16px",
          fontWeight: 600,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Verifying..." : "Verify Certificate"}
      </button>

      {error && (
        <p
          style={{
            color: "#dc2626",
            marginTop: "16px",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          {error}
        </p>
      )}

      {result?.status === "valid" && (
        <div
          style={{
            marginTop: "25px",
            padding: "22px",
            borderRadius: "14px",
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ color: "#16a34a", marginBottom: "15px" }}>
            ✔ Certificate Verified
          </h3>

          <p>
            <strong>Name:</strong> {result.name}
          </p>
          <p>
            <strong>Domain:</strong> {result.domain}
          </p>
          <p>
            <strong>Internship Date:</strong> {result.date}
          </p>

          {result.url && (
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "12px",
                color: "#4f46e5",
                fontWeight: 600,
                textDecoration: "none",
              }}
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
