import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import GlobalSuspense from './components/GlobalSuspense';
import ErrorBoundary from './components/ErrorBoundary';
import './custom.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthRoute from './routes/authRoute';
import { AuthProvider } from './context/AuthContext';
// Lazy-loaded components
const DefaultLayout = lazy(() => import('./containers/layout'));
const Login = lazy(() => import('./pages/login'));

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<GlobalSuspense />}>
          <ToastContainer />
           <AuthRoute/>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
