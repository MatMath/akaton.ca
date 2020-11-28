import * as React from "react";
// import './popup';

console.log('POPUP container sc ript loading');

export const PopupContainer = () => {
  console.log('INSIDE RENDER');
  
  return <div>
    <ul>
      <li>Current URL: <span id="url"></span></li>
      <li>Current Time: <span id="time"></span></li>
    </ul>
    <button id="countUp">Count up</button>
    <button id="changeBackground">Change background</button>
  </div>;
};