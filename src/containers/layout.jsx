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
 
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const navbarRef = useRef(null);


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
    <>
       <Header toggleSidebar={toggleSidebar} />
      <Sidebar />
      <div className="startbar-overlay d-print-none" onClick={handleSidebarOverlayClick}/>
       
      <div className="page-wrapper">
    <div className="page-content">
          {/* <Suspense> */}
            <Routes>
              {routes.map((route, i) =>
                route.component ? (
                  <Route
                    key={i}
                    path={`${BASE_URL}${route.path}`}
                    element={<route.component />}
                  />
                ) : null
              )}
              <Route path={BASE_URL} element={<Navigate to={`${BASE_URL}/dashboard`} replace />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          {/* </Suspense> */}
       
        <Footer />
        </div>
        </div>
    </>
  
  );
}

export default Layout;