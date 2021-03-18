import React             from 'react'
import Button            from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow              from '@material-ui/core/Grow'
import Paper             from '@material-ui/core/Paper'
import Popper            from '@material-ui/core/Popper'
import MenuItem          from '@material-ui/core/MenuItem'
import MenuList          from '@material-ui/core/MenuList'
import { makeStyles }    from '@material-ui/core/styles'
import ShareIcon         from '@material-ui/icons/Share'
import { FacebookShare } from '../SocialShareIcons/FacebookShare'
import { TelegramShare } from '../SocialShareIcons/TelegramShare'
import { TwitterShare }  from '../SocialShareIcons/TwitterShare'
import { WhatsappShare } from '../SocialShareIcons/WhatsappShare'
import { ViberShare }    from '../SocialShareIcons/ViberShare'

const useStyles = makeStyles( (theme) => (
  {
    root : {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing( 2 ),
    },
  }
) )

export default function PostShareMenu({
  linkId,
  title,
}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState( false )
  const anchorRef = React.useRef( null )

  const handleToggle = () => {
    setOpen( (prevOpen) => !prevOpen )
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains( event.target )) {
      return
    }

    setOpen( false )
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen( false )
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef( open )
  React.useEffect( () => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open] )

  const shareUrl = `https://curiozitati.app/${ linkId }`

  return (
    <div className={ classes.root }>
      <Button
        ref={ anchorRef }
        aria-controls={ open ? 'menu-list-grow' : undefined }
        aria-haspopup="true"
        aria-label="Share"
        onClick={ handleToggle }
        style={ {
          marginTop  : 12,
          marginRight: 8,
        } }
      >
        <ShareIcon />
      </Button>
      <Popper
        open={ open }
        anchorEl={ anchorRef.current }
        role={ undefined }
        transition
        disablePortal
        style={ { zIndex: 1 } }
      >
        { ({
          TransitionProps,
          placement,
        }) => (
          <Grow
            { ...TransitionProps }
            style={ {
              transformOrigin: placement === 'bottom' ? 'center top'
                : 'center bottom',
            } }
          >
            <Paper>
              <ClickAwayListener onClickAway={ handleClose }>
                <MenuList
                  autoFocusItem={ open }
                  id="menu-list-grow"
                  onKeyDown={ handleListKeyDown }
                >
                  <MenuItem onClick={ handleClose }>
                    <FacebookShare shareUrl={shareUrl} title={title} />
                  </MenuItem>
                  <MenuItem onClick={ handleClose }>
                    <TelegramShare shareUrl={shareUrl} title={title} />
                  </MenuItem>
                  <MenuItem onClick={ handleClose }>
                    <TwitterShare shareUrl={shareUrl} title={title} />
                  </MenuItem>
                  <MenuItem onClick={ handleClose }>
                    <WhatsappShare shareUrl={shareUrl} title={title} />
                  </MenuItem>
                  <MenuItem onClick={ handleClose }>
                    <ViberShare shareUrl={shareUrl} title={title}/>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        ) }
      </Popper>
    </div>
  )
}
