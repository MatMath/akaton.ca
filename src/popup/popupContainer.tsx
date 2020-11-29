import * as React from 'react';

const { popupClass } = require('./styles.css');
import './popup';

export const PopupContainer = () => (
  <div className={popupClass}>
    <ul>
      <li>
        Current URL:
        <span id="url" />
      </li>
      <li>
        Current Time:
        <span id="time" />
      </li>
    </ul>
    <button type="button" id="countUp">Count up</button>
    <button type="button" id="changeBackground">Change background</button>
  </div>
);
