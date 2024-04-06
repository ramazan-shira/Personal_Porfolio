const Info = () => {
  return (
    <div className="info">
      <div className="my-info">
        <div className="personal-info-icon">
          <i className="fa-solid fa-mobile"></i>
        </div>
        <div className="personal-info-data">
          <p className="personal-info-title">Phone</p>
          <p className="personal-info-content">
            <a href="tel://11234567890" className="d-flex contactme">
              <span className="contactme">+355(68)-608-1940</span>
            </a>
          </p>
        </div>
      </div>
      <div className="my-info">
        <div className="personal-info-icon">
          <i className="fa-solid fa-envelope-open-text"></i>
        </div>
        <div className="personal-info-data">
          <p className="personal-info-title">Email</p>
          <p className="personal-info-content">
            <a
              href="mailto:ramazanshira1@gmail.com"
              className="d-flex contactme"
            >
              <span className="contactme">ramazanshira1@gmail.com</span>
            </a>
          </p>
        </div>
      </div>
      <div className="my-info">
        <div className="personal-info-icon">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <div className="personal-info-data">
          <p className="personal-info-title">Location</p>
          <p className="personal-info-content">
            <span className="contactme">Tirana, Albania</span>
          </p>
        </div>
      </div>
      <div className="my-info">
        <div className="personal-info-icon">
          <i className="fa-solid fa-earth-europe"></i>
        </div>
        <div className="personal-info-data">
          <p className="personal-info-title">Website</p>
          <p className="personal-info-content">
            <a
              href="https://ramazanshira.netlify.app/"
              className="d-flex contactme"
            >
              <span className="contactme">
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
