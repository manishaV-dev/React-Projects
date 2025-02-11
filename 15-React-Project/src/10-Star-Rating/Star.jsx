import React from 'react'
import StarRating from './StarRating'
import './star.css'
import StarRatingOptimized from './optimizedStarRating'

const Star = () => {

  return (
    <>
    {/* <StarRating numberOfStar={0} /> */}
    <StarRating numberOfStar={5} />
    <StarRatingOptimized />
    </>
  )
}

export default Star