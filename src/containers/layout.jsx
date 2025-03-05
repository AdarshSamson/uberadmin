import React, { Suspense,useState,useRef,useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from '../routes';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../containers/main';
import Page404 from '../pages/404';
import Dashboard from '../pages/dashboard';


const BASE_URL = '';

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navbarRef = useRef(null);

  // Theme Switching
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  


  // Sidebar Toggling
  const toggleSidebar = () => {
    const newSize = isSidebarCollapsed ? "default" : "collapsed";
    document.body.setAttribute("data-sidebar-size", newSize);
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  // Close Sidebar on Overlay Click
  const handleSidebarOverlayClick = () => {
    document.body.setAttribute("data-sidebar-size", "collapsed");
    setIsSidebarCollapsed(true);
  };

  // Handle Window Resize for Sidebar
  const handleResize = () => {
    if (window.innerWidth >= 310 && window.innerWidth <= 1440) {
      document.body.setAttribute("data-sidebar-size", "collapsed");
      setIsSidebarCollapsed(true);
    } else {
      document.body.setAttribute("data-sidebar-size", "default");
      setIsSidebarCollapsed(false);
    }
  };

  // Initialize Tooltips and Popovers
  const initializeTooltipsAndPopovers = () => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

    [...tooltipTriggerList].map((el) => new Tooltip(el));
    [...popoverTriggerList].map((el) => new Popover(el));
  };

  // Navbar Sticky Behavior
  const handleScroll = () => {
    const navbar = navbarRef.current;
    if (navbar) {
      if (window.scrollY >= 50) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    }
  };

  // Vertical Menu Initialization
  const initializeVerticalMenu = () => {
    const collapseElements = document.querySelectorAll(".navbar-nav li .collapse");
    const collapseLinks = document.querySelectorAll(".navbar-nav li [data-bs-toggle='collapse']");

    // Handle Collapse Links
    collapseLinks.forEach((link) => {
      link.addEventListener("click", (e) => e.preventDefault());
    });

    // Handle Collapse Show/Hide
    collapseElements.forEach((collapse) => {
      collapse.addEventListener("show.bs.collapse", (e) => {
        const openCollapse = e.target.closest(".collapse.show");
        document.querySelectorAll(".navbar-nav .collapse.show").forEach((el) => {
          if (el !== e.target && el !== openCollapse) {
            new bootstrap.Collapse(el).hide();
          }
        });
      });
    });

    // Handle Active Links
    const activeLink = document.querySelector(".navbar-nav a.active");
    if (activeLink) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Effects
  useEffect(() => {
    // Initialize Tooltips and Popovers
    initializeTooltipsAndPopovers();

    // Handle Window Resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call

    // Handle Scroll for Sticky Navbar
    window.addEventListener("scroll", handleScroll);

    // Initialize Vertical Menu
    initializeVerticalMenu();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    // <div className="page-wrapper">
    //    <Header toggleSidebar={toggleSidebar}/>
    //   <Sidebar isSidebarOpen={isSidebarOpen}/>
     
       
       
    //       <Suspense>
    //         <Routes>
    //           {routes.map((route, i) =>
    //             route.component ? (
    //               <Route
    //                 key={i}
    //                 path={`${BASE_URL}${route.path}`}
    //                 element={<route.component />}
    //               />
    //             ) : null
    //           )}
    //           <Route path={BASE_URL} element={<Navigate to={`${BASE_URL}/dashboard`} replace />} />
    //           <Route path="*" element={<Page404 />} />
    //         </Routes>
    //       </Suspense>
       
    //     <Footer />
    
    // </div>
    <>
    <div className="topbar d-print-none">
    <div className="container-xxl">
      <nav
        className="topbar-custom d-flex justify-content-between"
        id="topbar-custom"
      >
        <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
          <li>
            <button
              className="nav-link mobile-menu-btn nav-icon"
              id="togglemenu"
              onClick={toggleSidebar}
            >
              <i className="iconoir-menu-scale" />
            </button>
          </li>
          <li className="mx-3 welcome-text">
            <h3 className="mb-0 fw-bold text-truncate">Good Morning, James!</h3>
            {/* <h6 class="mb-0 fw-normal text-muted text-truncate fs-14">Here's your overview this week.</h6> */}
          </li>
        </ul>
        <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
          <li className="hide-phone app-search">
            <form role="search" action="#" method="get">
              <input
                type="search"
                name="search"
                className="form-control top-search mb-0"
                placeholder="Search here..."
              />
              <button type="submit">
                <i className="iconoir-search" />
              </button>
            </form>
          </li>
          <li className="dropdown">
            <a
              className="nav-link dropdown-toggle arrow-none nav-icon"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/flags/us_flag.jpg"
                alt=""
                className="thumb-sm rounded-circle"
              />
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                <img
                  src="assets/images/flags/us_flag.jpg"
                  alt=""
                  height={15}
                  className="me-2"
                />
                English
              </a>
              <a className="dropdown-item" href="#">
                <img
                  src="assets/images/flags/spain_flag.jpg"
                  alt=""
                  height={15}
                  className="me-2"
                />
                Spanish
              </a>
              <a className="dropdown-item" href="#">
                <img
                  src="assets/images/flags/germany_flag.jpg"
                  alt=""
                  height={15}
                  className="me-2"
                />
                German
              </a>
              <a className="dropdown-item" href="#">
                <img
                  src="assets/images/flags/french_flag.jpg"
                  alt=""
                  height={15}
                  className="me-2"
                />
                French
              </a>
            </div>
          </li>
          {/*end topbar-language*/}
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
          <li className="dropdown topbar-item">
            <a
              className="nav-link dropdown-toggle arrow-none nav-icon"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="icofont-bell-alt" />
              <span className="alert-badge" />
            </a>
            <div className="dropdown-menu stop dropdown-menu-end dropdown-lg py-0">
              <h5 className="dropdown-item-text m-0 py-3 d-flex justify-content-between align-items-center">
                Notifications{" "}
                <a href="#" className="badge text-body-tertiary badge-pill">
                  <i className="iconoir-plus-circle fs-4" />
                </a>
              </h5>
              <ul
                className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link mx-0 active"
                    data-bs-toggle="tab"
                    href="#All"
                    role="tab"
                    aria-selected="true"
                  >
                    All{" "}
                    <span className="badge bg-primary-subtle text-primary badge-pill ms-1">
                      24
                    </span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link mx-0"
                    data-bs-toggle="tab"
                    href="#Projects"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link mx-0"
                    data-bs-toggle="tab"
                    href="#Teams"
                    role="tab"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Team
                  </a>
                </li>
              </ul>
              <div
                className="ms-0"
                style={{ maxHeight: 230 }}
                data-simplebar=""
              >
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="All"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                    tabIndex={0}
                  >
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        2 min ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-wolf fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            Your order is placed
                          </h6>
                          <small className="text-muted mb-0">
                            Dummy text of the printing and industry.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        10 min ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-apple-swift fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            Meeting with designers
                          </h6>
                          <small className="text-muted mb-0">
                            It is a long established fact that a reader.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        40 min ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-birthday-cake fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            UX 3 Task complete.
                          </h6>
                          <small className="text-muted mb-0">
                            Dummy text of the printing.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        1 hr ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-drone fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            Your order is placed
                          </h6>
                          <small className="text-muted mb-0">
                            It is a long established fact that a reader.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        2 hrs ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-user fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            Payment Successfull
                          </h6>
                          <small className="text-muted mb-0">
                            Dummy text of the printing.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Projects"
                    role="tabpanel"
                    aria-labelledby="projects-tab"
                    tabIndex={0}
                  >
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        40 min ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-birthday-cake fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            UX 3 Task complete.
                          </h6>
                          <small className="text-muted mb-0">
                            Dummy text of the printing.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        1 hr ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-drone fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            Your order is placed
                          </h6>
                          <small className="text-muted mb-0">
                            It is a long established fact that a reader.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        2 hrs ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-user fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            Payment Successfull
                          </h6>
                          <small className="text-muted mb-0">
                            Dummy text of the printing.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Teams"
                    role="tabpanel"
                    aria-labelledby="teams-tab"
                    tabIndex={0}
                  >
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        1 hr ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-drone fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            Your order is placed
                          </h6>
                          <small className="text-muted mb-0">
                            It is a long established fact that a reader.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                    {/* item*/}
                    <a href="#" className="dropdown-item py-3">
                      <small className="float-end text-muted ps-2">
                        2 hrs ago
                      </small>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                          <i className="iconoir-user fs-4" />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h6 className="my-0 fw-normal text-dark fs-13">
                            Payment Successfull
                          </h6>
                          <small className="text-muted mb-0">
                            Dummy text of the printing.
                          </small>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </a>
                    {/*end-item*/}
                  </div>
                </div>
              </div>
              {/* All*/}
              <a
                href="pages-notifications.html"
                className="dropdown-item text-center text-dark fs-13 py-2"
              >
                View All <i className="fi-arrow-right" />
              </a>
            </div>
          </li>
          <li className="dropdown topbar-item">
            <a
              className="nav-link dropdown-toggle arrow-none nav-icon"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img
                src="assets/images/users/avatar-1.jpg"
                alt=""
                className="thumb-lg rounded-circle"
              />
            </a>
            <div className="dropdown-menu dropdown-menu-end py-0">
              <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                <div className="flex-shrink-0">
                  <img
                    src="assets/images/users/avatar-1.jpg"
                    alt=""
                    className="thumb-md rounded-circle"
                  />
                </div>
                <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                  <h6 className="my-0 fw-medium text-dark fs-13">
                    William Martin
                  </h6>
                  <small className="text-muted mb-0">Front End Developer</small>
                </div>
                {/*end media-body*/}
              </div>
              <div className="dropdown-divider mt-0" />
              <small className="text-muted px-2 pb-1 d-block">Account</small>
              <a className="dropdown-item" href="pages-profile.html">
                <i className="las la-user fs-18 me-1 align-text-bottom" />{" "}
                Profile
              </a>
              <a className="dropdown-item" href="pages-faq.html">
                <i className="las la-wallet fs-18 me-1 align-text-bottom" />{" "}
                Earning
              </a>
              <small className="text-muted px-2 py-1 d-block">Settings</small>
              <a className="dropdown-item" href="pages-profile.html">
                <i className="las la-cog fs-18 me-1 align-text-bottom" />
                Account Settings
              </a>
              <a className="dropdown-item" href="pages-profile.html">
                <i className="las la-lock fs-18 me-1 align-text-bottom" />{" "}
                Security
              </a>
              <a className="dropdown-item" href="pages-faq.html">
                <i className="las la-question-circle fs-18 me-1 align-text-bottom" />{" "}
                Help Center
              </a>
              <div className="dropdown-divider mb-0" />
              <a className="dropdown-item text-danger" href="auth-login.html">
                <i className="las la-power-off fs-18 me-1 align-text-bottom" />{" "}
                Logout
              </a>
            </div>
          </li>
        </ul>
        {/*end topbar-nav*/}
      </nav>
      {/* end navbar*/}
    </div>
  </div>
  {/* Top Bar End */}
  {/* leftbar-tab-menu */}
  <div className="startbar d-print-none">
    {/*start brand*/}
    <div className="brand">
      <a href="index.html" className="logo">
        <span>
          <img
            src="assets/images/logo-sm.png"
            alt="logo-small"
            className="logo-sm"
          />
        </span>
        <span className="">
          <img
            src="assets/images/logo-light.png"
            alt="logo-large"
            className="logo-lg logo-light"
          />
          <img
            src="assets/images/logo-dark.png"
            alt="logo-large"
            className="logo-lg logo-dark"
          />
        </span>
      </a>
    </div>
    {/*end brand*/}
    {/*start startbar-menu*/}
    <div className="startbar-menu">
      <div
        className="startbar-collapse"
        id="startbarCollapse"
        data-simplebar=""
      >
        <div className="d-flex align-items-start flex-column w-100">
          {/* Navigation */}
          <ul className="navbar-nav mb-auto w-100">
            <li className="menu-label pt-0 mt-0">
              {/* <small class="label-border">
                          <div class="border_left hidden-xs"></div>
                          <div class="border_right"></div>
                      </small> */}
              <span>Main Menu</span>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarDashboards"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarDashboards"
              >
                <i className="iconoir-home-simple menu-icon" />
                <span>Dashboards</span>
              </a>
              <div className="collapse " id="sidebarDashboards">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Analytics
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ecommerce-index.html">
                      Ecommerce
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarDashboards*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarApplications"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarApplications"
              >
                <i className="iconoir-view-grid menu-icon" />
                <span>Applications</span>
              </a>
              <div className="collapse " id="sidebarApplications">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarAnalytics"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarAnalytics"
                    >
                      <span>Analytics</span>
                    </a>
                    <div className="collapse " id="sidebarAnalytics">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            href="analytics-customers.html"
                            className="nav-link "
                          >
                            Customers
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a
                            href="analytics-reports.html"
                            className="nav-link "
                          >
                            Reports
                          </a>
                        </li>
                        {/*end nav-item*/}
                      </ul>
                      {/*end nav*/}
                    </div>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarProjects"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarProjects"
                    >
                      <span>Projects</span>
                    </a>
                    <div className="collapse " id="sidebarProjects">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="projects-clients.html">
                            Clients
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-team.html">
                            Team
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-project.html">
                            Project
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-task.html">
                            Task
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="projects-kanban-board.html"
                          >
                            Kanban Board
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-chat.html">
                            Chat
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-users.html">
                            Users
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="projects-create.html">
                            Project Create
                          </a>
                        </li>
                        {/*end nav-item*/}
                      </ul>
                      {/*end nav*/}
                    </div>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarEcommerce"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarEcommerce"
                    >
                      <span>Ecommerce</span>
                    </a>
                    <div className="collapse " id="sidebarEcommerce">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="ecommerce-products.html"
                          >
                            Products
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="ecommerce-customers.html"
                          >
                            Customers
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="ecommerce-customer-details.html"
                          >
                            Customer Details
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="ecommerce-orders.html">
                            Orders
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="ecommerce-order-details.html"
                          >
                            Order Details
                          </a>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <a className="nav-link" href="ecommerce-refunds.html">
                            Refunds
                          </a>
                        </li>
                        {/*end nav-item*/}
                      </ul>
                      {/*end nav*/}
                    </div>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="apps-chat.html">
                      Chat
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="apps-contact-list.html">
                      Contact List
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="apps-calendar.html">
                      Calendar
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="apps-invoice.html">
                      Invoice
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarApplications*/}
            </li>
            {/*end nav-item*/}
            <li className="menu-label mt-2">
              <small className="label-border">
                <div className="border_left hidden-xs" />
                <div className="border_right" />
              </small>
              <span>Components</span>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarElements"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarElements"
              >
                <i className="iconoir-compact-disc menu-icon" />
                <span>UI Elements</span>
              </a>
              <div className="collapse " id="sidebarElements">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="ui-alerts.html">
                      Alerts
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-avatar.html">
                      Avatar
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-buttons.html">
                      Buttons
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-badges.html">
                      Badges
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-cards.html">
                      Cards
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-carousels.html">
                      Carousels
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-dropdowns.html">
                      Dropdowns
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-grids.html">
                      Grids
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-images.html">
                      Images
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-list.html">
                      List
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-modals.html">
                      Modals
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-navs.html">
                      Navs
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-navbar.html">
                      Navbar
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-paginations.html">
                      Paginations
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-popover-tooltips.html">
                      Popover &amp; Tooltips
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-progress.html">
                      Progress
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-spinners.html">
                      Spinners
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-tabs-accordions.html">
                      Tabs &amp; Accordions
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-typography.html">
                      Typography
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="ui-videos.html">
                      Videos
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarElements*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarAdvancedUI"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarAdvancedUI"
              >
                <i className="iconoir-peace-hand menu-icon" />
                <span>Advanced UI</span>
                <span className="badge rounded text-success bg-success-subtle ms-1">
                  New
                </span>
              </a>
              <div className="collapse " id="sidebarAdvancedUI">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-animation.html">
                      Animation
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-clipboard.html">
                      Clip Board
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-dragula.html">
                      Dragula
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-files.html">
                      File Manager
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-highlight.html">
                      Highlight
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-rangeslider.html">
                      Range Slider
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-ratings.html">
                      Ratings
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-ribbons.html">
                      Ribbons
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-sweetalerts.html">
                      Sweet Alerts
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="advanced-toasts.html">
                      Toasts
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarAdvancedUI*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarForms"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarForms"
              >
                <i className="iconoir-journal-page menu-icon" />
                <span>Forms</span>
              </a>
              <div className="collapse " id="sidebarForms">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="forms-elements.html">
                      Basic Elements
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-advanced.html">
                      Advance Elements
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-validation.html">
                      Validation
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-wizard.html">
                      Wizard
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-editors.html">
                      Editors
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-uploads.html">
                      File Upload
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="forms-img-crop.html">
                      Image Crop
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarForms*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarCharts"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarCharts"
              >
                <i className="iconoir-candlestick-chart menu-icon" />
                <span>Charts</span>
              </a>
              <div className="collapse " id="sidebarCharts">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="charts-apex.html">
                      Apex
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="charts-justgage.html">
                      JustGage
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="charts-chartjs.html">
                      Chartjs
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="charts-toast-ui.html">
                      Toast
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarCharts*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarTables"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarTables"
              >
                <i className="iconoir-table-rows menu-icon" />
                <span>Tables</span>
              </a>
              <div className="collapse " id="sidebarTables">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="tables-basic.html">
                      Basic
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="tables-datatable.html">
                      Datatables
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="tables-editable.html">
                      Editable
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarTables*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarIcons"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarIcons"
              >
                <i className="iconoir-trophy menu-icon" />
                <span>Icons</span>
              </a>
              <div className="collapse " id="sidebarIcons">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="icons-fontawesome.html">
                      Font Awesome
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="icons-lineawesome.html">
                      Line Awesome
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="icons-icofont.html">
                      Icofont
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="icons-iconoir.html">
                      Iconoir
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarIcons*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarMaps"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarMaps"
              >
                <i className="iconoir-navigator-alt menu-icon" />
                <span>Maps</span>
              </a>
              <div className="collapse " id="sidebarMaps">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="maps-google.html">
                      Google Maps
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="maps-leaflet.html">
                      Leaflet Maps
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="maps-vector.html">
                      Vector Maps
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarMaps*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarEmailTemplates"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarEmailTemplates"
              >
                <i className="iconoir-send-mail menu-icon" />
                <span>Email Templates</span>
              </a>
              <div className="collapse " id="sidebarEmailTemplates">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="email-templates-basic.html">
                      Basic Action Email
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="email-templates-alert.html">
                      Alert Email
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="email-templates-billing.html">
                      Billing Email
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarEmailTemplates*/}
            </li>
            {/*end nav-item*/}
            <li className="menu-label mt-2">
              <small className="label-border">
                <div className="border_left hidden-xs" />
                <div className="border_right" />
              </small>
              <span>Crafted</span>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarPages"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarPages"
              >
                <i className="iconoir-page-star menu-icon" />
                <span>Pages</span>
              </a>
              <div className="collapse " id="sidebarPages">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="pages-profile.html">
                      Profile
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-notifications.html">
                      Notifications
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-timeline.html">
                      Timeline
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-treeview.html">
                      Treeview
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-starter.html">
                      Starter Page
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-pricing.html">
                      Pricing
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-blogs.html">
                      Blogs
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-faq.html">
                      FAQs
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="pages-gallery.html">
                      Gallery
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarPages*/}
            </li>
            {/*end nav-item*/}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#sidebarAuthentication"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarAuthentication"
              >
                <i className="iconoir-fingerprint-lock-circle menu-icon" />
                <span>Authentication</span>
              </a>
              <div className="collapse " id="sidebarAuthentication">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="auth-login.html">
                      Log in
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-register.html">
                      Register
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-recover-pw.html">
                      Re-Password
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-lock-screen.html">
                      Lock Screen
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-maintenance.html">
                      Maintenance
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-404.html">
                      Error 404
                    </a>
                  </li>
                  {/*end nav-item*/}
                  <li className="nav-item">
                    <a className="nav-link" href="auth-500.html">
                      Error 500
                    </a>
                  </li>
                  {/*end nav-item*/}
                </ul>
                {/*end nav*/}
              </div>
              {/*end startbarAuthentication*/}
            </li>
            {/*end nav-item*/}
          </ul>
          {/*end navbar-nav-*/}
          <div className="update-msg text-center">
            <div className="d-flex justify-content-center align-items-center thumb-lg update-icon-box  rounded-circle mx-auto">
              <i className="iconoir-peace-hand h3 align-self-center mb-0 text-primary" />
            </div>
            <h5 className="mt-3">Mannat Themes</h5>
            <p className="mb-3 text-muted">
              Rizz is a high quality web applications.
            </p>
            <a
              href="javascript: void(0);"
              className="btn text-primary shadow-sm rounded-pill"
            >
              Upgrade your plan
            </a>
          </div>
        </div>
      </div>
      {/*end startbar-collapse*/}
    </div>
    {/*end startbar-menu*/}
  </div>
  {/*end startbar*/}
  <div className="startbar-overlay d-print-none" onClick={handleSidebarOverlayClick}/>
  {/* end leftbar-tab-menu*/}
  <div className="page-wrapper">
    {/* Page Content*/}
    <div className="page-content">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center border-dashed-bottom pb-3">
                  <div className="col-9">
                    <p className="text-dark mb-0 fw-semibold fs-14">Sessions</p>
                    <h3 className="mt-2 mb-0 fw-bold">24k</h3>
                  </div>
                  {/*end col*/}
                  <div className="col-3 align-self-center">
                    <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                      <i className="iconoir-hexagon-dice h1 align-self-center mb-0 text-secondary" />
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <p className="mb-0 text-truncate text-muted mt-3">
                  <span className="text-success">8.5%</span>
                  New Sessions Today
                </p>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center border-dashed-bottom pb-3">
                  <div className="col-9">
                    <p className="text-dark mb-0 fw-semibold fs-14">
                      Avg.Sessions
                    </p>
                    <h3 className="mt-2 mb-0 fw-bold">00:18</h3>
                  </div>
                  {/*end col*/}
                  <div className="col-3 align-self-center">
                    <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                      <i className="iconoir-clock h1 align-self-center mb-0 text-secondary" />
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <p className="mb-0 text-truncate text-muted mt-3">
                  <span className="text-success">1.5%</span>
                  Weekly Avg.Sessions
                </p>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex justify-content-center border-dashed-bottom pb-3">
                  <div className="col-9">
                    <p className="text-dark mb-0 fw-semibold fs-14">
                      Bounce Rate
                    </p>
                    <h3 className="mt-2 mb-0 fw-bold">36.45%</h3>
                  </div>
                  {/*end col*/}
                  <div className="col-3 align-self-center">
                    <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                      <i className="iconoir-percentage-circle h1 align-self-center mb-0 text-secondary" />
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <p className="mb-0 text-truncate text-muted mt-3">
                  <span className="text-danger">8%</span>
                  Up Bounce Rate Weekly
                </p>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-8">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Audience Overview</h4>
                  </div>
                  {/*end col*/}
                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn bt btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icofont-calendar fs-5 me-1" />
                        This Year
                        <i className="las la-angle-down ms-1" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div id="audience_overview" className="apex-charts" />
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <p className="text-dark mb-0 fw-semibold fs-14">
                      New Visitors
                    </p>
                    <h2 className="mt-0 mb-0 fw-bold">1,282</h2>
                  </div>
                  {/*end col*/}
                  <div className="col-auto align-self-center">
                    <div className="img-group d-flex">
                      <a
                        className="user-avatar position-relative d-inline-block"
                        href="#"
                      >
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt="avatar"
                          className="thumb-md shadow-sm rounded-circle"
                        />
                      </a>
                      <a
                        className="user-avatar position-relative d-inline-block ms-n2"
                        href="#"
                      >
                        <img
                          src="assets/images/users/avatar-2.jpg"
                          alt="avatar"
                          className="thumb-md shadow-sm rounded-circle"
                        />
                      </a>
                      <a
                        className="user-avatar position-relative d-inline-block ms-n2"
                        href="#"
                      >
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          alt="avatar"
                          className="thumb-md shadow-sm rounded-circle"
                        />
                      </a>
                      <a
                        className="user-avatar position-relative d-inline-block ms-n2"
                        href="#"
                      >
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt="avatar"
                          className="thumb-md shadow-sm rounded-circle"
                        />
                      </a>
                      <a
                        href=""
                        className="user-avatar position-relative d-inline-block ms-1"
                      >
                        <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                          +6
                        </span>
                      </a>
                    </div>
                    <small className="text-muted">Logined Visitors</small>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
                <div id="visitors_report" className="apex-charts mb-2" />
                <button
                  type="button"
                  className="btn btn-primary w-100 btn-lg fs-14"
                >
                  More Detail <i className="fa-solid fa-arrow-right-long" />
                </button>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row">
          <div className="col-lg-6">
            <div className="card card-h-100">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">
                      Browser Used &amp; Traffic Reports
                    </h4>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="table-responsive browser_users">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="border-top-0">Browser</th>
                        <th className="border-top-0">Sessions</th>
                        <th className="border-top-0">Bounce Rate</th>
                        <th className="border-top-0">Transactions</th>
                      </tr>
                      {/*end tr*/}
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/chrome.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Chrome
                        </td>
                        <td>
                          10853<small className="text-muted">(52%)</small>
                        </td>
                        <td> 52.80%</td>
                        <td>
                          566<small className="text-muted">(92%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/micro-edge.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Microsoft Edge
                        </td>
                        <td>
                          2545<small className="text-muted">(47%)</small>
                        </td>
                        <td> 47.54%</td>
                        <td>
                          498<small className="text-muted">(81%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/in-explorer.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Internet-Explorer
                        </td>
                        <td>
                          1836<small className="text-muted">(38%)</small>
                        </td>
                        <td> 41.12%</td>
                        <td>
                          455<small className="text-muted">(74%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/opera.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Opera
                        </td>
                        <td>
                          1958<small className="text-muted">(31%)</small>
                        </td>
                        <td> 36.82%</td>
                        <td>
                          361<small className="text-muted">(61%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <img
                            src="assets/images/logos/chrome.png"
                            alt=""
                            height={24}
                            className="me-2"
                          />
                          Chrome
                        </td>
                        <td>
                          10853<small className="text-muted">(52%)</small>
                        </td>
                        <td> 52.80%</td>
                        <td>
                          566<small className="text-muted">(92%)</small>
                        </td>
                      </tr>
                      {/*end tr*/}
                    </tbody>
                  </table>
                  {/*end table*/}
                </div>
                {/*end /div*/}
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-lg-6">
            <div className="card card-h-100">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Total Visits</h4>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <thead className="table-light">
                      <tr>
                        <th className="border-top-0">Channel</th>
                        <th className="border-top-0">Sessions</th>
                        <th className="border-top-0">Prev.Period</th>
                        <th className="border-top-0">% Change</th>
                      </tr>
                      {/*end tr*/}
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Organic search
                          </a>
                        </td>
                        <td>
                          10853<small className="text-muted">(52%)</small>
                        </td>
                        <td>
                          566<small className="text-muted">(92%)</small>
                        </td>
                        <td>
                          {" "}
                          52.80%{" "}
                          <i className="fas fa-caret-up text-success font-16" />
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Direct
                          </a>
                        </td>
                        <td>
                          2545<small className="text-muted">(47%)</small>
                        </td>
                        <td>
                          498<small className="text-muted">(81%)</small>
                        </td>
                        <td>
                          {" "}
                          -17.20%{" "}
                          <i className="fas fa-caret-down text-danger font-16" />
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Referal
                          </a>
                        </td>
                        <td>
                          1836<small className="text-muted">(38%)</small>
                        </td>
                        <td>
                          455<small className="text-muted">(74%)</small>
                        </td>
                        <td>
                          {" "}
                          41.12%{" "}
                          <i className="fas fa-caret-up text-success font-16" />
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Email
                          </a>
                        </td>
                        <td>
                          1958<small className="text-muted">(31%)</small>
                        </td>
                        <td>
                          361<small className="text-muted">(61%)</small>
                        </td>
                        <td>
                          {" "}
                          -8.24%{" "}
                          <i className="fas fa-caret-down text-danger font-16" />
                        </td>
                      </tr>
                      {/*end tr*/}
                      <tr>
                        <td>
                          <a href="" className="text-primary">
                            Social
                          </a>
                        </td>
                        <td>
                          1566<small className="text-muted">(26%)</small>
                        </td>
                        <td>
                          299<small className="text-muted">(49%)</small>
                        </td>
                        <td>
                          {" "}
                          29.33% <i className="fas fa-caret-up text-success" />
                        </td>
                      </tr>
                      {/*end tr*/}
                    </tbody>
                  </table>
                  {/*end table*/}
                </div>
                {/*end /div*/}
                <p className="m-0 fs-12 fst-italic ps-2 text-muted">
                  Last data updated - 13min ago{" "}
                  <a href="#!" className="link-danger ms-1 ">
                    <i className="align-middle iconoir-refresh" />
                  </a>
                </p>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Traffic Sources</h4>
                  </div>
                  {/*end col*/}
                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn bt btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icofont-search-user fs-5 me-1" />
                        Direct
                        <i className="las la-angle-down ms-1" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Email
                        </a>
                        <a className="dropdown-item" href="#">
                          Referral
                        </a>
                        <a className="dropdown-item" href="#">
                          Direct
                        </a>
                        <a className="dropdown-item" href="#">
                          Organic
                        </a>
                        <a className="dropdown-item" href="#">
                          Campaign
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="">
                  <div
                    id="traffic_sources"
                    className="apex-charts d-block w-90 mx-auto"
                  />
                  <hr className="hr-dashed border-secondary w-25 mt-0 mx-auto" />
                </div>
                <div className="text-center">
                  <h4>Direct Visitors</h4>
                  <p className="text-muted mt-2">
                    This is a simple hero unit, a simple jumbotron-style
                    component
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary px-3 mt-2"
                  >
                    More details
                  </button>
                </div>
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
          <div className="col-md-6 col-lg-8">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-title">Organic Traffic In World</h4>
                  </div>
                  {/*end col*/}
                  <div className="col-auto">
                    <div className="dropdown">
                      <a
                        href="#"
                        className="btn bt btn-light dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="icofont-calendar fs-5 me-1" />
                        Today
                        <i className="las la-angle-down ms-1" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Today
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Week
                        </a>
                        <a className="dropdown-item" href="#">
                          Last Month
                        </a>
                        <a className="dropdown-item" href="#">
                          This Year
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-header*/}
              <div className="card-body pt-0">
                <div className="row">
                  <div className="col-lg-8">
                    <div id="map_2" className="" style={{ height: 320 }} />
                  </div>
                  {/*end col*/}
                  <div className="col-lg-4 align-self-center">
                    <div className="d-flex align-items-center my-3">
                      <img
                        src="assets/images/flags/us_flag.jpg"
                        className="thumb-sm align-self-center rounded-circle"
                        alt="..."
                      />
                      <div className="flex-grow-1 ms-2">
                        <h5 className="mb-1">35,365</h5>
                        <p className="text-muted mb-0">
                          USA . Last Month
                          <span className="text-success">
                            2.5%
                            <i className="mdi mdi-arrow-up" />
                          </span>
                        </p>
                      </div>
                      {/*end media-body*/}
                    </div>
                    {/*end media*/}
                    <div className="d-flex align-items-center my-3">
                      <img
                        src="assets/images/flags/germany_flag.jpg"
                        className="thumb-sm align-self-center rounded-circle"
                        alt="..."
                      />
                      <div className="flex-grow-1 ms-2">
                        <h5 className="mb-1">24,865</h5>
                        <p className="text-muted mb-0">
                          Germany . Last Month
                          <span className="text-success">
                            1.2%
                            <i className="mdi mdi-arrow-up" />
                          </span>
                        </p>
                      </div>
                      {/*end media-body*/}
                    </div>
                    {/*end media*/}
                    <div className="d-flex align-items-center my-3">
                      <img
                        src="assets/images/flags/spain_flag.jpg"
                        className="thumb-sm align-self-center rounded-circle"
                        alt="..."
                      />
                      <div className="flex-grow-1 ms-2">
                        <h5 className="mb-1">18,369</h5>
                        <p className="text-muted mb-0">
                          Spain . Last Month
                          <span className="text-success">
                            0.8%
                            <i className="mdi mdi-arrow-up" />
                          </span>
                        </p>
                      </div>
                      {/*end media-body*/}
                    </div>
                    {/*end media*/}
                    <div className="d-flex align-items-center my-3">
                      <img
                        src="assets/images/flags/baha_flag.jpg"
                        className="thumb-sm align-self-center rounded-circle"
                        alt="..."
                      />
                      <div className="flex-grow-1 ms-2">
                        <h5 className="mb-1">11,325</h5>
                        <p className="text-muted mb-0">
                          Bahamas . Last Month
                          <span className="text-success">
                            2.5%
                            <i className="mdi mdi-arrow-up" />
                          </span>
                        </p>
                      </div>
                      {/*end media-body*/}
                    </div>
                    {/*end media*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
      {/* container */}
      {/*Start Rightbar*/}
      {/*Start Rightbar/offcanvas*/}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="Appearance"
        aria-labelledby="AppearanceLabel"
      >
        <div className="offcanvas-header border-bottom justify-content-between">
          <h5 className="m-0 font-14" id="AppearanceLabel">
            Appearance
          </h5>
          <button
            type="button"
            className="btn-close text-reset p-0 m-0 align-self-center"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <h6>Account Settings</h6>
          <div className="p-2 text-start mt-3">
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch1"
              />
              <label className="form-check-label" htmlFor="settings-switch1">
                Auto updates
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch2"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="settings-switch2">
                Location Permission
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch3"
              />
              <label className="form-check-label" htmlFor="settings-switch3">
                Show offline Contacts
              </label>
            </div>
            {/*end form-switch*/}
          </div>
          {/*end /div*/}
          <h6>General Settings</h6>
          <div className="p-2 text-start mt-3">
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch4"
              />
              <label className="form-check-label" htmlFor="settings-switch4">
                Show me Online
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch5"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="settings-switch5">
                Status visible to all
              </label>
            </div>
            {/*end form-switch*/}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="settings-switch6"
              />
              <label className="form-check-label" htmlFor="settings-switch6">
                Notifications Popup
              </label>
            </div>
            {/*end form-switch*/}
          </div>
          {/*end /div*/}
        </div>
        {/*end offcanvas-body*/}
      </div>
      {/*end Rightbar/offcanvas*/}
      {/*end Rightbar*/}
      {/*Start Footer*/}
      <footer className="footer text-center text-sm-start d-print-none">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="card mb-0 rounded-bottom-0">
                <div className="card-body">
                  <p className="text-muted mb-0">
                    © Rizz
                    <span className="text-muted d-none d-sm-inline-block float-end">
                      Crafted with
                      <i className="iconoir-heart text-danger" />
                      by Mannatthemes
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*end footer*/}
    </div>
    {/* end page content */}
  </div>
  </>
  );
}

export default Layout;
