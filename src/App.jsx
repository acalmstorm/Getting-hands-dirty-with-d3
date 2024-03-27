import React from "react";
import {arc}  from 'd3-shape';
const width=960;
const height=500;
const centerX=width/2;
const centerY=height/2;
const strokewidth=10;
const r=centerY-strokewidth/2;
const gapx=90;
const gapy=100;
const mouthw=10;
const mouthrad=140;

const moutharc= arc()
        .innerRadius(mouthrad)
        .outerRadius(mouthrad + mouthw)
        .startAngle(Math.PI/2)
        .endAngle(Math.PI*3/2);

function App() {
  return (
    <div>
    <h1>Just Smile</h1>
    {smiley()}
    </div>
  );
}
const smiley = ()=>{
  return (
    <svg width={width} height={height}>
    <g transform ={`translate(${centerX},${centerY})`}>
    <circle
    // cx={centerX}
    // cy={centerY}
    r={r}
    fill="yellow"
    stroke="black"
    strokeWidth={strokewidth} // React uses camelCase for attribute names
  />
  <circle
    cx={-gapx}
    cy={-gapy}
    r="50"  
  />
  <circle
    cx={gapx}
    cy={-gapy}
    r="50"
  />
  <circle
    // cx={centerX}
    // cy={centerY }
    r="20"
    
  />
  <path d={moutharc()}/>
  </g >
</svg>
  );
};
export default App;
// function App1() {
//   return (
//     <h1>its my app1</h1>
//   );
// }

// function App2() {
//   return (
//     <h1>its my app2</h1>
//   );
// }

// export {App1, App2};
// export {App1};
// export {App2};