import React, { useState } from "react";
import Admin from "../layouts/Admin";
import SimpleBarChart, {
  revenueCostRatios,
  finalProfitMarginPercentage,
} from "../fragments/Chart/SimpleBarChart";
import CountUp from "react-countup";

function adminPage() {
  const [scaleUp, setscaleUp] = useState<Boolean>(false);

  return (
    <>
      <Admin>
        <div className="p-5 shadow-md shadow-gray-300 rounded-lg border border-gray-300">
          <SimpleBarChart width={1050} height={400} />
          <div className="text-center text-gray-500 text-sm">
            Statistik keuangan di tahun <b>2025</b>
          </div>
          <div
            className={`text-center relative h-[2rem] text-green-500 text-sm font-semibold`}
          >
            <div
              className={`text-sm transcenter transall !duration-500 ${
                scaleUp && "!text-base"
              }`}
            >
              keuntungan sebesar :{" "}
              <CountUp
                delay={0}
                duration={1}
                end={finalProfitMarginPercentage}
                onStart={() => {
                  setscaleUp(true);
                }}
                onEnd={() => {
                  setscaleUp(false);
                }}
              />
              %
            </div>
          </div>
        </div>
      </Admin>
    </>
  );
}

export default adminPage;
