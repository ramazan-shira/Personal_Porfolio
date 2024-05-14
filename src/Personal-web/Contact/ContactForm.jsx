import { useState } from "react";
import "./contact.css";
import "./contactDark.css";

const ContactForm = (props) => {
  const { darkMode } = props;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className={darkMode ? "contact-me dark" : "contact-me"}>
      <p>
        Open to exploring opportunities for product design collaborations or
        partnerships.
      </p>
      <div className={darkMode ? "contact-form dark" : "contact-form"}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" color="30" rows="1"></textarea>
        <button id="submit" onClick={handleSubmit}>
          Submit
        </button>
        {submitted && (
          <p className={darkMode ? "message dark" : "message"}>Message sent!</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
