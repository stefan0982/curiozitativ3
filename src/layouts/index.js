import React                    from 'react'
import { makeStyles }           from '@material-ui/core/styles'
import Footer                   from '../components/Navigation/Footer'
import { ScrollToTop }          from '../components/Navigation/ScrollToTop'
import ContextProviderComponent from '../Context'

const useStyles = makeStyles( {
  layout: {
    display      : 'flex',
    flexDirection: 'column',
    minHeight    : '100vh',
  },
  main  : {
    flex: '1 0 auto',
  },
} )

const Layout = ({ children, location }) => {

  const classes = useStyles()

  return (
    <ContextProviderComponent>
      <div className={ classes.layout }>
        <ScrollToTop showBelow={ 1500 } />
        <div className={ classes.main }>
          { children }
        </div>
        {location.key !== 'initial' && <Footer
          title={ 'Cele mai interesante curiozități' }
        />}
      </div>
    </ContextProviderComponent>
  )
}

export default Layout
