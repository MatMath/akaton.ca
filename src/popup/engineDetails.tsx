import * as React from 'react';

import styles from './styles.module.css';
import { EngineDetails } from '../popUpContant/types';

enum TargetOption {
  power = 'power',
  nbrHours = 'nbrHours',
}

interface Props {
  engine: EngineDetails,
  onUpdate: Function
}
export const EngineDetailsSection = ({ engine, onUpdate }: Props) => {
  const [nbrHours, setNbrHours] = React.useState(engine.nbrHours)
  const [power, setPower] = React.useState(engine.power)

  const handleValueChange = (target: TargetOption, value: string) => {
    const newDimension = { ...engine, [target]: parseFloat(value) }
    switch (target) {
      case TargetOption.power:
        setPower(parseFloat(value))
        break;
      case TargetOption.nbrHours:
        setNbrHours(parseFloat(value))
        break;
      default:
        break;
    }
    onUpdate(newDimension)
  }
  return (
    <div className={styles.mainSection}>
      <div className={styles.itemRow}>
        <div>power</div>
        <input
          type="number"
          value={power}
          onChange={(e) => handleValueChange(TargetOption.power, e.target.value)}
        />
      </div>
      <div className={styles.itemRow}>
        <div>nbrHours</div>
        <input
          type="number"
          value={nbrHours}
          onChange={(e) => handleValueChange(TargetOption.nbrHours, e.target.value)}
        />
      </div>
    </div>
  )
};
