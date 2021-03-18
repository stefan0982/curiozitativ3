import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
    >
      { 'Copyright © ' }
      <Link
        to="/"
        className="disable-link"
      >
        curiozitati.app
      </Link>{ ' ' }
      { new Date().getFullYear() }
      { '.' }
    </Typography>
  )
}

const useStyles = makeStyles( (theme) => (
  {
    footer: {
      backgroundColor: theme.palette.background.paper, // marginTop:
                                                       // theme.spacing(8),
      padding: theme.spacing( 4, 0 ),
    },
  }
) )

export default function Footer({
  description,
  title,
}) {
  const classes = useStyles()

  return (
    <footer className={ classes.footer }>
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          style={ { fontFamily: 'Arial, sans-serif' } }
        >
          { title }
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          { description }
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
