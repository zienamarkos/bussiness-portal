import React, { useState, useEffect } from "react";
import "../css/ForgotPassword.css";
import axios from "axios";


function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/captcha")
      .then((response) => {
        setGeneratedCaptcha(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/validate-captcha", { captchaInput: captcha })
      .then((response) => {
        if (response.data.valid && phoneNumber !== "") {
          console.log("Forgot password submitted!");
        } else {
          setErrorMessage(
            "Incorrect captcha or phone number, please try again."
          );
          axios
            .get("/api/captcha")
            .then((response) => {
              setGeneratedCaptcha(response.data);
              setCaptcha("");
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <br />
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="captcha">Captcha:</label>
          <br />
          <div className="captcha-container">
            <input
              type="text"
              id="captcha"
              value={captcha}
              onChange={(event) => setCaptcha(event.target.value)}
              required
            />
            <img
              src={`data:image/png;base64,${generatedCaptcha}`}
              alt="Captcha"
            />
          </div>
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
