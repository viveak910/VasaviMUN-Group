import React from "react";
import qrCode1 from "./QR1.jpeg";
import qrCode2 from "./QR2.png";

export default function PaymentStep({
  isVasavi,
  transactionId,
  setTransactionId,
  driveLink,
  setDriveLink,
}) {
  const paymentLink = isVasavi
    ? "https://example.com/pay/1000"
    : "https://example.com/pay/1400";

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
          onChange={(e) => setDriveLink(e.target.value)}
        />
      </div>

      {/* QR Code Images */}
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
            src={qrCode1} // Use imported path for QR code 1
            alt="QR Code 1"
            style={{
              height: "auto", // Maintain aspect ratio
              maxWidth: "100%", // Ensure it fits within the container
              borderRadius: "10px", // Rounded corners for the image
            }}
          />
        </div>
        <div
          style={{
            padding: "10px",
            borderRadius: "15px",
            overflow: "hidden",
            border: "1px solid #ccc",
          }}
        >
          <img
            src={qrCode2} // Use imported path for QR code 2
            alt="QR Code 2"
            style={{
              height: "auto", // Maintain aspect ratio
              maxWidth: "100%", // Ensure it fits within the container
              borderRadius: "10px", // Rounded corners for the image
            }}
          />
        </div>
      </div>
    </div>
  );
}
