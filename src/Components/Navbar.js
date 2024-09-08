import React from "react";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { Tooltip } from "react-tooltip";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand">TEXT</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav ms-auto align-items-center">
            <li>
              <button className=" custom-btn">GUIDED TOUR</button>
            </li>
            <li class="nav-item dropdown ms-4">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SELECT ORG <IoIosArrowDown />
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    ORG 1
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ORG 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    ORG 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="ms-4">
              <img
                src="person4.jpg"
                alt=""
                className="img-fluid img-thumbnail"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
