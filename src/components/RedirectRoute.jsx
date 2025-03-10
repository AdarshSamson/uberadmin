import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthRedirect = ({ children }) => {
  const { user, loading } = useAuth(); // Get user authentication status

//   if (loading) {
//     return <div>Loading...</div>; // Show a loading spinner or placeholder
//   }

  return user ? <Navigate to="/" replace /> : children; // Redirect if logged in
};

export default AuthRedirect;