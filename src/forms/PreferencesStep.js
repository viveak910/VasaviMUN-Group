import React from "react";

const committees = ["DISEC", "UNHRC", "AIPPM", "MARVEL", "IP"];

export default function PreferencesStep({
  preference1,
  setPreference1,
  preference2,
  setPreference2,
  preference3,
  setPreference3,
  country1Pref1,
  setCountry1Pref1,
  country2Pref1,
  setCountry2Pref1,
  country1Pref2,
  setCountry1Pref2,
  country2Pref2,
  setCountry2Pref2,
  country1Pref3,
  setCountry1Pref3,
  country2Pref3,
  setCountry2Pref3,
  ipRole1,
  setIpRole1,
  ipRole2,
  setIpRole2,
  ipRole3,
  setIpRole3,
}) {
  const filteredCommittees2 = committees.filter(
    (c) => c !== preference1 || c === "IP"
  );
  const filteredCommittees3 = filteredCommittees2.filter(
    (c) => c !== preference2 || c === "IP"
  );

  return (
    <div>
      <div className="hd">
        <label className="btn">
          <h3>Committee Preference</h3>
        </label>
      </div>

      {/* Preference 1 */}
      <h4>Preference 1</h4>
      <select
        value={preference1}
        onChange={(e) => setPreference1(e.target.value)}
        required
      >
        <option value="">Select Preference 1</option>
        {committees.map((committee, index) => (
          <option key={index} value={committee}>
            {committee}
          </option>
        ))}
      </select>

      {preference1 === "IP" && (
        <div className="ip-role">
          <label>
            <select
              value={ipRole1}
              onChange={(e) => setIpRole1(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="Reporter">Reporter</option>
              <option value="Photographer">Photographer</option>
            </select>
          </label>
        </div>
      )}

      {preference1 && preference1 !== "IP" && (
        <div className="country-preferences">
          <input
            type="text"
            placeholder="Country 1"
            value={country1Pref1}
            onChange={(e) => setCountry1Pref1(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Country 2"
            value={country2Pref1}
            onChange={(e) => setCountry2Pref1(e.target.value)}
            required
          />
        </div>
      )}

      <br></br>
      <br></br>

      {/* Preference 2 */}
      <h4>Preference 2</h4>
      <select
        value={preference2}
        onChange={(e) => setPreference2(e.target.value)}
        required
        disabled={!preference1}
      >
        <option value="">Select Preference 2</option>
        {filteredCommittees2.map((committee, index) => (
          <option key={index} value={committee}>
            {committee}
          </option>
        ))}
      </select>

      {preference2 === "IP" && (
        <div className="ip-role">
          <label>
            <select
              value={ipRole2}
              onChange={(e) => setIpRole2(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="Reporter">Reporter</option>
              <option value="Photographer">Photographer</option>
            </select>
          </label>
        </div>
      )}

      {preference2 && preference2 !== "IP" && (
        <div className="country-preferences">
          <input
            type="text"
            placeholder="Country 1"
            value={country1Pref2}
            onChange={(e) => setCountry1Pref2(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Country 2"
            value={country2Pref2}
            onChange={(e) => setCountry2Pref2(e.target.value)}
            required
          />
        </div>
      )}

      <br></br>
      <br></br>

      {/* Preference 3 */}
      <h4>Preference 3</h4>
      <select
        value={preference3}
        onChange={(e) => setPreference3(e.target.value)}
        required
        disabled={!preference2}
      >
        <option value="">Select Preference 3</option>
        {filteredCommittees3.map((committee, index) => (
          <option key={index} value={committee}>
            {committee}
          </option>
        ))}
      </select>

      {preference3 === "IP" && (
        <div className="ip-role">
          <label>
            <select
              value={ipRole3}
              onChange={(e) => setIpRole3(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="Reporter">Reporter</option>
              <option value="Photographer">Photographer</option>
            </select>
          </label>
        </div>
      )}

      {preference3 && preference3 !== "IP" && (
        <div className="country-preferences">
          <input
            type="text"
            placeholder="Country 1"
            value={country1Pref3}
            onChange={(e) => setCountry1Pref3(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Country 2"
            value={country2Pref3}
            onChange={(e) => setCountry2Pref3(e.target.value)}
            required
          />
        </div>
      )}
    </div>
  );
}
