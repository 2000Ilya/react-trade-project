import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function AdminRoute() {
  const { currentUser } = useAuth();

  return currentUser && currentUser.role === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}

export default AdminRoute;
