import React, { useEffect, useState } from 'react'
import Navbar                         from '../components/Navigation/Navbar'
import MainGridContainer              from '../components/MainGridContainer'
import SEO                            from '../components/SEO'
import PostCard                       from '../components/Feed/PostCard'
import './styles.css'
import CardPerformance                from '../components/CardPerforrmance'

const InfinityScroll = ({ pageContext: { data } }) => {
  const [hasMore, setMore] = useState( data.length > 7 )
  const [currentList, addToList] = useState( [...data.slice( 0, 2 )] )

  const loadData = () => {
    const currentLength = currentList.length
    const more = currentLength < data.length
    const nextEdges = more ? data.slice( currentLength, currentLength + 7 )
      : []
    setMore( more )
    addToList( [...currentList, ...nextEdges] )
  }

  const handleScroll = () => {
    if (!hasMore) {
      return
    }
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if ( scrollTop + clientHeight > scrollHeight - 500 ) {
      loadData()
    }
   }

  useEffect( () => {
    window.addEventListener( 'scroll', handleScroll )
    return () => {
      window.removeEventListener( 'scroll', handleScroll )
    }
  }, [hasMore, currentList] )

  return (
    <>
      <Navbar/>
      <SEO
        article
        title="Curiozități"
        description="O zi în care nu înveți nimic nou este o zi pierdută, deaceea află cele mai interesante curiozități aici"
      />
      <MainGridContainer>
        {/*<CardPerformance/>*/}
        {/*<CardPerformance/>*/}

        { currentList.map( ({ node }) => (
          <PostCard
            img={ node.imagine }
            title={ node.imagine.title }
            description={ node.imagine.description }
            avatar={ node.categoria[0].avatar }
            categoria={ node.categoria[0].denumirea }
            data={ node.data }
            key={ node.id }
            linkId={node.linkId}
          />
        ) ) }
      </MainGridContainer>
    </>
  )
}

export default InfinityScroll
