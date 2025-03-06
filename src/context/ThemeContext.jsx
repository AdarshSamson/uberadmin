import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(() => {
//     return localStorage.getItem("sidebar") === "collapsed";
//   });

  // Toggle Theme Mode
  const toggleTheme = () => {
    const scrollY = window.scrollY;
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
    setTimeout(() => {
        window.scrollTo(0, scrollY); // Restore scroll position after theme change
      }, 0);
  };

  // Toggle Sidebar
//   const toggleSidebar = () => {
//     const newSize = isSidebarCollapsed ? "default" : "collapsed";
//     document.body.setAttribute("data-sidebar-size", newSize);
//     localStorage.setItem("sidebar", newSize);
//     setIsSidebarCollapsed(!isSidebarCollapsed);
//   };

  // Load saved theme & sidebar state on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
    setIsDarkMode(savedTheme === "dark");

    // const savedSidebar = localStorage.getItem("sidebar") || "default";
    // document.body.setAttribute("data-sidebar-size", savedSidebar);
    // setIsSidebarCollapsed(savedSidebar === "collapsed");
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
