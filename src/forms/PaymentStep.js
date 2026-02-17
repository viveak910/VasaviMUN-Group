import React, { useEffect } from "react";
import { FaRegCopy } from "react-icons/fa";
import qrCode3 from "./qr_yashwant.jpeg";

export default function PaymentStep({
  isVasavi,
  transactionId,
  setTransactionId,
  driveLink,
  setDriveLink,
  participantsCount,
  amount,
  setAmount,
  utr,
  setUtr,
}) {
  const baseFee = isVasavi ? 800 : 1300;
  const totalFee = baseFee * participantsCount;
  const upiID = "8897327157@axl";
  const no = isVasavi ? "8374878822" : "9866096974";

  useEffect(() => {
    setAmount(totalFee);
  }, [totalFee, setAmount]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("UPI ID copied!");
    });
  };

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2>Pay the registration fee of ₹{totalFee}</h2>

      {/* Payment Inputs */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />

        <input
          type="text"
          placeholder="Payment Screenshot (Drive Link)"
          value={driveLink}
          onChange={(e) => setDriveLink(e.target.value)}
          style={{ padding: "10px", width: "250px" }}
        />

        <p style={{ fontSize: "0.9rem" }}>
          Ensure drive access is not restricted
        </p>
      </div>

      {/* UPI Section */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p
          style={{
            padding: "8px 15px",
            borderRadius: "8px",
            backgroundColor: "black",
            fontWeight: "bold",
          }}
        >
          {upiID}
        </p>

        <FaRegCopy
          onClick={() => copyToClipboard(upiID)}
          style={{
            cursor: "pointer",
            fontSize: "1.4rem",
          }}
        />
      </div>

      {/* OR Text */}
      <p style={{ marginTop: "25px", fontWeight: "bold" }}>
        OR Use the QR Code Below
      </p>

      {/* QR Code */}
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={qrCode3}
          alt="QR Code"
          style={{
            width: "220px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: "white",
          }}
        />
      </div>

      <p style={{ marginTop: "20px" }}>
        For payment issues, contact: {no}
      </p>
    </div>
  );
}
