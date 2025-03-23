import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'; // If using Redux

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated); // Example from Redux

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;