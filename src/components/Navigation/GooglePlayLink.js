import React from 'react'

const GooglePlayLink = ({children}) => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.curiozitati"
      target="_blank"
      rel="noreferrer"
      className="disable-link"
      style={ { color: 'black' } }
    >
      {children}
    </a>
  )
}

export default GooglePlayLink
