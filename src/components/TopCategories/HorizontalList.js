import React, { useEffect, useState }    from 'react'
import { makeStyles }                    from '@material-ui/core/styles'
import GridList                          from '@material-ui/core/GridList'
import IconButton                        from '@material-ui/core/IconButton'
import logo                              from '../../../static/logo.png'
import { Typography }                    from '@material-ui/core'
import { graphql, Link, useStaticQuery } from 'gatsby'
import GatsbyImage                       from 'gatsby-image'
import slug                              from 'slug'
import Skeleton                          from '@material-ui/lab/Skeleton'

const query = graphql`
  {
  categorii:allContentfulCategorii(sort: {order: DESC, fields: curiozitati___children}) {
    edges {
      node {
        denumirea
        id
        avatar {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed_tracedSVG
          }
          title
        }
      }
    }
  }
}
`

const useStyles = makeStyles( (theme) => (
  {
    root    : {
      display       : 'flex',
      flexWrap      : 'wrap',
      justifyContent: 'space-around',
      overflow      : 'hidden',
    },
    gridList: {
      flexWrap : 'nowrap',
      transform: 'translateZ(0)',
    },
    avatar  : {
      width : '7.5vh',
      height: '7.5vh',
    },
  }
) )

export default function HorizontalList() {
  const [loading, setLoading] = useState( true )
  const classes = useStyles()
  const { categorii } = useStaticQuery( query )
  const [windowWidth, setWindowWidth] = useState( 0 )
  const [windowHeight, setWindowHeight] = useState( 0 )
  let resizeWindow = () => {
    setWindowWidth( window.innerWidth )
    setWindowHeight( window.innerHeight )
  }

  useEffect( () => {
    resizeWindow()
    typeof window !== `undefined` && window.addEventListener( 'resize',
      resizeWindow,
    )
    setLoading(false)
    return () => typeof window !== `undefined` && window.removeEventListener(
      'resize', resizeWindow )
  }, [] )

  let categorySize = windowWidth <= 500 ? '7.5vh' : '7.5vw'
  let containerHeight = windowWidth <= 500 ? '14vh' : '14vw'

  if (windowWidth <= 500 && windowHeight < 500) {
    containerHeight = '21vh'
    categorySize = '11vh'
  }

  if (loading) {
    return <div style={ { height: containerHeight } }>
      <div className={ classes.root }>
        <Skeleton
          variant="circle"
          width={ categorySize }
          height={ categorySize }
        />
        <Skeleton
          variant="circle"
          width={ categorySize }
          height={ categorySize }
        />
        <Skeleton
          variant="circle"
          width={ categorySize }
          height={ categorySize }
        />
        <Skeleton
          variant="circle"
          width={ categorySize }
          height={ categorySize }
        />
        <Skeleton
          variant="circle"
          width={ categorySize }
          height={ categorySize }
        />
      </div>
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </div>
  }

  return (
    <div className={ classes.root }>
      <GridList className={ classes.gridList }>
        { categorii.edges.map( ({ node }) => (
          <Link
            to={ node.denumirea === 'Toate' ? '/' : `/${ slug(
              node.denumirea ) }` }
            style={ { height: containerHeight } }
            className="disable-link"
            key={ node.id }
          >
            <div style={ { flexDirection: 'column' } }>
              <IconButton>
                { node.avatar ? <GatsbyImage
                  fixed={ node.avatar.fixed }
                  alt={ node.avatar.title }
                  style={ {
                    width : categorySize,
                    height: categorySize,
                  } }
                /> : <img
                  src={ logo }
                  alt="logo"
                  className={ classes.avatar }
                /> }
              </IconButton>
              <Typography
                variant={ 'body2' }
                color="textPrimary"
                style={ { marginTop: -10 } }
                align="center"
              >{ node.denumirea }</Typography>
            </div>
          </Link>
        ) ) }
      </GridList>
    </div>
  )
}
