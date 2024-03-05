import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

const NavbarLinks: React.FC = () => {
  return (
    <div className={style.navbar_links_wrapper}>
      {/* Home link */}
      <Link to="#home" className={style.links_item} aria-label="Home">
        Home
      </Link>
      {/* About Us link */}
      <Link to="#about" className={style.links_item} aria-label="About Us">
        About Us
      </Link>
      {/* Contact link */}
      <Link to="#contact" className={style.links_item} aria-label="Contact">
        Contact
      </Link>
      {/* Blogs link */}
      <Link to="#blogs" className={style.links_item} aria-label="Blogs">
        Blogs
      </Link>
    </div>
  );
};

export default NavbarLinks;
