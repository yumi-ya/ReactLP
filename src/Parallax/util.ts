import { SouthAmerica } from "@mui/icons-material";

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

//ｃｓｓでtop, leftにmapの値を入れる
export const randomColmunIcons = (span, iconCount, rangeX, rangeY): res[] => {
  const result = new Array(iconCount).map((icon, i) => {
    const x = rangeX * (Math.random() * 2 - 1);
    const y = i * span + rangeY * (Math.random() * 2 - 1);
    return { x, y };
  });
  return result;
};

//   usage↓↓
/*
const Icons = () => {
 const positionsA = randomColmunIcons( 100, 6, 30, 35 )
 const positionsB = randomColmunIcons( 130, 5, 20, 42 )
 
 return ( 
    <>
        { positionsA.map((pos) => <Icon sx={{ left: pos.x, top: pos.y }}>) }
        { positionsB.map((pos) => <Icon sx={{ left: pos.x, top: pos.y }}>) }
    </>
  )
}
*/

// memo
// const some = () => {
//   [0, 1, 2].map((number, index) => {
//     console.log("yeah", number, index);
//   });
// };
