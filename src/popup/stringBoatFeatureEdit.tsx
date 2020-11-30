import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { BoatFeature, Quality } from '../popUpContant/types';
import styles from './styles.module.css';

interface EditProps {
  item: BoatFeature,
  onUpdate: Function,
}

export const StringBoatFeatureEdit = ({ item, onUpdate }: EditProps) => {
  const [itemName, setItemName] = React.useState(item.name);
  const [itemValue, setItemValue] = React.useState(item.value);
  const [itemQuality, setItemQuality] = React.useState(item.quality);
  const [itemDealBreaker, setItemDealBreaker] = React.useState(item.dealBreaker);
  const [itemCost, setItemCost] = React.useState(item.replacementCost);

  const rebuildItem = ():BoatFeature => ({
    ...item,
    name: itemName,
    value: itemValue,
    quality: itemQuality,
    dealBreaker: itemDealBreaker,
    replacementCost: itemCost,
  });

  const handleItemQuality = (value: string) => {
    // TODO: Must be a better way to do this.
    let newQuality: Quality;
    switch (value) {
      case Quality.GOOD:
        newQuality = Quality.GOOD;
        break;
      case Quality.REPLACE_LATER:
        newQuality = Quality.REPLACE_LATER;
        break;
      case Quality.REPLACE_NOW:
        newQuality = Quality.REPLACE_NOW;
        break;
      case Quality.NA:
      default:
        newQuality = Quality.NA;
        break;
    }
    setItemQuality(newQuality);
  };

  const dealBreakerClass = (itemDealBreaker) ? styles.dealBreaker : null;

  return (
    <div>
      <strong className={dealBreakerClass}>{item.section}</strong>
      <div className={dealBreakerClass}>
        <input
          type="string"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div>
        value:
        <input
          id="itemValue"
          type="string"
          value={itemValue}
          onChange={(e) => setItemValue(e.target.value)}
        />
      </div>
      <div>
        Quality:
        {itemQuality}
        <select value={itemQuality} onChange={(e) => handleItemQuality(e.target.value)}>
          <option value={Quality.GOOD}>Good</option>
          <option value={Quality.REPLACE_LATER}>Replace later</option>
          <option value={Quality.REPLACE_NOW}>Broken</option>
          <option value={Quality.NA}>N/A</option>
        </select>
      </div>
      <div>
        Cost:
        <input
          id="itemCost"
          type="number"
          value={itemCost}
          onChange={(e) => setItemCost(parseFloat(e.target.value))}
        />
      </div>
      <div>
        comments:
        {item.comments}
      </div>
      <div>
        <button type="button" onClick={() => setItemDealBreaker(!itemDealBreaker)}>
          {itemDealBreaker ? 'Important' : 'Optional'}
        </button>
      </div>
      <button type="button" onClick={() => onUpdate(rebuildItem())}>Save</button>
    </div>
  );
};

export const StringBoatFeature = ({ item }: {item:BoatFeature}) => {
  const dealBreakerClass = (item.dealBreaker) ? styles.dealBreaker : null;
  const displayProperIcon = (quality: Quality) => {
    switch (quality) {
      case Quality.GOOD:
        return <FontAwesomeIcon icon={faCheckCircle} color="green" />;
      case Quality.REPLACE_LATER:
        return <FontAwesomeIcon icon={faExclamationTriangle} color="orange" />;
      case Quality.REPLACE_NOW:
        return <FontAwesomeIcon icon={faBomb} color="red" />;
      case Quality.NA:
      default:
        return 'NA';
    }
  };
  return (
    <div className={styles.itemRow}>
      <strong className={dealBreakerClass}>{item.section}</strong>
      <div className={dealBreakerClass}>
        name:
        {' '}
        {item.name}
      </div>
      {item.value ? (
        <div>
          value:
          {' '}
          {item.value}
        </div>
      ) : null}
      <div>
        Quality:
        {' '}
        {displayProperIcon(item.quality)}
      </div>
      {item.replacementCost ? (
        <div>
          Cost:
          {' '}
          {item.replacementCost}
        </div>
      ) : null}
      {item.comments.length > 0 ? (
        <div>
          {' '}
          {item.comments}
          {' '}
        </div>
      ) : null}
    </div>
  );
};
