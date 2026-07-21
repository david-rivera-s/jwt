import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // Cambiar a true cuando quieras simular que iniciaste sesión
  const isAuthenticated = false; 

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}