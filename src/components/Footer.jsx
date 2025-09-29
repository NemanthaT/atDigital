import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div class="footer-content">
        <div>
          <div class="footer-logo">
            <img src={Logo} alt="AT digital logo" />
          </div>
          <p class="footer-desc">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div class="footer-links">
          <div class="footer-section">
            <h3>Our Technologies</h3>
            <ul>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>Privacy Policy</span>
        <span>|</span>
        <span>Terms & Conditions</span>
      </div>
    </footer>
  );
}

export default Footer;
