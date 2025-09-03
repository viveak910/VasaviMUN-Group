import React, { useState } from "react";

import PersonalDetailsStep from "./PersonalDetailsStep";
import PreferencesStep from "./PreferencesStep";
import PaymentStep from "./PaymentStep";
import "./step.css";
import "./form.css";

export default function CustomVerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isVasavi, setIsVasavi] = useState(false);
  const [rollNumber, setRollNumber] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [munExperienceDetails, setMunExperienceDetails] = useState("");
  const [participantsCount, setParticipantsCount] = useState(8);
  const [amount, setAmount] = useState("");
  const [teamName, setTeamName] = useState("");
  const [participants, setParticipants] = useState(
    Array.from({ length: participantsCount }, () => ({
      name: "",
      phone: "",
      email: "",
      preference: "",
      portfolio1: "",
      portfolio2: "",
      ipRole: "",
    }))
  );
  const [utr, setUtr] = useState(""); 

  const validatePreferences = () => {
    const errors = [];
    const selectedCommittees = new Set();

    participants.forEach((participant, index) => {
      if (!participant.name.trim()) {
        errors.push(`Participant ${index + 1}: Name is required.`);
      }

      if (!participant.preference) {
        errors.push(`Participant ${index + 1}: Preference is required.`);
      } else {
        selectedCommittees.add(participant.preference);

        if (participant.preference !== "IP") {
          if (
            !participant.portfolio1.trim() ||
            !participant.portfolio2.trim()
          ) {
            errors.push(
              `Participant ${
                index + 1
              }: Both portfolio 1 and 2 are required for preference ${
                participant.preference
              }.`
            );
          } else if (
            participant.portfolio1.trim().toLowerCase() ===
            participant.portfolio2.trim().toLowerCase()
          ) {
            errors.push(
              `Participant ${
                index + 1
              }: Portfolio 1 and Portfolio 2 must be different for preference ${
                participant.preference
              }.`
            );
          }
        }

        if (participant.preference === "IP" && !participant.ipRole) {
          errors.push(`Participant ${index + 1}: Please select a role for IP.`);
        }
      }
    });

    const committees = ["DISEC", "AIPPM", "UNCSW","CCC","ECOSOC",  "IP"];
    committees.forEach((committee) => {
      if (!selectedCommittees.has(committee)) {
        errors.push(
          `At least one participant must select the preference "${committee}".`
        );
      }
    });

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }

    return true;
  };

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
          instituteName={instituteName}
          setInstituteName={setInstituteName}
          munExperienceDetails={munExperienceDetails}
          setMunExperienceDetails={setMunExperienceDetails}
          teamName={teamName}
          setTeamName={setTeamName}
        />
      ),
    },
    {
      component: (
        <PreferencesStep
          participantsCount={participantsCount}
          setParticipantsCount={setParticipantsCount}
          participants={participants}
          setParticipants={setParticipants}
        />
      ),
    },
    {
      component: (
        <PaymentStep
          isVasavi={isVasavi}
          transactionId={transactionId}
          setTransactionId={setTransactionId}
          driveLink={driveLink}
          setDriveLink={setDriveLink}
          participantsCount={participantsCount}
          amount={amount}
          setAmount={setAmount}
          utr={utr}
          setUtr={setUtr}
        />
      ),
    },
  ];

  const validateStep = () => {
    if (activeStep === 0) {
      const phoneRegex = /^[0-9]{10}$/;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const rollNumberRegex =
        /^[0-9]{4}-[0-9A-Za-z]{2}-[0-9A-Za-z]{3}-[0-9A-Za-z]{3}$/;

      if (!name) {
        alert("Please fill in your name.");
        return false;
      }

      if (!phone) {
        alert("Please fill in your phone number.");
        return false;
      }
      if (!teamName) {
        alert("Please enter Group delegation name");
        return false;
      }

      if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
      }

      if (!email) {
        alert("Please fill in your email.");
        return false;
      }
      if (!instituteName) {
        alert("Enter your institute name");
        return false;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      if (!address) {
        alert("Please fill in your address.");
        return false;
      }
      if (!instituteName) {
      }

      if (isVasavi) {
        if (!rollNumber) {
          alert("Please fill in your roll number.");
          return false;
        }

        if (!rollNumberRegex.test(rollNumber)) {
          alert("Roll number must be in the format 1602-2X-XXX-XXX.");
          return false;
        }

        if (!year) {
          alert("Please select your year.");
          return false;
        }
        if (!munExperienceDetails) {
          alert("Fill in MUN Experience");
          return false;
        }
        if (!branch) {
          alert("Please select your branch.");
          return false;
        }

        if (!section) {
          alert("Please select your section.");
          return false;
        }
      }

      return true;
    } else if (activeStep === 1) {
      const preferencesValid = validatePreferences();
      if (!preferencesValid) return false;
    } else if (activeStep === 2) {
      if (!transactionId) {
        alert("Transaction ID is required.");
        return false;
      }
      if (!driveLink) {
        alert("Drive link is required.");
        return false;
      }

      const driveUrlPattern =
        /https:\/\/drive\.google\.com\/(?:file\/d\/|drive\/folders\/)([-\w]+)/;

      
     
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
    if (validateStep()) {
      setLoading(true);

      const formData = {
        name,
        phone,
        email,
        teamName,
        address,
        instituteName,
        munExperienceDetails,
        rollNumber,
        year,
        branch,
        section,
        participants,
        amount,
        transactionId,
        driveLink,
        utr,
      };

      console.log("Submitting form data:", formData);

      fetch("https://mun-dat.onrender.com/groupregister", {
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
          resetForm();
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to submit the form. Please try again.");
          setLoading(false);
        });
    }
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMunExperienceDetails("");
    setTeamName("");
    setInstituteName("");
    setAddress("");
    setIsVasavi(false);
    setRollNumber("");
    setYear("");
    setBranch("");
    setSection("");
    setTransactionId("");
    setDriveLink("");
    setActiveStep(0);
    setParticipantsCount(8);
    setAmount("");
    setParticipants(
      Array.from({ length: participantsCount }, () => ({
        name: "",
        preference: "",
        portfolio1: "",
        portfolio2: "",
        ipRole: "",
      }))
    );
  };

  return (
    <div className="stepper-wrapper">
      {loading ? (
        <>
          <div className="loader-container">
            <div className="pulsing-circle"></div>
            <p>Submitting Response</p>
          </div>
        </>
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
