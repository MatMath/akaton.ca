import * as React from "react";
const { popupClass } = require('./styles.css')
// import './popup';

export const PopupContainer = () => {
  return <div className={popupClass}>
    <ul>
      <li>Current URL: <span id="url"></span></li>
      <li>Current Time: <span id="time"></span></li>
    </ul>
    <button id="countUp">Count up</button>
    <button id="changeBackground">Change background</button>
  </div>;
};