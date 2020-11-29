import * as React from 'react';

import styles from './styles.module.css';
import { BoatDimension } from '../popUpContant/types';

enum TargetOption {
  draft = 'draft',
  beam = 'beam',
  length = 'length',
}

interface Props {
  dimension: BoatDimension,
  onUpdate: Function
}
export const BoatDimensionSection = ({ dimension, onUpdate }: Props) => {
  const [beam, setBeam] = React.useState(dimension.beam)
  const [draft, setDraft] = React.useState(dimension.draft)
  const [length, setLength] = React.useState(dimension.length)

  const handleValueChange = (target: TargetOption, value: string) => {
    const newDimension = {...dimension, [target]: parseFloat(value)}
    switch (target) {
      case TargetOption.beam:
        setBeam(parseFloat(value))    
        break;
      case TargetOption.draft:
        setDraft(parseFloat(value))
        break;
      case TargetOption.length:
        setLength(parseFloat(value))
        break;
      default:
        break;
    }
    onUpdate(newDimension)
  }
  return (
    <div className={styles.mainSection}>
      <div className={styles.itemDescription}>Beam</div>
      <input
        type="number"
        value={beam}
        onChange={(e) => handleValueChange(TargetOption.beam, e.target.value)}
      />
      <div className={styles.itemDescription}>Draft</div>
      <input
        type="number"
        value={draft}
        onChange={(e) => handleValueChange(TargetOption.draft, e.target.value)}
      />
      <div className={styles.itemDescription}>Length</div>
      <input
        type="number"
        value={length}
        onChange={(e) => handleValueChange(TargetOption.length, e.target.value)}
      />
    </div>)
};