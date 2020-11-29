import * as React from 'react';

import styles from './styles.module.css';
import { BoatInsideEquipment } from '../popUpContant/types';

interface Props {
  insideEquipement: BoatInsideEquipment,
  onUpdate: Function
}
export const BoatInsideEquipmentSection = ({ insideEquipement, onUpdate }: Props) => (
  <div className={styles.mainSection}>
    <div className={styles.itemDescription}>Fuel Tank</div>
    <div>{insideEquipement.fuelTank}</div>
    <div className={styles.itemDescription}>Water Tank</div>
    <div>{insideEquipement.waterTank}</div>
    <button type="button" onClick={() => onUpdate(insideEquipement)}>Update</button>
  </div>
);
