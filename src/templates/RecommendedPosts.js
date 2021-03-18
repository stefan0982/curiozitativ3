import React                             from 'react'
import { makeStyles }                    from '@material-ui/core/styles'
import Grid                              from '@material-ui/core/Grid'
import { graphql, useStaticQuery, Link } from 'gatsby'
import GatsbyImage                       from 'gatsby-image'

const useStyles = makeStyles( (theme) => (
  {
    root : {
      flexGrow : 1,
      marginTop: 20,
      marginBottom: 20,
    },
  }
) )

const query = graphql`{
  data:allContentfulCuriozitati(limit: 4) {
    edges {
      node {
        linkId: createdAt(formatString: "DDMMYYHHmmss", locale: "ro")
        imagine {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

export default function RecommendedPosts() {
  const { data } = useStaticQuery( query )

  const classes = useStyles()

  return (
    <div className={ classes.root }>
      <Grid container>
        { data.edges.map( ({ node }) => (
          <Grid
            item
            xs={ 6 }
            md={ 3 }
            lg={ 3 }
            key={node.linkId}
          >
            <Link to={ `/${node.linkId}`} >
              <GatsbyImage fluid={ node.imagine.fluid } />
            </Link>
          </Grid>
        ) ) }

      </Grid>
    </div>
  )
}

