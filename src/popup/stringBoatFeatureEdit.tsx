import * as React from 'react'
import { BoatFeature } from '../popUpContant/types'
import styles from './styles.module.css'

interface Props {
  item: BoatFeature,
  onUpdate: Function,
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
    const tmpItem = {...localItem, [key]: value}
    setLocalItem(tmpItem)
  }

  return (
    <div>
      <div className={styles.dealBreaker}>name: {item.name}</div>
      value: <input onChange={(e) => updateItem(ItemKeys.value, e.target.value)} value={item.value}/>
      Quality: {item.quality}
      Cost: {item.replacementCost}
      comments: {item.comments}
      DealBreaker: {item.dealBreaker}
      <button onClick={() => {onUpdate(localItem)}}>DONE</button>
    </div>
  )
}
{/* <input value={item.dealBreaker} type="checkbox" /> */}