import React from "react";
import "./form.css";

export default function PersonalDetailsStep({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  address,
  setAddress,
  isVasavi,
  setIsVasavi,
  rollNumber,
  setRollNumber,
  year,
  setYear,
  branch,
  setBranch,
  section,
  setSection,
  munExperienceDetails,
  setMunExperienceDetails,
  instituteName,
  setInstituteName,
  teamName,
  setTeamName,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Name of the Delegate"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Group delegation name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        required
      />
      {!isVasavi && (
        <input
          type="text"
          placeholder="Institute Name"
          value={instituteName}
          onChange={(e) => setInstituteName(e.target.value)}
          required
        />
      )}
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />

      <textarea
        className="mun-experience"
        placeholder="Describe your MUN experience"
        value={munExperienceDetails}
        onChange={(e) => setMunExperienceDetails(e.target.value)}
      />

      <div className="radio-container">
        <input
          id="vasavi"
          className="toggle"
          name="toggle"
          type="radio"
          value="vasavi"
          checked={isVasavi}
          onChange={() => {
            setIsVasavi(true);
            setInstituteName("Vasavi College of Engineering");
          }}
        />
        <label htmlFor="vasavi" className={`btn ${isVasavi ? "selected" : ""}`}>
          Vasavi College
        </label>
        <input
          id="external"
          className="toggle"
          name="toggle"
          type="radio"
          value="external"
          checked={!isVasavi}
          onChange={() => {
            setIsVasavi(false);
            setInstituteName("");
          }}
        />
        <label
          htmlFor="external"
          className={`btn ${!isVasavi ? "selected" : ""}`}
        >
          External Delegate
        </label>
      </div>

      {isVasavi && (
        <>
          <input
            type="text"
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            required
          />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="CSM">CSM</option>
            <option value="CIVIL">CIVIL</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="MECHANICAL">MECHANICAL</option>
            <option value="IT">IT</option>
          </select>
          <input
            type="text"
            placeholder="Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
          />
        </>
      )}
    </div>
  );
}
