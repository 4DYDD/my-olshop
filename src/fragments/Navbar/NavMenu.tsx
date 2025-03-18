import React from "react";
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <>
      <div className="flexc gap-3 w-full h-full py-3">
        {[
          { text: "Dashboard", url: "/admin" },
          { text: "Storage", url: "/admin" },
          { text: "Orders", url: "/admin" },
        ].map((value, index) => (
          <React.Fragment key={`navmenu-${index}`}>
            <Link
              className="w-[10rem] h-full flexc transall hover:text-black text-gray-500 hover:font-semibold"
              to={"/admin"}
            >
              {value.text}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default NavMenu;
