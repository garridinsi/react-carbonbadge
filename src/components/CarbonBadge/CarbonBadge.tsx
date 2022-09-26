import React, { useEffect } from "react";

export interface CarbonBadgeProps {
  darkMode: boolean;
}

function useScript() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/website-carbon-badges@^1/b.min.js";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}

const CarbonBadge = (props: CarbonBadgeProps) => {
  return (
    <div>
      <div
        id="wcb"
        className={`wcb carbonbadge${props.darkMode ? ` wcb-d` : ""}`}
      ></div>
      {useScript()}
    </div>
  );
};

export default CarbonBadge;
