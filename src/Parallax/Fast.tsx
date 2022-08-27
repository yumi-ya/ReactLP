import React from "react";
import { Box } from "@mui/material";
import { Parallax } from "react-parallax";
import ReactIcon from "../icons/ReactIcon";

const styles = {
  fastBackground: {
    // bgcolor: "pink",
    opacity: "0.5",
    height: "100vh",
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    xIndex: "2",
    position: "absolute",
    top: "0",
    // paddingLeft: "22px"の打ち消し
    marginLeft: "-22px"
  }
};

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

const FastBase = () => {
  const positionsA = randomColmunIcons(80, 8, 180, 35);
  // const positionsB = randomColmunIcons(130, 5, 200, 42);

  return (
    <>
      {positionsA.map((pos) => (
        <Box
          sx={{
            position: "relative",
            width: "30px",
            left: pos.x + 200,
            top: pos.y
          }}
        >
          <ReactIcon />
        </Box>
      ))}
      {/* {positionsB.map((pos) => (
        <Box
          sx={{
            position: "relative",
            border: "1px dashed blue",
            width: "80px",
            left: pos.x + 200,
            top: pos.y
          }}
        >
          <ReactIcon />
        </Box>
      ))} */}
    </>
  );
};

const Fast = () => {
  return (
    <>
      {/* <Box sx={styles.fastBackground}></Box> */}
      <Parallax
        blur={10}
        bgImage="path/to/image.jpg"
        bgImageAlt="the cat"
        strength={500}
      >
        <FastBase />
      </Parallax>
    </>
  );
};

export default Fast;
