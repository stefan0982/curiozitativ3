import React                                 from 'react'
import {
  WhatsappIcon, WhatsappShareButton,
} from 'react-share'

export const WhatsappShare = ({shareUrl, title}) => {
  return (
    <WhatsappShareButton
      url={ shareUrl }
      quote={ title }
    >
      <WhatsappIcon
        size={ 36 }
        round
      />
    </WhatsappShareButton>
  )
}
