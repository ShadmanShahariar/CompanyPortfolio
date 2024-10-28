import React from "react";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#service",
    display: "Service",
  },
  {
    path: "#projects",
    display: "Projects",
  },
  {
    path: "#blogs",
    display: "Blogs",
  },
];

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="nav__wrapper">
            <div className="logo">
              <h2>Kendroo</h2>
              <p>A Centralized Solution for All</p>
            </div>

            {/* navigation */}
            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="menu__item">
                    <a href={item.path} className="menu__link">
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* navigation--End */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
