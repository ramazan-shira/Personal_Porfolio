import Navbar from "./Navbar/Navbar";
import "./personal-web.css";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Web = () => {
  return (
    <div className="personal-web-container">
      <Navbar />
      <div className="personal-web-content">
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default Web;
