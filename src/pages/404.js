import * as React from 'react'
import './404.css'
import { Button } from '@material-ui/core'
import { Link }   from 'gatsby'
import rocket from '../../static/rocket.svg'
import earth from '../../static/earth.svg'
import moon from '../../static/moon.svg'
import astronaut from '../../static/astronaut.svg'

const NotFoundPage = () => {
  return (
    <div className="bg-purple">
      <div className="stars">
        <div className="custom-navbar">

        </div>
        <div className="central-body">
          <img
            className="image-404"
            src={ require( '../../static/404.png' ) }
            width="300px"
            alt="error"
          />
          <Link
            to="/"
            style={ { textDecoration: 'none' } }
          >
            <Button
              style={ {
                color   : 'white', backgroundColor: '#FFCB39',
                position: 'relative', zIndex: 100,
              } }
              variant={ 'contained' }
            >
              Întoarce-te acasă
            </Button>
          </Link>

        </div>
        <div className="objects">
          <img
            className="object_rocket"
            src={rocket}
            width="40px"
           alt="rocket"/>
          <div className="earth-moon">
            <img
              className="object_earth"
              src={earth}
              width="100px"
             alt="earth"/>
            <img
              className="object_moon"
              src={moon}
              width="80px"
             alt="moon"/>
          </div>
          <div className="box_astronaut">
            <img
              className="object_astronaut"
              src={astronaut}
              width="140px"
             alt="astronaut"/>
          </div>
        </div>
        <div className="glowing_stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />

        </div>

      </div>
    </div>
  )
}

export default NotFoundPage
