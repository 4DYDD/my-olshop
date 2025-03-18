import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AdminProps {
  children?: ReactNode;
}

const Sidebar: React.FC<AdminProps> = ({ children }) => {
  return (
    <>
      <div className="border-r-gray-300 border-r shadow-md shadow-gray-400 h-screen w-52 flexc flex-col !justify-start py-10">
        <h1 className="font-bold text-lg">Store Title</h1>
        <div className="mt-5 w-full px-5 text-[0.95rem]">
          <div className="py-3 my-2 hover:text-black hover:font-semibold text-gray-500 transall cursor-pointer">
            <Link to={"/admin"}>Dashboard</Link>
          </div>

          <div className="py-3 my-2 hover:text-black hover:font-semibold text-gray-500 transall cursor-pointer">
            <Link to={"/admin"}>Storage</Link>
          </div>

          <div className="py-3 my-2 hover:text-black hover:font-semibold text-gray-500 transall cursor-pointer">
            <Link to={"/admin"}>Orders</Link>
          </div>

          <div className="py-3 my-2 hover:text-black hover:font-semibold text-gray-500 transall cursor-pointer">
            <Link to={"/admin"}>Settings</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
