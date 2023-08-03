import { slides } from '../../assets/slides/slides.js'
import { useState } from 'react'
import './slider.styles.scss'

const Slider = () => {
    const [currentIndex, setIndex] = useState(0)
    const prevSlide = () => {
        currentIndex === 0 ?
            setIndex(slides.length - 1) :
            setIndex(currentIndex - 1)
    }
    const nextSlide = () => {
        currentIndex === slides.length - 1 ?
            setIndex(0) : setIndex(currentIndex + 1)

    }

    return (
        <div className="slider">
            <div className='title'>
                <p>Title</p>
            </div>
            <div className="slide">

                <div className='slide-img' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {
                        slides.map(img =>
                            <img key={img.title} className='slide-img-1' src={img.url} />
                        )
                    }
                </div>
                <div className='prev-next'>
                    <button
                        onClick={() => prevSlide()}
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={() => nextSlide()}
                    >
                        &#8250;
                    </button>

                </div>
            </div>
            <div className='about'>
                <p>About</p>
            </div>

        </div>
    )
}
export default Slider