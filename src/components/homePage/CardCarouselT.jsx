import '../../styles/componets/homePage/CardCarouselT.css'
import React from 'react'
const CardCarouselT = ({imageUrl }) => {
  return (
    <div className="card-t">
      <img className="card-img-top" src={imageUrl} alt="" />
    </div>
  )
}

export default CardCarouselT