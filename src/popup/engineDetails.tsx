import * as React from 'react';

import styles from './styles.module.css';
import { EngineDetails } from '../popUpContant/types';

interface Props {
  engine: EngineDetails,
  onUpdate: Function
}
export const EngineDetailsSection = ({ engine, onUpdate }: Props) => (
  <div className={styles.mainSection}>
    <div className={styles.itemDescription}>Power</div>
    <div>{engine.power}</div>
    <div className={styles.itemDescription}>NbrHour</div>
    <div>{engine.nbrHours}</div>
    <button type="button" onClick={() => onUpdate(engine)}>Update</button>
  </div>
);
