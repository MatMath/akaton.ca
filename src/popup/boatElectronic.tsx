import * as React from 'react';

import styles from './styles.module.css';
import { BoatElectronic } from '../popUpContant/types';

interface Props {
  electronics: BoatElectronic,
  onUpdate: Function
}
export const BoatElectronicSection = ({ electronics, onUpdate }: Props) => (
  <div className={styles.mainSection}>
    <div className={styles.itemDescription}>Autopilot</div>
    <div>{electronics.autopilot.value}</div>
    <div className={styles.itemDescription}>Battery</div>
    <div>{electronics.battery.value}</div>
    <div className={styles.itemDescription}>Solar</div>
    <div>{electronics.solarPower.value}</div>
    <button type="button" onClick={() => onUpdate(electronics)}>Update</button>
  </div>
);
