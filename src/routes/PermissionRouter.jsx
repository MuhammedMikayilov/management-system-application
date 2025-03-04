import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "./consts";

export const PermissionRouter = ({ children, isAuth }) => {
  if (localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to={ROUTES_CONSTANTS.AUTH.LOGIN} replace />;
};
