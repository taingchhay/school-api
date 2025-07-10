import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { auth, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (!auth) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
