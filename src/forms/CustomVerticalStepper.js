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
  const [ipRole1, setIpRole1] = useState("");
  const [ipRole2, setIpRole2] = useState("");
  const [ipRole3, setIpRole3] = useState("");
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
          ipRole1={ipRole1}
          setIpRole1={setIpRole1}
          ipRole2={ipRole2}
          setIpRole2={setIpRole2}
          ipRole3={ipRole3}
          setIpRole3={setIpRole3}
          onValidate={() => {
            const errors = [];
            if (preference1 !== "IP") {
              if (!preference1 || !country1Pref1 || !country2Pref1) {
                errors.push(
                  "Preference 1, Country 1, and Country 2 are required."
                );
              } else if (country1Pref1 === country2Pref1) {
                errors.push(
                  "For Preference 1, Country 1 and Country 2 must be different."
                );
              }
            }

            if (preference2 !== "IP") {
              if (!preference2 || !country1Pref2 || !country2Pref2) {
                errors.push(
                  "Preference 2, Country 1, and Country 2 are required."
                );
              } else if (country1Pref2 === country2Pref2) {
                errors.push(
                  "For Preference 2, Country 1 and Country 2 must be different."
                );
              }
            }

            if (preference3 !== "IP") {
              if (!preference3 || !country1Pref3 || !country2Pref3) {
                errors.push(
                  "Preference 3, Country 1, and Country 2 are required."
                );
              } else if (country1Pref3 === country2Pref3) {
                errors.push(
                  "For Preference 3, Country 1 and Country 2 must be different."
                );
              }
            }

            if (preference1 === "IP" && !ipRole1) {
              errors.push("Please select a role for IP in Preference 1.");
            }

            if (preference2 === "IP" && !ipRole2) {
              errors.push("Please select a role for IP in Preference 2.");
            }

            if (preference3 === "IP" && !ipRole3) {
              errors.push("Please select a role for IP in Preference 3.");
            }

            if (errors.length) {
              alert(errors.join("\n"));
              return false;
            }
            return true;
          }}
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

  const validateStep = () => {
    if (activeStep === 0) {
      // Personal Details validation
      if (
        !name ||
        !phone ||
        !email ||
        !address ||
        (isVasavi && (!rollNumber || !year || !branch || !section))
      ) {
        alert("Please fill all required fields in Personal Details.");
        return false;
      }
    } else if (activeStep === 1) {
      // Preferences validation
      const preferencesValid = steps[1].component.props.onValidate();
      if (!preferencesValid) return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
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

  const handleSubmit = () => {
    // Example of submitting the data to a server or backend endpoint
    const formData = {
      name,
      phone,
      email,
      address,
      isVasavi,
      rollNumber,
      year,
      branch,
      section,
      preference1,
      preference2,
      preference3,
      country1Pref1,
      country2Pref1,
      country1Pref2,
      country2Pref2,
      country1Pref3,
      country2Pref3,
      ipRole1,
      ipRole2,
      ipRole3,
      transactionId,
    };

    console.log("Submitting form data:", formData);

    fetch("https://mun-data.vercel.app/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit the form. Please try again.");
      });
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
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
