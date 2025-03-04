import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "./consts";

export const AuthRouter = ({ children }) => {
  if (!localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to={ROUTES_CONSTANTS.PATH} replace />;
};
