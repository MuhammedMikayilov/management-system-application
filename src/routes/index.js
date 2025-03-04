import React from "react";
import { Route, Routes } from "react-router-dom";
import { PermissionRouter } from "./PermissionRouter";
import { AuthRouter } from "./AuthRouter";

import { ROUTES_CONSTANTS } from "./consts";
import { Login } from "../pages/Auth/Login";

export const ROUTERS = () => {
  return (
    <Routes>
      <Route
        path={ROUTES_CONSTANTS.PATH}
        element={
          <PermissionRouter>
            <div className="flex justify-center items-center h-screen bg-gray-100">
              <h1 className="text-3xl font-bold text-blue-500">
                Hello, Tailwind!
              </h1>
            </div>
          </PermissionRouter>
        }
      />
      <Route
        path={ROUTES_CONSTANTS.AUTH.LOGIN}
        element={
          <AuthRouter>
            <Login />
          </AuthRouter>
        }
      />
      <Route
        path={ROUTES_CONSTANTS.AUTH.REGISTER}
        element={
          <AuthRouter>
            <h1>Register Page</h1>
          </AuthRouter>
        }
      />
    </Routes>
  );
};
