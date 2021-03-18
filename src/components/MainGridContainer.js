import React, { useEffect, useState } from 'react'
import { makeStyles }                 from '@material-ui/core/styles';
import Grid           from '@material-ui/core/Grid';
import RightContainer from './RightContainer/RightContainer'
import HorizontalList from './TopCategories/HorizontalList'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  paper: {
    // padding: theme.spacing(2),
    // margin: 15,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGridContainer({children}) {
  const [windowWidth, setWindowWidth] = useState( 0 )
  let resizeWindow = () => {
    setWindowWidth( window.innerWidth )
  }

  useEffect( () => {
    resizeWindow()
    typeof window !== `undefined` && window.addEventListener( 'resize',
      resizeWindow,
    )
    return () => typeof window !== `undefined` && window.removeEventListener(
      'resize', resizeWindow )
  }, [] )

  let size = 'small'

  if (windowWidth >= 960 ) {
    size = 'large'
  } else {
    size = 'small'
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="space-evenly">

        {/* like instagram stories, pentru categorii pe telefon*/}
        {size === 'small' && <Grid item xs={12} sm={12} >
          {/*<div style={{ height: 100, border: '1px solid orange', borderRadius: 4 }}/>*/}
          <HorizontalList/>
        </Grid>}

         {/* feed */}
        <Grid item xs={12} sm={10} md={6} lg={5} xl={5}>
          {/*<div style={{ height: 5550, border: '1px solid orange', borderRadius: 4 }}/>*/}
          {children}
        </Grid>

        {/* categorii list rightContainer*/}
        {size === 'large' &&  <Grid item xs={12} md={4} lg={3} xl={3}>
          {/*<div style={{ height: 500, border: '1px solid orange', borderRadius: 4, position: 'fixed', width: 300 }}/>*/}
          <RightContainer/>
        </Grid>}
      </Grid>
    </div>
  );
}
