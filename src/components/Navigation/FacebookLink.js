import React from 'react'

const FacebookLink = ({children}) => {
  return (
    <a
      href="https://www.facebook.com/curiozitatiapp-100527385314276"
      target="_blank"
      rel="noreferrer"
      className="disable-link"
      style={ { color: 'black' } }
    >
      {children}
    </a>
  )
}

export default FacebookLink
