import React from "react";

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
  preference1,
  setPreference1,
  preference2,
  setPreference2,
  preference3,
  setPreference3,
  portfolio1Pref1,
  setportfolio1Pref1,
  portfolio2Pref1,
  setportfolio2Pref1,
  portfolio1Pref2,
  setportfolio1Pref2,
  portfolio2Pref2,
  setportfolio2Pref2,
  portfolio1Pref3,
  setportfolio1Pref3,
  portfolio2Pref3,
  setportfolio2Pref3,
  ipRole1,
  setIpRole1,
  ipRole2,
  setIpRole2,
  ipRole3,
  setIpRole3,
}) {
  const ipCount =
    (preference1 === "IP" ? 1 : 0) + (preference2 === "IP" ? 1 : 0);

  const filteredCommittees2 = committees.filter(
    (c) => c !== preference1 || c === "IP"
  );

  const filteredCommittees3 =
    ipCount === 4
      ? filteredCommittees2.filter((c) => c !== "IP")
      : filteredCommittees2.filter((c) => c !== preference2 || c === "IP");

  const filteredIpRoles2 = ipRoles.filter((role) => role !== ipRole1);
  const filteredIpRoles3 = filteredIpRoles2.filter((role) => role !== ipRole2);

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
              {ipRoles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {preference1 && preference1 !== "IP" && (
        <div className="portfolio-preferences">
          <input
            type="text"
            placeholder="portfolio 1"
            value={portfolio1Pref1}
            onChange={(e) => setportfolio1Pref1(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="portfolio 2"
            value={portfolio2Pref1}
            onChange={(e) => setportfolio2Pref1(e.target.value)}
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
              {filteredIpRoles2.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {preference2 && preference2 !== "IP" && (
        <div className="portfolio-preferences">
          <input
            type="text"
            placeholder="portfolio 1"
            value={portfolio1Pref2}
            onChange={(e) => setportfolio1Pref2(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="portfolio 2"
            value={portfolio2Pref2}
            onChange={(e) => setportfolio2Pref2(e.target.value)}
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
              {filteredIpRoles3.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {preference3 && preference3 !== "IP" && (
        <div className="portfolio-preferences">
          <input
            type="text"
            placeholder="portfolio 1"
            value={portfolio1Pref3}
            onChange={(e) => setportfolio1Pref3(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="portfolio 2"
            value={portfolio2Pref3}
            onChange={(e) => setportfolio2Pref3(e.target.value)}
            required
          />
        </div>
      )}
    </div>
  );
}
