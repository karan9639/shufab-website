const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/assets/AlpineLogoColour.jpg" alt="Alpine Shoes" />
            </div>
            <p>© 2024 Alpine Shoes. All rights reserved.</p>
            <p>Established 1986</p>
          </div>

          <div className="footer-section">
            <h3>USEFUL LINKS</h3>
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#about">About Us</a>
            </p>
            <p>
              <a href="#quality">Quality</a>
            </p>
            <p>
              <a href="#compliance">Compliance</a>
            </p>
          </div>

          <div className="footer-section">
            <h3>CONTACT INFO</h3>
            <p>Alpine Group of Companies</p>
            <p>Leading manufacturer and exporter</p>
            <p>More about the Alpine Group</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
