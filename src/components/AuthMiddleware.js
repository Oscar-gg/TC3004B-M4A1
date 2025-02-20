import { Navigate, Outlet } from "react-router-dom";

export const AuthMiddleware = ({ condition, redirectTo }) => {
  if (condition) {
    return <Outlet />;
  }
  return <Navigate to={redirectTo} />;
};
