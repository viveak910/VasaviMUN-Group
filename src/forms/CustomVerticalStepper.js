import React, { useState } from "react";
import PersonalDetailsStep from "./PersonalDetailsStep";
import PreferencesStep from "./PreferencesStep";
import PaymentStep from "./PaymentStep";
import "./step.css";
import "./form.css";

export default function CustomVerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isVasavi, setIsVasavi] = useState(false);
  const [rollNumber, setRollNumber] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [preference1, setPreference1] = useState("");
  const [preference2, setPreference2] = useState("");
  const [preference3, setPreference3] = useState("");
  const [country1Pref1, setCountry1Pref1] = useState("");
  const [country2Pref1, setCountry2Pref1] = useState("");
  const [country1Pref2, setCountry1Pref2] = useState("");
  const [country2Pref2, setCountry2Pref2] = useState("");
  const [country1Pref3, setCountry1Pref3] = useState("");
  const [country2Pref3, setCountry2Pref3] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const steps = [
    {
      component: (
        <PersonalDetailsStep
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
          isVasavi={isVasavi}
          setIsVasavi={setIsVasavi}
          rollNumber={rollNumber}
          setRollNumber={setRollNumber}
          year={year}
          setYear={setYear}
          branch={branch}
          setBranch={setBranch}
          section={section}
          setSection={setSection}
        />
      ),
    },
    {
      component: (
        <PreferencesStep
          preference1={preference1}
          setPreference1={setPreference1}
          preference2={preference2}
          setPreference2={setPreference2}
          preference3={preference3}
          setPreference3={setPreference3}
          country1Pref1={country1Pref1}
          setCountry1Pref1={setCountry1Pref1}
          country2Pref1={country2Pref1}
          setCountry2Pref1={setCountry2Pref1}
          country1Pref2={country1Pref2}
          setCountry1Pref2={setCountry1Pref2}
          country2Pref2={country2Pref2}
          setCountry2Pref2={setCountry2Pref2}
          country1Pref3={country1Pref3}
          setCountry1Pref3={setCountry1Pref3}
          country2Pref3={country2Pref3}
          setCountry2Pref3={setCountry2Pref3}
        />
      ),
    },
    {
      component: (
        <PaymentStep
          isVasavi={isVasavi}
          transactionId={transactionId}
          setTransactionId={setTransactionId}
        />
      ),
    },
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
    setIsVasavi(false);
    setRollNumber("");
    setYear("");
    setBranch("");
    setSection("");
    setPreference1("");
    setPreference2("");
    setPreference3("");
    setCountry1Pref1("");
    setCountry2Pref1("");
    setCountry1Pref2("");
    setCountry2Pref2("");
    setCountry1Pref3("");
    setCountry2Pref3("");
    setTransactionId("");
  };

  return (
    <div className="stepper-wrapper">
      <div className="stepper-container">
        <div className="stepper-header">
          <div className="step-header">{steps[activeStep].label}</div>
        </div>
        <div className="stepper-content">{steps[activeStep].component}</div>
        <div className="step-actions">
          {activeStep > 0 && (
            <button className="btn" onClick={handleBack}>
              Back
            </button>
          )}
          {activeStep < steps.length - 1 ? (
            <button className="btn" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className="btn" onClick={handleReset}>
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
