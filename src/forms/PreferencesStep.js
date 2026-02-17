import React from "react";
import { FaBookOpen } from "react-icons/fa";

const committees = ["UNGA-DISEC", "AIPPM", "UNHRC","NATO", "IP"];
const ipRoles = [
  "Photographer",
  "Reporter - UNGA-DISEC",
  "Reporter - AIPPM",
  "Reporter - UNHRC",
  "Reporter - NATO",
];


export default function PreferencesStep({
  participantsCount,
  setParticipantsCount,
  participants,
  setParticipants,
}) {
  const handleParticipantsCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setParticipantsCount(count);
    setParticipants(
      Array.from(
        { length: count },
        (_, i) =>
          participants[i] || {
            name: "",
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

    if (field === "preference") {
      updatedParticipants[index] = {
        ...updatedParticipants[index],
        preference: value,
        portfolio1: "",
        portfolio2: "",
        ipRole: "",
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
          href="https://docs.google.com/spreadsheets/d/15ZVV8TdOkXpDK4Ja6B0X_IA7Vb6BEUgcEqw4IJORsoc/edit?usp=sharing"
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
        <select
          value={participantsCount}
          onChange={handleParticipantsCountChange}
        >
          {[...Array(13).keys()].map((_, i) => (
            <option key={i} value={i + 8}>
              {i + 8}
            </option>
          ))}
        </select>
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

            <input
              type="text"
              placeholder="Name"
              value={participant.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
              required
            />

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
                  placeholder="Portfolio / Country - 1"
                  value={participant.portfolio1}
                  onChange={(e) =>
                    handleInputChange(index, "portfolio1", e.target.value)
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Portfolio / Country - 2"
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
