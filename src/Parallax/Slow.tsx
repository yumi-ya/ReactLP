import React from "react";
import { Box } from "@mui/material";
// import { randomColmunIcons } from "./util";

import ReactIcon from "../icons/ReactIcon";

// 縦一列分
type atts = {
  span: number; //  the gap between icons in pixcel
  iconCount: number; //  numbers of icons in a Xline
  rangeX: number; //  range of random x px、横揺れ
  rangeY: number; // range of random y px, 縦揺れ
};

// x,yの値が配列で返ってくる
type res = {
  x: number;
  y: number;
};

const randomColmunIcons: atts = (span, iconCount, rangeX, rangeY): res[] => {
  const result = [...new Array(iconCount)].map((icon, i) => {
    const x = rangeX * (Math.random() * 2 - 1);
    const y = i * span + rangeY * (Math.random() * 2 - 1);
    console.log("x : ", x);
    return { x, y };
  });
  console.log("result : ", result);
  return result;
};

const Slow = () => {
  // const positionsA = randomColmunIcons(200, 3, 50, 10);
  // const positionsB = randomColmunIcons(300, 3, 100, 22);
  const positionsA = randomColmunIcons(100, 2, 200, 35);
  const positionsB = randomColmunIcons(130, 2, 200, 42);

  return (
    <>
      {positionsA.map((pos) => (
        <Box
          sx={{
            // display:"flex",
            // justifyContent: "flex-end",
            animation: "move-y 10s infinite alternate ease-out",
            position: "relative",
            border: "1px dashed blue",
            width: "30px",
            left: pos.x + 200,
            top: pos.y
          }}
        >
          <ReactIcon />
        </Box>
      ))}
      {positionsB.map((pos) => (
        <Box
          sx={{
            animation: "move-y 10s infinite alternate ease-in",
            position: "relative",
            border: "1px dashed blue",
            width: "80px",
            left: pos.x + 200,
            top: pos.y
          }}
        >
          <ReactIcon />
        </Box>
      ))}
    </>
  );
};

export default Slow;
