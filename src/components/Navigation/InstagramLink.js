import React from 'react'

const InstagramLink = ({children}) => {
  return (
    <a
      href="https://www.instagram.com/curiozitati.app/"
      target="_blank"
      rel="noreferrer"
      className="disable-link"
      style={ { color: 'black' } }
    >
      {children}
    </a>
  )
}

export default InstagramLink
