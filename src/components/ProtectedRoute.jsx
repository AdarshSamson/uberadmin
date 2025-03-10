import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // if (loading) {
  //   return <div>Loading...</div>; // Show a loading spinner or placeholder
  // }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;