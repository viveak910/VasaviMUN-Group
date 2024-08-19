import React from "react";

export default function PaymentStep({
  isVasavi,
  transactionId,
  setTransactionId,
}) {
  const paymentLink = isVasavi
    ? "https://example.com/pay/1500"
    : "https://example.com/pay/2000";

  return (
    <div>
      <h2>
        {isVasavi
          ? "Pay the registration fee of ₹1500"
          : "Pay the registration fee of ₹2000"}
      </h2>
      <a href={paymentLink} target="_blank" rel="noopener noreferrer">
        <h3>Click here to proceed with payment</h3>
      </a>
      <div>
        <input
          type="text"
          id="transaction-id"
          placeholder="Enter Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
      </div>
    </div>
  );
}
