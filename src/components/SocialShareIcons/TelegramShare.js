import React                                 from 'react'
import {
  TelegramIcon, TelegramShareButton,
} from 'react-share'

export const TelegramShare = ({shareUrl, title}) => {
  return (
    <TelegramShareButton
      url={ shareUrl }
      quote={ title }
    >
      <TelegramIcon
        size={ 36 }
        round
      />
    </TelegramShareButton>
  )
}
