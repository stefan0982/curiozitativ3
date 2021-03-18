import React                                 from 'react'
import {
  TwitterIcon, TwitterShareButton,
} from 'react-share'

export const TwitterShare = ({shareUrl, title}) => {
  return (
    <TwitterShareButton
      url={ shareUrl }
      quote={ title }
    >
      <TwitterIcon
        size={ 36 }
        round
      />
    </TwitterShareButton>
  )
}
