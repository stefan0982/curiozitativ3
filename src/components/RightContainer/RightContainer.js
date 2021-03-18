import React                       from 'react'
import { makeStyles }              from '@material-ui/core/styles'
import List                        from '@material-ui/core/List'
import ListItem                    from '@material-ui/core/ListItem'
import ListItemText                from '@material-ui/core/ListItemText'
import ListItemAvatar              from '@material-ui/core/ListItemAvatar'
import Avatar                            from '@material-ui/core/Avatar'
import { graphql, Link, useStaticQuery } from 'gatsby'
import GatsbyImage                       from 'gatsby-image'

import slug from 'slug'

const query = graphql`{
  categorii: allContentfulCategorii(sort: {order: DESC, fields: curiozitati___children}) {
    edges {
      node {
        denumirea
        id
        avatar {
          fixed(width: 40, height: 40) {
            ...GatsbyContentfulFixed_tracedSVG
          }
          title
        }
      }
    }
  }
}`

const useStyles = makeStyles ( (theme) => (
  {
    root: {
      width          : '30%',
      backgroundColor: theme.palette.background.paper,
      position       : 'fixed',
    },
    item: {
      marginTop: 7,
    },
  }
) )

export default function RightContainer() {
  const classes = useStyles ()
  const { categorii } = useStaticQuery ( query )
  // categoria toate la care pagina trebuie sa fie doar /
  const categoriaToate = categorii.edges.filter(data => data.node.denumirea === 'Toate')[0].node

  // de simplificat sistema aceasta
  // prin schimbarea doar la link cu if = toate, link to / else slug(categorie)

  return (
    <List
      dense
      className={ classes.root }
    >
      <Link to="/" className="disable-link" key={ categoriaToate.id }>
        <ListItem button className={ classes.item }>
          <ListItemAvatar>
            <Avatar>
              { categoriaToate.avatar ? <GatsbyImage
                className="MuiAvatar-img"
                alt={ categoriaToate.avatar.title }
                fixed={ categoriaToate.avatar.fixed }
              /> : 'T' }
            </Avatar>
          </ListItemAvatar>
          <ListItemText style={{ color: 'black' }} primary={ categoriaToate.denumirea } />
        </ListItem>
      </Link>
      { categorii.edges.filter(data => data.node.denumirea !== 'Toate').map ( ({ node }) => (
          <Link to={`/${slug(node.denumirea)}`} className="disable-link" key={ node.id }>
            <ListItem button className={ classes.item }>
              <ListItemAvatar>
                <Avatar>
                  { node.avatar ? <GatsbyImage
                    className="MuiAvatar-img"
                    alt={ node.avatar.title }
                    fixed={ node.avatar.fixed }
                  /> : 'C' }
                </Avatar>
              </ListItemAvatar>
              <ListItemText style={{ color: 'black' }} primary={ node.denumirea } />
            </ListItem>
          </Link>
        ) ) }
    </List>
  )
}