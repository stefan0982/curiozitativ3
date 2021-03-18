import React                                 from 'react'
import { FacebookIcon, FacebookShareButton } from 'react-share'

export const FacebookShare = ({shareUrl, title}) => {
  return (
    <FacebookShareButton
      url={ shareUrl }
      quote={ title }
      aria-label="Facebook Share Button"
    >
      <FacebookIcon
        size={ 36 }
        round
      />
    </FacebookShareButton>
  )
}
