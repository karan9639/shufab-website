const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/assets/AlpineLogoColour.jpg" alt="Alpine Shoes" />
          </div>
          <ul className="nav-menu">
            <li>
              <a href="#home" className="nav-link">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#quality" className="nav-link">
                QUALITY
              </a>
            </li>
            <li>
              <a href="#compliance" className="nav-link">
                COMPLIANCE
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
