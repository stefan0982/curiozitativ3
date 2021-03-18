import React                   from 'react';
import { graphql }             from 'gatsby'
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import GatsbyGramModal         from '../components/Feed/GatsbyGramModal'
import PostDetail              from '../components/Feed/PostDetail'
import Navbar                  from '../components/Navigation/Navbar'
import PostPage                from '../components/Feed/PostPage'
import SEO                     from '../components/SEO'

export default function PostTemplate({location, data}) {
  const seoImage = data.info.imagine.fluid.src
  const seoTitle = data.info.imagine.title
  const seoDescription = data.info.imagine.description || 'O zi în care nu înveți nimic nou este o zi pierdută'

  return (
    <>
      <SEO
        image={ `${ seoImage }` }
        title={ seoTitle }
        description={seoDescription}
        article={true}
      />
    <ModalRoutingContext.Consumer>
      {({ modal }) => {
        return (
          modal ? (
            <GatsbyGramModal
              location={ location }
              post={data}
            >
              <PostDetail post={data}/>
            </GatsbyGramModal>
          ) : (
            <>
              <Navbar search={false}/>
              <PostPage post={data}/>
            </>
          )
        )
      }}
    </ModalRoutingContext.Consumer>
      </>

  );
}


export const query = graphql`
  query($id: String!) {
    info:contentfulCuriozitati(id: {eq: $id}) {
        id
        data:createdAt
        linkId:createdAt(formatString: "DDMMYYHHmmss", locale: "ro")
        imagine {
          fluid(maxWidth: 1080) {
            ...GatsbyContentfulFluid
          }
          title
          description
        }
        categoria {
          avatar {
            fixed(width: 40, height: 40) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          denumirea
        }
  }  
  }
`

