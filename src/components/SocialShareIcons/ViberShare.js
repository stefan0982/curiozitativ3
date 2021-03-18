import React                                 from 'react'
import {
  ViberIcon, ViberShareButton,
} from 'react-share'

export const ViberShare = ({shareUrl, title}) => {
  return (
    <ViberShareButton
      url={ shareUrl }
      quote={ title }
    >
      <ViberIcon
        size={ 36 }
        round
      />
    </ViberShareButton>
  )
}
