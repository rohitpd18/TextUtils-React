import React from "react";
import PropTypes from "prop-types";

export default function Navbar(prop) {
  return (
    <>
      
        <nav
          className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
        >
          <div className="container-fluid">
            <a className={`navbar-brand text-${
                    prop.mode === "light" ? "dark" : "light"
                  } `} href="/">
              {prop.tittle}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li  className="nav-item">
                  <a className={`nav-link active navbar-brand text-${
                    prop.mode === "light" ? "dark" : "light"
                  } `} aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link navbar-brand text-${
                    prop.mode === "light" ? "dark" : "light"
                  } `} href="/">
                    About
                  </a>
                </li>
              </ul>

              {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            </form> */}

              {/* <div className="form-check form-switch">
                <label
                  className={`form-check-label text-${
                    prop.mode === "light" ? "dark" : "light"
                  } `}
                  htmlhtmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
                <input
                  className="form-check-input"
                  role="switch"
                  type="checkbox"
                  onClick={prop.toggleMode}
                  id="flexSwitchCheckDefault"
                />
              </div> */}

              {/* <div className="form-check">
                <input onChange={handOneChange} className="form-check-input" type="radio" name="flexRadioDefault" />
               
              </div>
              <div className="form-check">
                <input onChange={handOneChange} className="form-check-input" type="radio" name="flexRadioDefault"  />
               
              </div>
              <div className="form-check">
                <input onChange={handOneChange} className="form-check-input" type="radio" name="flexRadioDefault" />
               
              </div>
              <div className="form-check">
                <input onChange={handOneChange} className="form-check-input" type="radio" name="flexRadioDefault" checked/>
              </div> */}

              <div className="form-check">
                <input
                  className="mx-2 "
                  onClick={prop.toggleGreenMode}
                  type="radio"
                  name="mode"
                  value="male"
                  id=""
                />
                <input
                  className="mx-2 "
                  onClick={prop.toggleBlueMode}
                  type="radio"
                  name="mode"
                  value="other"
                  id=""
                />
                <input
                  className="mx-2 "
                  onClick={prop.toggleDarkMode}
                  type="radio"
                  name="mode"
                  value="female"
                  id=""
                />
                <input
                  className="mx-2 "
                  onClick={prop.toggleLightMode}
                  type="radio"
                  name="mode"
                  value="female"
                  id=""
                />
                <label
                  className={`form-check-label text-${
                    prop.mode === "light" ? "dark" : "light"
                  } `}
                  htmlFor="flexRadioDefault2"
                >
                  Enable Dark Mode
                </label>
              </div>
            </div>
          </div>
        </nav>

    </>
  );
}

Navbar.prototype = {
  tittle: PropTypes.string,
};
