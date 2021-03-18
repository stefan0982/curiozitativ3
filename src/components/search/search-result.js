import { Link } from 'gatsby'
import { default as React } from 'react'
import {
  connectStateResults, Hits, Index, Snippet,
} from 'react-instantsearch-dom'

const HitCount = connectStateResults( ({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="HitCount">
      { hitCount === 1 ? 'un' : hitCount } { hitCount !== 1 ? `rezultate` : `rezultat` }
    </div>
  ) : null
} )

const PageHit = ({ hit }) => {
  return (
    <div>
      <Link to={ hit.slug }>
        <Snippet
          attribute="title"
          hit={ hit }
          tagName="mark"
        />
      </Link>
    </div>
  )
}

const HitsInIndex = ({ index }) => (
  <Index indexName={ index.name }>
    <HitCount />
    <Hits
      className="Hits"
      hitComponent={ PageHit }
    />
  </Index>
)

const SearchResult = ({
  indices,
  className,
}) => (
  <div className={ className }>
    { indices.map( index => (
      <HitsInIndex
        index={ index }
        key={ index.name }
      />
    ) ) }
  </div>
)

export default SearchResult