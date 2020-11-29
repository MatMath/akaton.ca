import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb, faCheckCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import { BoatFeature, Quality } from '../popUpContant/types'
import styles from './styles.module.css'

interface Props {
  item: BoatFeature,
  onUpdate?: Function,
}

enum ItemKeys {
  name = 'name',
  value = 'value',
  quality = 'quality',
  dealBreaker = 'dealBreaker',
  replacementCost = 'replacementCost'
}

export const StringBoatFeatureEdit = ({item, onUpdate}:Props) => {
  const [localItem, setLocalItem] = React.useState(item)

  const updateItem = (key:ItemKeys, value:any) => {
    console.log('UPDATE: ', key, value);
    
    const tmpItem = {...localItem, [key]: value}
    setLocalItem(tmpItem)
  }

  const dealBreakerClass = (item.dealBreaker)? styles.dealBreaker: null

  return (
    <div>
      <strong className={dealBreakerClass}>{item.section}</strong>
      <div className={dealBreakerClass}><input type="string" onChange={(e) => updateItem(ItemKeys.name, e.target.value)} value={item.name}/></div>
      <div>value: <input type="string" onChange={(e) => updateItem(ItemKeys.value, e.target.value)} value={item.value}/></div>
      <div>Quality: {item.quality}</div>
      <div>Cost: {item.replacementCost}</div>
      <div>comments: {item.comments}</div>
      <div>DealBreaker: {item.dealBreaker}</div>
      <button onClick={() => {onUpdate(localItem)}}>Save</button>
    </div>
  )
}

export const StringBoatFeature = ({item}:Props) => {
  const dealBreakerClass = (item.dealBreaker)? styles.dealBreaker: null
  const displayProperIcon = (quality: Quality) => {
    switch (quality) {
      case Quality.GOOD:
        return <FontAwesomeIcon icon={faCheckCircle} color="green" />
      case Quality.REPLACE_LATER:
        return <FontAwesomeIcon icon={faExclamationTriangle} />
      case Quality.REPLACE_NOW:
        return <FontAwesomeIcon icon={faBomb} />
      case Quality.NA:
      default:
        return 'NA'
    }
  }
  return (
    <div className={styles.itemRow}>
      <strong className={dealBreakerClass}>{item.section}</strong>
      <div className={dealBreakerClass}>name: {item.name}</div>
      {item.value? <div>value: {item.value}</div> : null}
      <div>Quality: {displayProperIcon(item.quality)}</div>
      {item.replacementCost? <div>Cost: {item.replacementCost}</div> : null}
      {item.comments.length> 0 ? <div> {item.comments} </div>: null}
    </div>
  )
}