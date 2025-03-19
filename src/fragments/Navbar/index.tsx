import React from "react";
import NavMenu from "./NavMenu";
import NavOptions from "./NavOptions";

function Navbar() {
  return (
    <>
      <div className="w-full h-20 mb-10 shadow-md flexc shadow-gray-300">
        <NavMenu />
        <NavOptions />
      </div>
    </>
  );
}

export default Navbar;
