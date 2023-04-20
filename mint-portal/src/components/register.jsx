
import React, { useState, useEffect } from "react";
import "../css/BusinessRegistration.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Register(){
    
  const [firstName, setFirstName] = useState("");
  const [middleName, setmiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Generate a random 5-digit number for the captcha
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
    <div className="registration-container">
      <div className="registration-box">
        <h1 className="registration-title">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName"> Your name:</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="middleName"> Father's name:</label>
            <input type="text" id="middleName" value={middleName} onChange={(e) => setmiddleName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName"> Grand Father's name:</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber"> mobile:</label>
            <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password"> Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword"> Confirm Password:</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
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
          <button type="submit" className="register-button">Register</button>
          <p>If you already have account</p>
          <button className="login-button" ><Link to="/login">Login</Link> </button>

        </form>
      </div>
    </div>
  );
}

export default Register;