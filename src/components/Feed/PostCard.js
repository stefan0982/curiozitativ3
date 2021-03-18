import React, { useState } from 'react'
import { makeStyles }     from '@material-ui/core/styles'
import Card               from '@material-ui/core/Card'
import CardHeader         from '@material-ui/core/CardHeader'
import CardContent        from '@material-ui/core/CardContent'
import { Link }           from 'gatsby'
import GatsbyImage        from 'gatsby-image'
import slug               from 'slug'
import { formatRelative } from 'date-fns'
import { ro }             from 'date-fns/locale'
import PostShareMenu      from './PostShareMenu'

const useStyles = makeStyles( (theme) => (
  {
    root  : {
      marginTop: 25,
    },
    media : {
      width: '100%',
    },
    avatar: {
      width : '40px',
      height: '40px',
    },
    modal : {
      display       : 'flex',
      alignItems    : 'center',
      justifyContent: 'center',
    }
  }
) )

export default function PostCard({
  description,
  img,
  title,
  avatar,
  categoria,
  data,
  linkId,
}) {

  const formatRelativeLocale = {
    lastWeek : 'eeee \'la\' kk:mm',
    yesterday: '\'ieri la\' kk:mm',
    today    : '\'astăzi la\' kk:mm',
    tomorrow : '\'maine la\' kk:mm',
    nextWeek : '\'urmatoarea \'eeee \'la\' kk:mm',
    other    : 'PP',
  }

  const locale = {
    ...ro,
    formatRelative: token => formatRelativeLocale[token],
  }

  const [stateDescription, setDescription] = useState(
    description.slice( 0, 75 ) )
  const [readMore, setReadMore] = useState( '... mai mult' )
  const classes = useStyles()

  return (
    <>
      <Card className={ classes.root }>
        <CardHeader
          title={ <Link
            to={ categoria !== 'Toate' ? `/${ slug( categoria ) }` : '/' }
            className="disable-link"
            style={ {
              color   : 'black',
              fontSize: '1.2em',
            } }
          >{ categoria }</Link> }
          subheader={ formatRelative(
            new Date( data ), Date.now(), { locale } ) }
          style={ {
            padding   : 8,
            marginLeft: 8,
          } }
          // de cautat cum la click sa ramai tot acolo fara reload
          avatar={ <Link
            to={ categoria !== 'Toate' ? `/${ slug( categoria ) }` : '/' }
            className="disable-link"
          >
            <GatsbyImage
              fixed={ avatar.fixed }
              alt={ title }
              // className={ classes.avatar }
            />
          </Link> }
          action={
            <PostShareMenu linkId={linkId} title={title} />
          }
        />
        {linkId ? <Link
          to={ `/${ linkId }` }
          state={{
            modal: true,
            noScroll: true
          }}
        >
          <GatsbyImage
            className={ classes.media }
            fluid={ img.fluid }
            alt={ title }
          />
        </Link> : <GatsbyImage
          className={ classes.media }
          fluid={ img.fluid }
          alt={ title }
        />}
        <CardContent>
          <div>
            { stateDescription }
            <span
              color="textPrimary"
              onKeyDown={ () => {
                setDescription( description )
                setReadMore( null )
              } }
              onClick={ () => {
                setDescription( description )
                setReadMore( null )
              } }
              role="button"
              tabIndex="0"
              style={ {
                color : 'gray',
                cursor: 'pointer',
              } }
            >{ description.length >= 75 && readMore }</span>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
