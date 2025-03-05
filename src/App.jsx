import React, { useState, createContext, useContext,Suspense,useEffect } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './custom.css'
// Containers
const DefaultLayout = React.lazy(() => import('./containers/layout'));

// Pages
const Login = React.lazy(() => import('./pages/login'));
// const DarkModeContext = createContext();

// export const useDarkMode = () => useContext(DarkModeContext);

// export const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.setAttribute("data-bs-theme", "dark");
//       document.body.setAttribute("data-startbar", "dark");
//     } else {
//       document.body.setAttribute("data-bs-theme", "light");
//       document.body.setAttribute("data-startbar", "light");
//     }
//   }, [isDarkMode]);

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       <div data-bs-theme={isDarkMode ? 'dark' : 'light'}>
//         {children}
//       </div>
//     </DarkModeContext.Provider>
//   );
// };
const App = () => {
  
  return (
    <BrowserRouter >
    {/* <DarkModeProvider> */}
      <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
      {/* </DarkModeProvider> */}
    </BrowserRouter >
  );
};

export default App;
