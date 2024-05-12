import ContactForm from "./ContactForm";
import "./contact.css";
import "./contactDark.css";

const Contact = (props) => {
  const { darkMode } = props;
  return (
    <div className={darkMode ? "contact dark" : "contact"} id="contact">
      <h1>Contact</h1>

      <ContactForm darkMode={darkMode} />
    </div>
  );
};
export default Contact;
