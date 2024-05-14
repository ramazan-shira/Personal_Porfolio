import "./footer.css";
const Footer = (props) => {
  const { darkMode } = props;

  return (
    <div className={darkMode ? "footer dark" : "footer"}>
      <p>
        &copy; Copyright <strong>Ramazan Shira</strong>
        <br /> All rights reserved
      </p>
    </div>
  );
};

export default Footer;
