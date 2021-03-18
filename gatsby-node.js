const path = require( 'path' )
const slug = require( 'slug' )

exports.createPages = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions
  const { data } = await graphql( `
    {
  categories: allContentfulCategorii(filter: {denumirea: {ne: "Toate"}}) {
    edges {
      node {
        denumirea
      }
    }
  }
  curiozitati: allContentfulCuriozitati(sort: {fields: imagine___createdAt, order: DESC}) {
    edges {
      node {
        id
        data: createdAt
        linkId: createdAt(formatString: "DDMMYYHHmmss", locale: "ro")
        imagine {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          title
          description
        }
        categoria {
          avatar {
            fixed(width: 40, height: 40) {
              width
              height
              src
              srcSet
            }
          }
          denumirea
        }
      }
    }
  }
}

   ` )
  data.categories.edges.forEach( edge => {
    const categorySlug = slug( edge.node.denumirea )
    createPage( {
      path     : `/${ categorySlug }`,
      component: path.resolve( `./src/templates/CategoryTemplate.js` ),
      context  : {
        category: edge.node.denumirea,
      },
    } )
  } )
  data.curiozitati.edges.forEach( edge => {
    const curiozitateSlug = slug( edge.node.linkId )
    createPage( {
      path     : `/${ curiozitateSlug }`,
      component: path.resolve( `./src/templates/PostTemplate.js` ),
      context  : {
        id: edge.node.id,
      },
    } )
  } )

  createPage( {
    path     : `/`,
    component: path.resolve( `./src/templates/InfinityScroll.js` ),
    context  : {
      data: data.curiozitati.edges,
    },
  } )
}



