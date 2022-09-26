import React from "react";

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
      <script
        src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js"
        defer
      ></script>
    </>
  );
};

export default CarbonBadge;
