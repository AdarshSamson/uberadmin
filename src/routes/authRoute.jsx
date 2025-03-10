import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthRedirect from "../components/RedirectRoute"; // Import the new component
import GlobalSuspense from "../components/GlobalSuspense";

const DefaultLayout = lazy(() => import("../containers/layout"));
const Login = lazy(() => import("../pages/login"));

const AuthRoutes = () => {
  return (
    <Suspense fallback={<GlobalSuspense />}>
      <Routes>
        {/* Public Route: Login Page with Auth Redirect */}
        <Route 
          path="/login" 
          element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          } 
        />

        {/* Protected Routes: Requires Authentication */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <DefaultLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AuthRoutes;
