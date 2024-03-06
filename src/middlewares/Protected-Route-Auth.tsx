import {  Navigate, Outlet } from "react-router-dom";
// import useAuthVerifyUser from "./userAuth-Verify-middleware";

// interface ProtectedRouteAuthProps {
//   element: React.ReactNode; // or the specific type of your element
// }

const ProtectedRouteAuth = () => {
  // const { isAuthenticated } = useAuthVerifyUser();
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/sign/login" />
  );
};

export default ProtectedRouteAuth;
// import { Routes, Route, Navigate, RouteProps } from "react-router-dom";
// // import useAuthVerifyUser from "./userAuth-Verify-middleware";

// interface ProtectedRouteAuthProps {
//   element: React.ReactNode; // or the specific type of your element
// }

// const ProtectedRouteAuth = ({
//   element,
// }: ProtectedRouteAuthProps & RouteProps) => {
//   // const { isAuthenticated } = useAuthVerifyUser();
//   const isAuthenticated = true;

//   return isAuthenticated ? (
//     <Routes>
//       <Route element={element} />
//     </Routes>
//   ) : (
//     <Navigate to="/auth/sign/login" />
//   );
// };

// export default ProtectedRouteAuth;
