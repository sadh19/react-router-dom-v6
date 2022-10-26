import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: JSX.Element; }) => {

  const isLoginOK = true;

  if (isLoginOK) {
    console.log("Entre comp");
    return children;
  }

  console.log("Entre login");

  return <Navigate to={"/login"} replace />;
};