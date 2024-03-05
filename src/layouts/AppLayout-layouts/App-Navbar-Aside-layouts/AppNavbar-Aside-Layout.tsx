import React from 'react';
import AppNavbarOverviewChamber from './AppNavbar-Overview-chamber';
import AppNavbarTrendTagChamber from './AppNavbar-TrendTag-chamber';
import AppNavbarPersonalChamber from './AppNavbar-Personal-chamber';
import style from "./appNavbar-aside.module.css";

const AppNavBarLayout: React.FC = function() {
  // Title for the app navbar
  const appNavbarTitle: string = "CHATTER";

  return (
    <aside className={style.appNav_aside_wrapper}>
      {/* App navbar title */}
      <h2 className={style.appNav_aside_h2}>{appNavbarTitle}</h2>
      {/* Overview section */}
      <AppNavbarOverviewChamber />
      {/* Trending tags section */}
      <AppNavbarTrendTagChamber />
      {/* Personal section */}
      <AppNavbarPersonalChamber />
    </aside>
  );
}

export default AppNavBarLayout;
