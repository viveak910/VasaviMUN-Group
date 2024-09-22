import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import qrCode1 from "./QR1.jpeg";
import qrCode2 from "./QR2.png";

export default function PaymentStep({
  isVasavi,
  transactionId,
  setTransactionId,
  driveLink,
  setDriveLink,
}) {
  const upiID = isVasavi ? "7396588789@hdfcbank" : "8309502651@ibl";
  const paymentLink = isVasavi
    ? "https://example.com/pay/1000"
    : "https://example.com/pay/1400";

  const QR = isVasavi ? qrCode1 : qrCode2;

  const [isValidDriveLink, setIsValidDriveLink] = useState(true);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("UPI ID copied to clipboard!");
    });
  };

  const validateDriveLink = (link) => {
    const driveUrlPattern =
      /https:\/\/drive\.google\.com\/(?:file\/d\/|drive\/folders\/)([-\w]+)/;
    return driveUrlPattern.test(link);
  };

  const handleDriveLinkChange = (e) => {
    const value = e.target.value;
    setDriveLink(value);
    setIsValidDriveLink(validateDriveLink(value));
  };

  return (
    <div>
      <h2>
        {isVasavi
          ? "Pay the registration fee of ₹1000"
          : "Pay the registration fee of ₹1400"}
      </h2>
      <div className="hd">
        <label className="btn">
          <a
            href={paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h3>Payment</h3>
          </a>
        </label>
        <input
          type="text"
          id="transaction-id"
          placeholder="Enter Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
        <input
          type="text"
          id="drive-link"
          placeholder="Payment Screenshot (Drive Link)"
          value={driveLink}
          onChange={handleDriveLinkChange}
          style={{
            borderColor: isValidDriveLink ? "#ccc" : "red",
          }}
        />
        <p
          style={{
            marginTop: "5px",
            fontSize: "0.9rem",
            color: "#fff",
          }}
        >
          Ensure the link is not restricted
        </p>
        {!isValidDriveLink && (
          <p style={{ color: "red" }}>
            {" "}
            Please enter a valid Google Drive link
          </p>
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        <p
          style={{
            padding: "8px",
            borderRadius: "8px",
            marginRight: "10px",
            backgroundColor: "black",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}
        >
          {upiID} {/* Display the UPI ID */}
        </p>
        <FaRegCopy
          onClick={() => copyToClipboard(upiID)}
          style={{
            cursor: "pointer",
            fontSize: "1.5rem",
            color: "#fff", // White icon color
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            padding: "10px",
            borderRadius: "15px",
            overflow: "hidden",
            border: "1px solid #ccc",
          }}
        >
          <img
            src={QR}
            alt="QR Code"
            style={{
              height: "auto",
              maxWidth: "100%",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}
