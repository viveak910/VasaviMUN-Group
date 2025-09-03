import React from "react";
import { FaRegCopy } from "react-icons/fa";
//import qrCode1 from "./AnanyaQR.png";
//import qrCode2 from "./QR2.png";
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
  const baseFee = isVasavi ? 900 : 1600;
  const totalFee = baseFee * participantsCount;
  const upiID = isVasavi ? "myakalayashwanth2005@okhdfcbank" : "myakalayashwanth2005@okhdfcbank";
  const no = isVasavi ? "8374878822" : "9866096974";
  //const QR = isVasavi ? qrCode1 : qrCode1;
  setAmount(totalFee);
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("UPI ID copied to clipboard!");
    });
  };

  return (
    <div>
      <h2>Pay the registration fee of ₹{totalFee}</h2>
      <div className="hd">
        <label className="btn">
          <h3>Payment</h3>
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
        <p
          style={{
            marginTop: "5px",
            fontSize: "0.9rem",
            color: "#fff",
          }}
        >
          Ensure access is not restricted
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
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
            {upiID}
          </p>
          <FaRegCopy
            onClick={() => copyToClipboard(upiID)}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "#fff",
            }}
          />
        </div>
        <h5
          style={{
            marginTop: "10px",
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#fff",
          }}
        >
          For payment issues, contact: {no}
        </h5>
      </div>

      {/* <div
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
      </div> */}
    </div>
  );
}
