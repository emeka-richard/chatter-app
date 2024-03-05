import React from "react";
import style from "../authLayout.module.css";
import AuthLinks from "./Auth-Links";
import { Outlet } from "react-router-dom";

const AuthRegLogFrame: React.FC<NonNullable<unknown>> = function () {
  return (
    <div className={style.frame_inner_wrapper}>
      {/* Render authentication links */}
      <AuthLinks />
      {/* Outlet renders the child routes */}
      <Outlet />
    </div>
  );
};

export default AuthRegLogFrame;
