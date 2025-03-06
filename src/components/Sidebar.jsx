import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import routes from '../routes/sidebarNew'; // Import the routes

const Sidebar = () => {
  const location = useLocation(); // Get the current route location

  // Check if a sub-route is active
  const isSubRouteActive = (subRoutes) => {
    return subRoutes.some((subRoute) => {
      if (subRoute.path) {
        return location.pathname === subRoute.path;
      }
      if (subRoute.routes) {
        return isSubRouteActive(subRoute.routes);
      }
      return false;
    });
  };

  const renderSubItems = (subRoutes) => {
    return (
      <ul className="nav flex-column">
        {subRoutes.map((subRoute, index) => (
          <li className="nav-item" key={index}>
            {subRoute.routes ? (
              <>
                <a
                  className={`nav-link ${
                    isSubRouteActive(subRoute.routes) ? 'active' : ''
                  }`}
                  href={`#${subRoute.name.replace(/\s+/g, '')}`}
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded={isSubRouteActive(subRoute.routes)}
                  aria-controls={`#${subRoute.name.replace(/\s+/g, '')}`}
                >
                  <i className={`${subRoute.icon} menu-icon`} />
                  <span>{subRoute.name}</span>
                </a>
                <div
                  className={`collapse ${
                    isSubRouteActive(subRoute.routes) ? 'show' : ''
                  }`}
                  id={`${subRoute.name.replace(/\s+/g, '')}`}
                >
                  {renderSubItems(subRoute.routes)}
                </div>
              </>
            ) : (
              <NavLink
                to={subRoute.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {subRoute.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="startbar d-print-none">
      {/* Brand section */}
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
     
      {/* Sidebar menu */}
      <div className="startbar-menu">
        <div className="startbar-collapse" id="startbarCollapse" data-simplebar="">
          <div className="d-flex align-items-start flex-column w-100">
            {/* Navigation */}
            <ul className="navbar-nav mb-auto w-100">
              {routes.map((section, index) => (
                <React.Fragment key={index}>
                  {/* Render the label */}
                  <li className="menu-label pt-2 mt-0">
                    {section.label!=='Main Menu' &&  <small className="label-border">
                      <div className="border_left hidden-xs"></div>
                      <div className="border_right"></div>
                    </small>}
                   
                    <span>{section.label}</span>
                  </li>
                  {/* Render the items */}
                  {section.items.map((item, idx) => (
                    <li className="nav-item" key={idx}>
                      {item.routes ? (
                        <>
                          <a
                            className={`nav-link ${
                              isSubRouteActive(item.routes) ? 'active' : ''
                            }`}
                            href={`#${item.name.replace(/\s+/g, '')}`}
                            data-bs-toggle="collapse"
                            role="button"
                            aria-expanded={isSubRouteActive(item.routes)}
                            aria-controls={`#${item.name.replace(/\s+/g, '')}`}
                          >
                            <i className={`${item.icon} menu-icon`} />
                            <span>{item.name}</span>
                          </a>
                          <div
                            className={`collapse ${
                              isSubRouteActive(item.routes) ? 'show' : ''
                            }`}
                            id={`${item.name.replace(/\s+/g, '')}`}
                          >
                            {renderSubItems(item.routes)}
                          </div>
                        </>
                      ) : (
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                          }
                        >
                          <i className={`${item.icon} menu-icon`} />
                          <span>{item.name}</span>
                        </NavLink>
                      )}
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>

            {/* Update message section */}
            <div className="update-msg text-center">
              <div className="d-flex justify-content-center align-items-center thumb-lg update-icon-box rounded-circle mx-auto">
                <i className="iconoir-peace-hand h3 align-self-center mb-0 text-primary" />
              </div>
              <h5 className="mt-3">Popit Themes</h5>
              <p className="mb-3 text-muted">This is a high quality web application.</p>
              <a href="javascript: void(0);" className="btn text-primary shadow-sm rounded-pill">
                Explore now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;