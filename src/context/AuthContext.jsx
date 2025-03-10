import React, { createContext, useContext, useEffect, useState } from "react";
import { get, post } from "../helper/helper"; // Replace with your API helper
import GlobalSuspense from "../components/GlobalSuspense";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false); // Set loading to false if no token is found
        return setUser(null);
      }

      try {
        const response = await get("validate/token");
        if (response.status === 200) {
          setUser({ token });
        } else {
          logout();
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        logout();
      } finally {
        setLoading(false); // Set loading to false after token validation is complete
      }
    };

    validateToken();
  }, []);

  const logout = async() => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await get("logout"); // Logout API call
      }
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      setUser(null);
      // window.location.href = "/login"; // Force redirect if necessary
    }
  };

  if (loading) {
    return <GlobalSuspense />;
  }
  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);