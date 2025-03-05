import React, { useState } from "react";

const Sidebar = ({ isSidebarOpen }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={`startbar d-print-none ${isSidebarOpen ? "open" : "closed"}`}>
      <div className="brand">
        <a href="index.html" className="logo">
          <span>
            <img src="assets/images/logo-sm.png" alt="logo-small" className="logo-sm" />
          </span>
          <span className="">
            <img src="assets/images/logo-light.png" alt="logo-large" className="logo-lg logo-light" />
            <img src="assets/images/logo-dark.png" alt="logo-large" className="logo-lg logo-dark" />
          </span>
        </a>
      </div>
      <div className="startbar-menu">
        <div className="startbar-collapse" id="startbarCollapse" data-simplebar>
          <div className="d-flex align-items-start flex-column w-100">
            <ul className="navbar-nav mb-auto w-100">
              <li className="menu-label pt-0 mt-0">
                <span>Main Menu</span>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#sidebarDashboards"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    toggleMenu("sidebarDashboards");
                  }}
                  aria-expanded={openMenus["sidebarDashboards"]}
                >
                  <i className="iconoir-home-simple menu-icon"></i>
                  <span>Dashboards</span>
                </a>
                <div className={`collapse ${openMenus["sidebarDashboards"] ? "show" : ""}`} id="sidebarDashboards">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">Analytics</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="ecommerce-index.html">Ecommerce</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Add other menu items here */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#sidebarApplications"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default link behavior
                    toggleMenu("sidebarApplications");
                  }}
                  aria-expanded={openMenus["sidebarApplications"]}
                >
                  <i className="iconoir-view-grid menu-icon"></i>
                  <span>Applications</span>
                </a>
                <div className={`collapse ${openMenus["sidebarApplications"] ? "show" : ""}`} id="sidebarApplications">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="apps-chat.html">Chat</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="apps-calendar.html">Calendar</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="update-msg text-center">
              <div className="d-flex justify-content-center align-items-center thumb-lg update-icon-box rounded-circle mx-auto">
                <i className="iconoir-peace-hand h3 align-self-center mb-0 text-primary"></i>
              </div>
              <h5 className="mt-3">Mannat Themes</h5>
              <p className="mb-3 text-muted">Rizz is a high quality web application.</p>
              <a href="javascript: void(0);" className="btn text-primary shadow-sm rounded-pill">Upgrade your plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;