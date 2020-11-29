import * as React from 'react';

import styles from './styles.module.css';
import { BoatDimension } from '../popUpContant/types';

interface Props {
  dimension: BoatDimension,
  onUpdate: Function
}
export const BoatDimensionSection = ({ dimension, onUpdate }: Props) => (
  <div className={styles.mainSection}>
    <div className={styles.itemDescription}>Beam</div>
    <div>{dimension.beam}</div>
    <div className={styles.itemDescription}>Draft</div>
    <div>{dimension.draft}</div>
    <div className={styles.itemDescription}>Length</div>
    <div>{dimension.length}</div>
    <button type="button" onClick={() => onUpdate(dimension)}>Update</button>
  </div>
);
