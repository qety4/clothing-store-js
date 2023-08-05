import React from 'react'
import './otherlooks.styles.scss'
import { otr } from './../../assets/other-looks/otherLooks.js'
import ProductCard from '../ProductCard/ProductCard'

const OtherLooks = () => {
  return (
    <div className='otr-grid'>
      <div className='look-items'>
        {
          otr.map((item, index) => {
            if (index < 4) {
              return (
                <ProductCard key={index} index={index} item={item} />
              )
            }
            return null
          })
        }
      </div>
      <div className='look-pic-container'>
        <img className='look-pic' src={otr[4].url} alt="" />
      </div>
    </div>
  )
}

export default OtherLooks