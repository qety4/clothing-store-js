import { useState } from 'react'
import './slider.styles.scss'

const Slider = ()=>{
    const [currentIndex,setIndex] = useState(0)
    const prevSlide = ()=>{
        currentIndex === 0 ?
        setIndex(currentIndex.length-1) :
        setIndex(currentIndex + 1)
    }
    const nextSlide = ()=>{
        currentIndex === slides.length-1 ?
        setIndex(0):setIndex(currentIndex+1)

    }

    return (
        <div className="slider">
            <div 
            className="slide"
            style={{backgroundImage: `img(${slides[currentIndex.url]})`}}
            >

            </div>
        </div>
    )
}
export default Slider