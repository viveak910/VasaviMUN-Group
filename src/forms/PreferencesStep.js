import React from "react";
import { FaBookOpen } from "react-icons/fa";

const committees = ["DISEC", "AIPPM", "UNODC", "UNHRC", "CCC", "IP"];
const ipRoles = [
  "Photographer",
  "Reporter - DISEC",
  "Reporter - AIPPM",
  "Reporter - UNODC",
  "Reporter - UNHRC",
  "Reporter - CCC",
];

export default function PreferencesStep({
  participantsCount,
  setParticipantsCount,
  participants,
  setParticipants,
}) {
  const handleParticipantsCountChange = (e) => {
    const count = Math.min(Math.max(e.target.value, 8), 12);
    setParticipantsCount(count);
    setParticipants(
      Array.from(
        { length: count },
        (_, i) =>
          participants[i] || {
            name: "",
            phone: "",
            email: "",
            preference: "",
            portfolio1: "",
            portfolio2: "",
            ipRole: "",
          }
      )
    );
  };

  const handleInputChange = (index, field, value) => {
    const updatedParticipants = [...participants];

    // If the preference is being changed to "IP", reset the portfolio fields
    if (field === "preference" && value === "IP") {
      updatedParticipants[index] = {
        ...updatedParticipants[index],
        preference: value,
        portfolio1: "", // Reset portfolio1
        portfolio2: "", // Reset portfolio2
        ipRole: "", // Clear the IP role as well
      };
    } else {
      updatedParticipants[index][field] = value;
    }

    setParticipants(updatedParticipants);
  };

  return (
    <div>
      <div className="hd">
        <label className="btn">
          <h3>Committee Preference</h3>
        </label>
        <a
          href="https://docs.google.com/spreadsheets/d/10-hKlo3oR5dMq0zpd2tCOk11WGoudPvfCI3EauPGVFs/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <p
            style={{
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: "black",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <FaBookOpen style={{ marginRight: "8px" }} /> Country Matrices
          </p>
        </a>
      </div>

      <label>
        <h3>Number of Participants</h3>
        <input
          type="number"
          value={participantsCount}
          onChange={handleParticipantsCountChange}
          min="8"
          max="12"
        />
      </label>

      <form>
        {participants.map((participant, index) => (
          <div
            key={index}
            className="participant-form"
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid lightgray",
              borderRadius: "8px",
            }}
          >
            <h2
              style={{
                padding: "10px",
                borderRadius: "8px",
                backgroundColor: "black",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              Participant {index + 1}
            </h2>

            {/* Name, Phone, and Email */}
            <input
              type="text"
              placeholder="Name"
              value={participant.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={participant.phone}
              onChange={(e) =>
                handleInputChange(index, "phone", e.target.value)
              }
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={participant.email}
              onChange={(e) =>
                handleInputChange(index, "email", e.target.value)
              }
              required
            />

            {/* Preferences */}
            <h4>Preference</h4>
            <select
              value={participant.preference}
              onChange={(e) =>
                handleInputChange(index, "preference", e.target.value)
              }
              required
            >
              <option value="">Select preference</option>
              {committees.map((committee, idx) => (
                <option key={idx} value={committee}>
                  {committee}
                </option>
              ))}
            </select>

            {participant.preference === "IP" && (
              <select
                value={participant.ipRole}
                onChange={(e) =>
                  handleInputChange(index, "ipRole", e.target.value)
                }
                required
              >
                <option value="">Select Role</option>
                {ipRoles.map((role, idx) => (
                  <option key={idx} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            )}

            {participant.preference && participant.preference !== "IP" && (
              <>
                <input
                  type="text"
                  placeholder="Portfolio 1"
                  value={participant.portfolio1}
                  onChange={(e) =>
                    handleInputChange(index, "portfolio1", e.target.value)
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Portfolio 2"
                  value={participant.portfolio2}
                  onChange={(e) =>
                    handleInputChange(index, "portfolio2", e.target.value)
                  }
                  required
                />
              </>
            )}
          </div>
        ))}
      </form>
    </div>
  );
}
