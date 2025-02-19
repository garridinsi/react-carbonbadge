import * as React from "react";

type CarbonBadge = React.FC<{
  // Whether the badge should be in dark mode
  darkMode?: boolean;
}>;

declare const carbonbadge: CarbonBadge;

export default carbonbadge;
