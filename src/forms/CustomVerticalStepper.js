import React, { useState } from "react";
import PersonalDetailsStep from "./PersonalDetailsStep";
import PreferencesStep from "./PreferencesStep";
import PaymentStep from "./PaymentStep";
import "./step.css";
import "./form.css";

export default function CustomVerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    isVasavi: false,
    rollNumber: "",
    year: "",
    branch: "",
    section: "",
    preference1: "",
    preference2: "",
    preference3: "",
    country1Pref1: "",
    country2Pref1: "",
    country1Pref2: "",
    country2Pref2: "",
    country1Pref3: "",
    country2Pref3: "",
    ipRole1: "",
    ipRole2: "",
    ipRole3: "",
    transactionId: "",
  });

  const steps = [
    {
      label: "Personal Details",
      component: (
        <PersonalDetailsStep formData={formData} setFormData={setFormData} />
      ),
    },
    {
      label: "Preferences",
      component: (
        <PreferencesStep
          formData={formData}
          setFormData={setFormData}
          onValidate={validatePreferences}
        />
      ),
    },
    {
      label: "Payment",
      component: <PaymentStep formData={formData} setFormData={setFormData} />,
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  function validatePreferences() {
    const errors = [];
    const prefs = ["preference1", "preference2", "preference3"];
    const roles = ["ipRole1", "ipRole2", "ipRole3"];
    const countries1 = ["country1Pref1", "country1Pref2", "country1Pref3"];
    const countries2 = ["country2Pref1", "country2Pref2", "country2Pref3"];

    for (let i = 0; i < prefs.length; i++) {
      if (formData[prefs[i]] !== "IP") {
        if (
          !formData[prefs[i]] ||
          !formData[countries1[i]] ||
          !formData[countries2[i]]
        ) {
          errors.push(
            `Preference ${i + 1}, Country 1, and Country 2 are required.`
          );
        } else if (formData[countries1[i]] === formData[countries2[i]]) {
          errors.push(
            `For Preference ${
              i + 1
            }, Country 1 and Country 2 must be different.`
          );
        }
      }

      if (formData[prefs[i]] === "IP" && !formData[roles[i]]) {
        errors.push(`Please select a role for IP in Preference ${i + 1}.`);
      }
    }

    if (errors.length) {
      alert(errors.join("\n"));
      return false;
    }
    return true;
  }

  const validateStep = () => {
    if (activeStep === 0) {
      if (
        !formData.name ||
        !formData.phone ||
        !formData.email ||
        !formData.address ||
        (formData.isVasavi &&
          (!formData.rollNumber ||
            !formData.year ||
            !formData.branch ||
            !formData.section))
      ) {
        alert("Please fill all required fields in Personal Details.");
        return false;
      }
    } else if (activeStep === 1) {
      if (!validatePreferences()) return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevStep) => prevStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    fetch("https://mun-registration.vercel.app/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
        setLoading(false);
        resetForm(); // Reset the form on success
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit the form. Please try again.");
        setLoading(false);
      });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      isVasavi: false,
      rollNumber: "",
      year: "",
      branch: "",
      section: "",
      preference1: "",
      preference2: "",
      preference3: "",
      country1Pref1: "",
      country2Pref1: "",
      country1Pref2: "",
      country2Pref2: "",
      country1Pref3: "",
      country2Pref3: "",
      ipRole1: "",
      ipRole2: "",
      ipRole3: "",
      transactionId: "",
    });
    setActiveStep(0);
  };

  return (
    <div className="stepper-wrapper">
      {loading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
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
      )}
    </div>
  );
}
