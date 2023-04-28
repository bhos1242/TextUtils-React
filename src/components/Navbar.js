import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} justify-between`}>
      <a className="navbar-brand mx-3" href="/">
        {props.title}
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              {props.aboutText}
            </a>
          </li>
        </ul>
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onClick={props.toggleMode}
        />
        <label for="flexSwitchCheckChecked">Dark Mode</label>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "Set About here",
};
