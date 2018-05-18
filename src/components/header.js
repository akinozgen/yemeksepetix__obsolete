import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header className="header">
    <div className="container-lrg">
      <div className="flex col-12 spread">
        <Link
          to="/"
          className="logo primary-color launchaco-builder-hoverable logo"
        >
          <img src="static/logo.png" alt="yemeksepetiX" />
        </Link>
        <a
          href="mailto:akinozgen17@outlook.com"
          className="nav-link secondary-color mr0"
        >
          İletişim
        </a>
      </div>
    </div>
  </header>
);
