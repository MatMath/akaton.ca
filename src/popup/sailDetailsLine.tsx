import * as React from 'react';

import { Sail, Quality, SailType, CommentsStructure } from '../popUpContant/types'

interface Props {
  sailDetail: Sail
}

export const SailDetailsLine = ({sailDetail}: Props) => {

  React.useEffect(() => {

  }, [sailDetail.type, sailDetail.replacementCost, sailDetail.quality])
  return (
    <>
    Name > Name Bold/red on dealBReak
    SailType (dropdown)
    
    if sailtype then:
    quality : dropdown
    if quality less good
    add replacement cost
    <div>CommentS</div>
    </>
  )
}