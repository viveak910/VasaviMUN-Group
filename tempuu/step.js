import React, { useState } from "react";
import "./step.css";
import "./form.css";

const committees = ["DISEC", "UNHRC", "AIPPM", "MARVEL", "IP"];

export default function CustomVerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [isVasavi, setIsVasavi] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [address, setAddress] = useState("");
  const [munExperience, setMunExperience] = useState(false);
  const [experienceDetails, setExperienceDetails] = useState("");
  const [preference1, setPreference1] = useState("Preference 1");
  const [preference2, setPreference2] = useState("Preference 2");
  const [preference3, setPreference3] = useState("Preference 3");
  const [country1Pref1, setCountry1Pref1] = useState("");
  const [country2Pref1, setCountry2Pref1] = useState("");
  const [country1Pref2, setCountry1Pref2] = useState("");
  const [country2Pref2, setCountry2Pref2] = useState("");
  const [country1Pref3, setCountry1Pref3] = useState("");
  const [country2Pref3, setCountry2Pref3] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const filteredCommittees2 = committees.filter((c) => c !== preference1);
  const filteredCommittees3 = filteredCommittees2.filter(
    (c) => c !== preference2
  );

  const steps = ["Email & College", "Personal & MUN Details", "Payment"];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setEmail("");
    setIsVasavi(false);
    setName("");
    setPhone("");
    setRollNumber("");
    setMunExperience(false);
    setExperienceDetails("");
    setPreference1("");
    setPreference2("");
    setPreference3("");
    setCountry1Pref1("");
    setCountry2Pref1("");
    setCountry1Pref2("");
    setCountry2Pref2("");
    setCountry1Pref3("");
    setCountry2Pref3("");
    setTransactionId(""); // Reset transaction ID
  };

  const paymentLink = isVasavi
    ? "https://example.com/pay/1500"
    : "https://example.com/pay/2000";

  return (
    <div className="stepper-wrapper">
      <div className="stepper-container">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`step ${activeStep === index ? "active" : ""}`}
          >
            <div className="step-label">
              <div
                className={`step-circle ${
                  index < activeStep ? "completed" : ""
                }`}
              >
                {index < activeStep ? "✔" : index + 1}
              </div>
              <h3>{step}</h3>
            </div>
            <div
              className={`step-content ${activeStep === index ? "show" : ""}`}
            >
              {activeStep === 0 && (
                <>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div>
                    <label>
                      <input
                        type="radio"
                        value="vasavi"
                        checked={isVasavi}
                        onChange={() => setIsVasavi(true)}
                      />
                      Vasavi College
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="external"
                        checked={!isVasavi}
                        onChange={() => setIsVasavi(false)}
                      />
                      External Delegate
                    </label>
                  </div>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <input
                    type="text"
                    placeholder="Name"
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
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <div>
                    <br />
                    <h3>Do you have any experience in MUN?</h3>
                    <label>
                      <input
                        type="radio"
                        value="yes"
                        checked={munExperience}
                        onChange={() => setMunExperience(true)}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="no"
                        checked={!munExperience}
                        onChange={() => setMunExperience(false)}
                      />
                      No
                    </label>
                    {munExperience && (
                      <textarea
                        placeholder="Experience Details"
                        value={experienceDetails}
                        onChange={(e) => setExperienceDetails(e.target.value)}
                        required
                      />
                    )}
                  </div>

                  <div>
                    <br />
                    <h3>Committee Preference</h3>
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
                    <br></br>
                    <br></br>
                    <h3>Country Preferences : </h3>
                    <br></br>

                    <div>
                      <h4>{preference1}</h4>
                      <div className="country-preferences">
                        <input
                          type="text"
                          placeholder="Country 1"
                          value={country1Pref1}
                          onChange={(e) => setCountry1Pref3(e.target.value)}
                          required
                        />
                        <input
                          type="text"
                          placeholder="Country 2"
                          value={country2Pref1}
                          onChange={(e) => setCountry2Pref3(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <h4>{preference2}</h4>
                      <div className="country-preferences">
                        <input
                          type="text"
                          placeholder="Country 1"
                          value={country1Pref2}
                          onChange={(e) => setCountry1Pref3(e.target.value)}
                          required
                        />
                        <input
                          type="text"
                          placeholder="Country 2"
                          value={country2Pref2}
                          onChange={(e) => setCountry2Pref3(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <h4>{preference3}</h4>
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
                    </div>
                  </div>
                </>
              )}
              {activeStep === 2 && (
                <div>
                  <h2>
                    {isVasavi
                      ? "Pay the registration fee of ₹1500"
                      : "Pay the registration fee of ₹2000"}
                  </h2>
                  <a
                    href={paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to proceed with payment
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
              )}
              <div className="step-actions">
                {activeStep > 0 && (
                  <button className="btn" onClick={handleBack}>
                    Back
                  </button>
                )}
                {activeStep < steps.length - 1 && (
                  <button className="btn" onClick={handleNext}>
                    Next
                  </button>
                )}
                {activeStep === steps.length - 1 && (
                  <button className="btn" type="submit">
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        {activeStep === steps.length && (
          <div className="reset-container">
            <p>All steps completed - you're finished</p>
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
