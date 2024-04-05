import "./navbar.css";

const Tab = () => {
  return (
    <div className="tabs">
      <button className="tab">
        <i class="fa-regular fa-user"></i>
        <span>About</span>
      </button>

      <button className="tab">
        <i class="fa-regular fa-file-lines"></i>
        <span>Resume</span>
      </button>

      <button className="tab">
        <i class="fa-solid fa-briefcase"></i>
        <span>Portfolio</span>
      </button>

      <button className="tab">
        <i class="fa-solid fa-gear"></i>
        <span>Services</span>
      </button>

      <button className="tab">
        <i class="fa-regular fa-address-book"></i>
        <span>Contact</span>
      </button>
    </div>
  );
};
export default Tab;
