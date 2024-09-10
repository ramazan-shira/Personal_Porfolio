import { useState } from "react";
import "./contact.css";
import "./contactDark.css";
import axios from "axios";

const ContactForm = (props) => {
  const { darkMode } = props;

  const [valid, setValid] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const fullNameLengthRegex = /^.{3,}\s.{3,}$/;
  const fullNameCharacterRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
  const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;

    if (name === "") {
      setNameError("First name and last name cannot be empty!");
      formIsValid = false;
    } else if (!fullNameLengthRegex.test(name)) {
      setNameError("First name and last name must have at least 3 letters!");
      formIsValid = false;
    } else if (!fullNameCharacterRegex.test(name)) {
      setNameError("First name and last name can contain only letters!");
      formIsValid = false;
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Email cannot be empty!");
      formIsValid = false;
    } else if (!regEmail.test(email)) {
      setEmailError("Invalid email address!");
      formIsValid = false;
    } else {
      setEmailError("");
    }

    if (message === "") {
      setMessageError("Message cannot be empty!");
      formIsValid = false;
    } else if (message.length <= 10) {
      setMessageError("Message should have at least 10 characters!");
      formIsValid = false;
    } else {
      setMessageError("");
    }

    if (formIsValid) {
      try {
        await axios.post(
          "https://portfolio-backend-production-a00d.up.railway.app/send-email",
          {
            name,
            email,
            message,
          }
        );
        setValid(true);
        setName("");
        setEmail("");
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
        setValid(false);
      }
    } else {
      setValid(false);
    }
  };

  return (
    <div className={darkMode ? "contact-me dark" : "contact-me"}>
      <p>
        Transforming ideas into powerful software solutions. Let's create the
        future of technology together!
      </p>
      <div className={darkMode ? "contact-form dark" : "contact-form"}>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <span className="error">{nameError}</span>
          <br />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <span className="error">{emailError}</span>
        </div>

        <div>
          <textarea
            placeholder="Message"
            color="30"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <span className="error">{messageError}</span>
        </div>

        <button id="submit" onClick={handleSubmit}>
          Submit
        </button>
        {valid && (
          <p className={darkMode ? "message dark" : "message"}>Message sent!</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
