import React, { useState } from "react";
import "./sidebar.css";
import { PiLessThan } from "react-icons/pi";
import { Tooltip } from "react-tooltip";

import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaTh,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar when a link is clicked
  };

  const menuItem = [
    {
      path: "/about",
      name: "View Mind Map",
      icon: <FaUserAlt />,
      tooltip: "View Mind Map",
    },
    {
      path: "/analytics",
      name: "Manage Team",
      icon: <FaRegChartBar />,
      tooltip: "Manage Team",
    },
  ];
  return (
    <div style={{ width: isOpen ? "250px" : "75px" }} className="sidebar">
      <div
        className="top_section"
        style={{ justifyContent: isOpen ? "flex-end" : "center" }}
      >
        <div className="bars">
          <div
            data-tooltip-id="toggle-icon"
            style={{ display: "inline-block" }}
          >
            {isOpen ? (
              <PiLessThan onClick={toggle} />
            ) : (
              <FaBars onClick={toggle} />
            )}
          </div>
          <Tooltip
            id="toggle-icon"
            place="bottom"
            content={isOpen ? "Close Left Drawer" : "Open Left Drawer"}
            style={{
              fontSize: "12px",
              backgroundColor: "#333",
              color: "#fff",
              padding: "8px",
              borderRadius: "4px",
            }}
          />
        </div>
      </div>
      {/* Sidebar links */}
      {menuItem.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          activeClassName="active"
          onClick={handleLinkClick} // Close sidebar on link click
        >
          <div className="icon" data-tooltip-id={`tooltip-${index}`}>
            {item.icon}
          </div>
          <Tooltip
            id={`tooltip-${index}`}
            place="right"
            content={item.tooltip}
            style={{
              fontSize: "12px",
              backgroundColor: "#333",
              color: "#fff",
              padding: "8px",
              borderRadius: "4px",
            }}
          />
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
