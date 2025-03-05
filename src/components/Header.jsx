import React, { useState, useEffect } from "react";

const Topbar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Apply the theme to the body
    if (isDarkMode) {
      document.body.setAttribute("data-bs-theme", "dark");
      document.body.setAttribute("data-startbar", "dark");
    } else {
      document.body.setAttribute("data-bs-theme", "light");
      document.body.setAttribute("data-startbar", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="topbar d-print-none">
      <div className="container-xxl">
        <nav className="topbar-custom d-flex justify-content-between" id="topbar-custom">
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <li>
              {/* Toggle button for sidebar */}
              <button
                className="nav-link mobile-menu-btn nav-icon"
                onClick={toggleSidebar}
              >
                <i className="iconoir-menu-scale"></i>
              </button>
            </li>
            <li className="mx-3 welcome-text">
              <h3 className="mb-0 fw-bold text-truncate">Good Morning, James!</h3>
            </li>
          </ul>
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <li className="hide-phone app-search">
              <form role="search" action="#" method="get">
                <input type="search" name="search" className="form-control top-search mb-0" placeholder="Search here..." />
                <button type="submit"><i className="iconoir-search"></i></button>
              </form>
            </li>
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle arrow-none nav-icon"
                href="#"
                role="button"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                <img src="assets/images/flags/us_flag.jpg" alt="" className="thumb-sm rounded-circle" />
              </a>
              <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <a className="dropdown-item" href="#">
                  <img src="assets/images/flags/us_flag.jpg" alt="" height="15" className="me-2" />English
                </a>
                <a className="dropdown-item" href="#">
                  <img src="assets/images/flags/spain_flag.jpg" alt="" height="15" className="me-2" />Spanish
                </a>
                <a className="dropdown-item" href="#">
                  <img src="assets/images/flags/germany_flag.jpg" alt="" height="15" className="me-2" />German
                </a>
                <a className="dropdown-item" href="#">
                  <img src="assets/images/flags/french_flag.jpg" alt="" height="15" className="me-2" />French
                </a>
              </div>
            </li>
            <li className="topbar-item">
              <a
                className="nav-link nav-icon"
                href="#"
                onClick={toggleTheme}
                id="light-dark-mode"
              >
                {isDarkMode ? (
                  <i className="icofont-sun light-mode"></i>
                ) : (
                  <i className="icofont-moon dark-mode"></i>
                )}
              </a>
            </li>
            {/* Add other dropdowns and icons here */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Topbar;