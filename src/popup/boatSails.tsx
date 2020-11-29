import * as React from 'react';

import styles from './styles.module.css';
import { BoatSails } from '../popUpContant/types';

interface Props {
  sails: BoatSails,
  onUpdate: Function
}
export const BoatSailsSection = ({ sails, onUpdate }: Props) => (
  <div className={styles.mainSection}>
    <div className={styles.itemDescription}>Main Sail</div>
    <div>{sails.mainsail.value}</div>
    <div className={styles.itemDescription}>Jib</div>
    <div>{sails.jib.value}</div>
    <div className={styles.itemDescription}>Genoa</div>
    <div>{sails.genoa.value}</div>
    <div className={styles.itemDescription}>Spinaker</div>
    <div>{sails.spinaker.value}</div>
    <div className={styles.itemDescription}>Rigging</div>
    <div>{sails.rigging.value}</div>
    <button type="button" onClick={() => onUpdate(sails)}>Update</button>
  </div>
);
