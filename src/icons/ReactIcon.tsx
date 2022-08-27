import React from "react";
import { Box } from "@mui/material";

type props = {
  color?: string;
  width?: number;
};

const ReactIcon: React.FC<props> = ({ color, width }) => {
  return (
    // <Box sx={{ width: width || 100 }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill={color || "#61dafb"} />
      <g stroke={color || "#61dafb"} stroke-width="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
    // </Box>
  );
};

export default ReactIcon;
