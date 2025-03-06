import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import GlobalSuspense from './components/GlobalSuspense';
import ErrorBoundary from './components/ErrorBoundary';
import './custom.css';

// Lazy-loaded components
const DefaultLayout = lazy(() => import('./containers/layout'));
const Login = lazy(() => import('./pages/login'));

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<GlobalSuspense />}>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route path="*" element={<DefaultLayout />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
