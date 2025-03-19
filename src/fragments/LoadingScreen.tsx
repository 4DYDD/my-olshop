import React from "react";
import { SyncLoader } from "react-spinners";

const LoadingScreen: React.FC = () => {
  return (
    <div className="!fixed w-full h-screen flexc flex-col transcenter bg-white z-[20]">
      <SyncLoader className="scale-150" color="#6b7280" />
    </div>
  );
};

export default LoadingScreen;
