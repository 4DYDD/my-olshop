import React from "react";
import InputSearch from "../../elements/inputSearch";

function Nav() {
  return (
    <>
      <nav className="w-[95rem] h-[5rem] flexc">
        <ul className="flexc flex-[1] h-full">
          <li className="bg-teal-600 min-h-[2rem] flexc flex-[4]">s</li>
          <li className="flex-[1]">
            <InputSearch />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
