import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component }) {
  return sessionStorage.getItem('user') ? (
    <Component />
  ) : (
    <Navigate to="/" />
  );
}

export {ProtectedRoute}
