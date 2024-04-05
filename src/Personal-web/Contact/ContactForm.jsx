import "./contact.css";

const ContactForm = () => {
  return (
    <div className="contact-me">
      <form className="contact-form">
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
