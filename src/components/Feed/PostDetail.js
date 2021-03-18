import React       from 'react'
import CardMedia   from '@material-ui/core/CardMedia'
import GatsbyImage from 'gatsby-image'

export default function PostDetail({ post }) {

  return (
    <CardMedia
      alt={post.info.imagine.title}
      title={post.info.imagine.title}
      style={{ width: '100vw', maxWidth: '80vh' }}
    >
      <GatsbyImage
        fluid={ post.info.imagine.fluid }
        className="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img"
        alt={post.info.imagine.title}
      />
    </CardMedia>
  )
}
