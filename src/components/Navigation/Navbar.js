import React              from 'react'
import { makeStyles }     from '@material-ui/core/styles'
import AppBar             from '@material-ui/core/AppBar'
import Toolbar            from '@material-ui/core/Toolbar'
import IconButton         from '@material-ui/core/IconButton'
import logo               from '../../../static/logo.png'
import { Link }           from 'gatsby'
import InstagramIcon      from '@material-ui/icons/Instagram'
import AndroidRoundedIcon from '@material-ui/icons/AndroidRounded'
import NavbarMobileMenu   from './NavbarMobileMenu'

// search import
import Search         from '../search'
import InstagramLink  from './InstagramLink'
import GooglePlayLink from './GooglePlayLink'
import FacebookLink   from './FacebookLink'
import FacebookIcon   from '@material-ui/icons/Facebook'

const searchIndices = [
  {
    name : `Curiozitati`,
    title: `Curiozitati`,
  },
]

const useStyles = makeStyles( (theme) => (
  {
    grow          : {
      flexGrow: 1,
    },
    menuButton    : {
      marginRight: theme.spacing( 2 ),
    },
    title         : {
      display                       : 'none',
      [theme.breakpoints.up( 'sm' )]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display                       : 'none',
      [theme.breakpoints.up( 'md' )]: {
        display: 'flex',
      },
    },
    sectionMobile : {
      display                       : 'flex',
      [theme.breakpoints.up( 'md' )]: {
        display: 'none',
      },
    },
  }
) )

export default function Navbar({ search = true }) {

  const installApp = (
    <GooglePlayLink>
      <IconButton
        color="inherit"
        aria-label="install app"
      >
        <AndroidRoundedIcon />
      </IconButton>
    </GooglePlayLink>
  )

  const classes = useStyles()

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        className="header"
      >
        <Toolbar>
          <Link
            to="/"
            className="disable-link"
          >
            <IconButton
              edge="start"
              className={ classes.menuButton }
              color="primary"
              aria-label="Logo"
            >
              <img
                src={ logo }
                alt="logo"
                style={ {
                  width : '1.4em',
                  height: '1.4em',
                } }
              />
            </IconButton>
          </Link>
          {/*search bar */ }
          { search && <Search indices={ searchIndices } /> }
          <div className={ classes.grow } />
          { search && <div className={ classes.sectionDesktop }>
            { installApp }
            <InstagramLink>
              <IconButton
                color="inherit"
                aria-label="instagram"
              >
                <InstagramIcon />
              </IconButton>
            </InstagramLink>
            <FacebookLink>
              <IconButton
                aria-label="facebook"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
            </FacebookLink>
          </div> }
          { !search && <>
            { installApp }
            <InstagramLink>
              <IconButton
                aria-label="instagram"
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
            </InstagramLink>
            <FacebookLink>
              <IconButton
                aria-label="facebook"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
            </FacebookLink>
          </> }
          { search && <div className={ classes.sectionMobile }>
            <NavbarMobileMenu/>
          </div> }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}
