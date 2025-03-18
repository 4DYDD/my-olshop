import React from "react";
import NavMenu from "./NavMenu";
import NavOptions from "./NavOptions";

function Navbar() {
  return (
    <>
      <div className="mb-10 flexc w-full h-20 shadow-md shadow-gray-300">
        <NavMenu />
        <NavOptions />
      </div>
    </>
  );
}

export default Navbar;
