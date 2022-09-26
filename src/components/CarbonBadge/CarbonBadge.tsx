import React, { useEffect } from "react";
import "https://unpkg.com/website-carbon-badges@1.1.3/b.min.js";

export interface CarbonBadgeProps {
  darkMode: boolean;
}

const CarbonBadge = (props: CarbonBadgeProps) => {
  return (
    <>
      <div
        id="wcb"
        className={`wcb carbonbadge${props.darkMode ? ` wcb-d` : ""}`}
      ></div>
    </>
  );
};

export default CarbonBadge;
