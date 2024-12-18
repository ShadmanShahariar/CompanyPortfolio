import React, { useEffect, useRef } from "react";
// import React from "react";
import "./header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#services",
    display: "Service",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#blogs",
    display: "Blogs",
  },
];

const Header = ({ theme, toggleTheme }) => {
  // RESPONSIVE MENU

  const menuRef = useRef(null);
  const toggleMenu = () => {
    menuRef.current.classList.toggle("menu_active");
  };

  //  STICY NAVIGATION-(NOTE-NOT WORKING)
  const headerRef = useRef(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CLICK TO JUMP TO SECTION
  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetAttr);

    if (targetElement) {
      const location = targetElement.offsetTop;

      window.scrollTo({
        top: location - 80,
        behavior: "smooth",
      });
    } else {
      console.error(`Target element not found: ${targetAttr}`);
    }
  };
  return (
    <div>
      <header id="home" className="header" ref={headerRef}>
        {/* <header className="header"> */}
        <div className="container">
          <div className="nav__wrapper">
            <div className="logo">
              <h2>Kendroo.io</h2>
            </div>
            {/* NAVIGATION */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="menu__item" key={index}>
                    <a
                      href={item.path}
                      onClick={handleClick}
                      className="menu__link"
                    >
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LIGHT MODE */}
            <div className="light__mode">
              <span onClick={toggleTheme}>
                {theme === "light-theme" ? (
                  <span>
                    <i class="ri-moon-clear-fill"></i>Dark
                  </span>
                ) : (
                  <span>
                    <i class="ri-sun-line"></i>
                    Light
                  </span>
                )}
              </span>
            </div>

            {/* MOBILE MENU */}
            <span className="mobile_menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
