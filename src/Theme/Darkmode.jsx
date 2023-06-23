import React, { useState, useEffect } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () => {
    // theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <section className="header">
        <nav>
          <h1>Priya Kumari</h1>

          <div className="nav-links" id="navlinks">
            <ul>
              <li>
                <a to="">HOME</a>
              </li>
              <li>
                <a to="">ABOUT</a>
              </li>
              {/* <li>
                <a to="">SERVICE</a>
              </li> */}
              <li>
                <a to="">BLOG</a>
              </li>
              <li>
                <a to="">CONTACT</a>
              </li>
            </ul>
          </div>

          <i id="menu-bar" className="fas fa-bars" onClick={showMenu}></i>
        </nav>

        <div className="container">
          <div className="box">
            <h2 className="tracking-in-expand">Generate Dark Mode</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              excepturi aspernatur eum hic sed, similique facere amet voluptatum
              corrupti! Cum minima perferendis officia explicabo asperiores, hic
              doloribus facilis voluptatem debitis.
            </p>
            <a to="" id="vibrate-1" className="btn" onClick={toggleTheme}>
              Toggle Me
            </a>
          </div>
          <div className="box">
            <img
              className="swing-in-top-fwd"
              src="https://images.pexels.com/photos/3075969/pexels-photo-3075969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
function showMenu() {
  let menu = document.querySelector("#menu-bar");
  let navlink = document.querySelector("#navlinks");
  menu.classList.toggle("fa-times");
  navlink.classList.toggle("active");
}

export { Darkmode, showMenu };
