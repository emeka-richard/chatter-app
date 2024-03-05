import React from 'react';
import DOMPurify from 'dompurify';

import LogoutIcon from "../../../assets/svg/logoutIcon.svg";
import { NavLink } from 'react-router-dom';
import style from "./app-navbar-component.module.css";

const LogoutItem: React.FC = function () {
    const sanitizedLogoutIconSVG = DOMPurify.sanitize(LogoutIcon);


  return (
    <NavLink to={"/feeds"} className={style.logout_item_container} aria-label="Logout">
      {/* Logout Icon */}
      {/* <LogoutIcon aria-hidden="true" /> */}
      <svg dangerouslySetInnerHTML={{ __html: sanitizedLogoutIconSVG }} aria-hidden="true"/>

      {/* Text for Logout */}
      <p className={style.logout_item_p}>Log out</p>
    </NavLink>
  );
}

export default LogoutItem;
