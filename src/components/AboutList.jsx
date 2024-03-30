import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const AboutList = () => {
  return (
    <>
      <div className="about-list-grid-1x2">
        <ul className="about-menu-list">
          <li>
            <NavLink to={"message"}>MISSAGE FORM RACTOR</NavLink>
          </li>
          <li>
            <NavLink to={"evenandnew"}>EVEN AND NEW</NavLink>
          </li>
          <li>
            <NavLink to={"missionandvission"}>MISSION AND VISSION</NavLink>
          </li>
          <li>
            <NavLink to={"oganizechat"}>OGANIZE CHAT</NavLink>
          </li>
          <li>
            <NavLink to={"history"}>UNIVERSITY HISTORY</NavLink>
          </li>
        </ul>
        <div className="about-list-slide">1</div>
      </div>
    </>
  );
};

export default AboutList;
