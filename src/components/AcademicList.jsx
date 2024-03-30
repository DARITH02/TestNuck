import React from "react";
import { NavLink } from "react-router-dom";
const AcademicList = () => {
  return (
    <>
      <div className="academic-list-grid-1x2">
        <ul className="academic-menu-list">
          <li>
            <NavLink to={"facultymanagement"}>FACULTY OF MANAGEMENT</NavLink>
          </li>
          <li>
            <NavLink to={"facultyarthamanitiesandlanguage"}>
              FACULTY OF ART, HUMANITIES AND LANGUAGE
            </NavLink>
          </li>

          <li>
            <NavLink to={"facultyofcomminunitydevelopment"}>
              FACULTY OF COMMINUNITY DEVELOPMENT
            </NavLink>
          </li>
          <li>
            <NavLink to={"facultyscienandmathematics"}>
              FACULTY SCIEN AND MATHEMATICS
            </NavLink>
          </li>
          <li>
            <NavLink to={"facultysocialofscience"}>
              FACULTY SOCIAL FO SCIENCE
            </NavLink>
          </li>
        </ul>
        <div className="">1</div>
      </div>
    </>
  );
};

export default AcademicList;
