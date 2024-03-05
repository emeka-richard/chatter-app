import { Route, Navigate, RouteProps } from "react-router-dom";
// import useAuthVerifyUser from "./userAuth-Verify-middleware";

interface ProtectedRouteAuthProps {
  element: React.ReactNode; // or the specific type of your element
}

const ProtectedRouteAuth = ({ element, ...rest }: ProtectedRouteAuthProps & RouteProps) => {
  // const { isAuthenticated } = useAuthVerifyUser();
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/auth/sign/login" />
  );
};

export default ProtectedRouteAuth;
