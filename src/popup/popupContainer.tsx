import * as React from 'react';

import './popup';
import styles from './styles.module.css';

export const PopupContainer = () => (
  <div className={styles.mainContainer}>
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
