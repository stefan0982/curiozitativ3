import React                             from 'react';
import { makeStyles }                    from '@material-ui/core/styles';
import Switch                            from '@material-ui/core/Switch';
import Paper                             from '@material-ui/core/Paper';
import Fade                              from '@material-ui/core/Fade';
import FormControlLabel                  from '@material-ui/core/FormControlLabel';
import { graphql, Link, useStaticQuery } from 'gatsby'
import slug                              from 'slug'
import ListItem                          from '@material-ui/core/ListItem'
import ListItemAvatar                    from '@material-ui/core/ListItemAvatar'
import Avatar                            from '@material-ui/core/Avatar'
import GatsbyImage                       from 'gatsby-image'
import ListItemText                      from '@material-ui/core/ListItemText'

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

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
    width: 300
  },
  container: {
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 300,
    height: 800,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function FadeComponent() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const { categorii } = useStaticQuery ( query )
  console.log(categorii)
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <div className={classes.container}>
        <Fade in={checked} timeout={2000}>
          <div>
          { categorii.edges.filter(data => data.node.denumirea !== 'Toate').map ( ({ node }) => (
            <Link to={`/${slug(node.denumirea)}`} className="disable-link" key={ node.id }>
              <ListItem button >
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
          </div>
        </Fade>
      </div>
    </div>
  );
}
