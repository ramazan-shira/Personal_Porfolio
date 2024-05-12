import "./personalInfoDark.css";

const Info = (props) => {
  const { darkMode } = props;

  return (
    <div className={darkMode ? "info dark" : "info"}>
      <div className={darkMode ? "my-info dark" : "my-info"}>
        <div
          className={
            darkMode ? "personal-info-icon dark" : "personal-info-icon"
          }
        >
          <i className="fa-solid fa-mobile"></i>
        </div>
        <div
          className={
            darkMode ? "personal-info-data dark" : "personal-info-data"
          }
        >
          <p className="personal-info-title">Phone</p>
          <p
            className={
              darkMode ? "personal-info-content dark" : "personal-info-content"
            }
          >
            <a href="tel://11234567890" className="d-flex contactme">
              <span className="contactme">+355(68)-608-1940</span>
            </a>
          </p>
        </div>
      </div>
      <div className={darkMode ? "my-info dark" : "my-info"}>
        <div
          className={
            darkMode ? "personal-info-icon dark" : "personal-info-icon"
          }
        >
          <i className="fa-solid fa-envelope-open-text"></i>
        </div>
        <div
          className={
            darkMode ? "personal-info-data dark" : "personal-info-data"
          }
        >
          <p className="personal-info-title">Email</p>
          <p
            className={
              darkMode ? "personal-info-content dark" : "personal-info-content"
            }
          >
            <a
              href="mailto:ramazanshira1@gmail.com"
              className="d-flex contactme"
            >
              <span className="contactme email">ramazanshira1@gmail.com</span>
            </a>
          </p>
        </div>
      </div>
      <div className={darkMode ? "my-info dark" : "my-info"}>
        <div
          className={
            darkMode ? "personal-info-icon dark" : "personal-info-icon"
          }
        >
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div
          className={
            darkMode ? "personal-info-data dark" : "personal-info-data"
          }
        >
          <p className="personal-info-title">Location</p>
          <p
            className={
              darkMode ? "personal-info-content dark" : "personal-info-content"
            }
          >
            <span className="contactme">Tirana, Albania</span>
          </p>
        </div>
      </div>
      <div className={darkMode ? "my-info dark" : "my-info"}>
        <div
          className={
            darkMode ? "personal-info-icon dark" : "personal-info-icon"
          }
        >
          <i className="fa-solid fa-earth-europe"></i>
        </div>
        <div
          className={
            darkMode ? "personal-info-data dark" : "personal-info-data"
          }
        >
          <p className="personal-info-title">Website</p>
          <p
            className={
              darkMode ? "personal-info-content dark" : "personal-info-content"
            }
          >
            <a
              href="https://ramazanshira.netlify.app/"
              className="d-flex contactme"
            >
              <span className="contactme website">
                https://ramazanshira.netlify.app/
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Info;
