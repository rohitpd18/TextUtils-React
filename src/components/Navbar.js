import React from "react";
import PropTypes from "prop-types";

export default function Navbar(prop) {
  return (
    <>
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
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
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
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
              {/* <div class="form-check ">
                <input
                  class="form-check-input"
                  type="radio"
                  radioGroup="mode"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckDefault"
                ></label>
              </div>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="radio"
                  radioGroup="mode"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  class="form-check-label"
                  for="flexSwitchCheckDefault"
                ></label>
              </div>
              <div className="form-check form-switch">
                <label
                  className={`form-check-label text-${
                    prop.mode === "light" ? "dark" : "light"
                  } `}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  radioGroup="mode"
                  onClick={prop.toggleMode}
                  id="flexSwitchCheckDefault"
                />
              </div> */}
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                  Default radio
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                <label class="form-check-label" for="flexRadioDefault2">
                  Default checked radio
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

Navbar.prototype = {
  tittle: PropTypes.string,
};
