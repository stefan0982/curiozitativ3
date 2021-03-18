const indexName = `Curiozitati`

const pageQuery = `{
  pages: allContentfulCuriozitati {
    totalCount
    edges {
      node {
        id
        linkId:createdAt(formatString: "DDMMYYHHmmss", locale: "ro")
        imagine {
          title
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, linkId, imagine } }) {
  return {
    objectID: id,
    slug: linkId,
    ...imagine,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`*:40`] },
  },
]

module.exports = queries