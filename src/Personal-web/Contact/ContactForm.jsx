import "./contact.css";
import "./contactDark.css";

const ContactForm = (props) => {
  const { darkMode } = props;

  return (
    <div className={darkMode ? "contact-me dark" : "contact-me"}>
      <p>
        Open to exploring opportunities for product design collaborations or
        partnerships.
      </p>
      <form className={darkMode ? "contact-form dark" : "contact-form"}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message" color="30" rows="1"></textarea>
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
