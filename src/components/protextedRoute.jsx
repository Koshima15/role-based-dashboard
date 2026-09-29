
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { roleConfig } from "../config/roleConfig";
import DashboardLayout from "./DashboardLayout";

const ProtectedRoute = ({ permission, children }) => {
  const {
    role,
    isAuthenticated,
    loading,
  } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-lg font-semibold text-blue-700">
          Loading...
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const hasPermission =
    roleConfig[role]?.permissions.includes(permission);

  if (!hasPermission) {
    return <Navigate to="/access-denied" replace />;
  }

  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
};

export default ProtectedRoute;
