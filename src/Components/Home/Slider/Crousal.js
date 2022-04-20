import Carousel from 'react-bootstrap/Carousel'
import React, { useState, useRef } from 'react'
import CardDescription from './CardDescription'
import CardSlider from './CardSlider.js';
import './Slider.css'


export default function Crousal() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const style =
    {
        height: '20rem',
        "marginTop": "1rem"
    }

    const title =
    {
        zoom: 1.4,
    }

    const subtitle =
    {
        color: "#023E8A",
        "letterSpacing": "2px",
        "lineHeight": "14px",
    }
    const ref = useRef(null);

    const onPrevClick = () => {
        ref.current.prev();
    };
    const onNextClick = () => {
        ref.current.next();
    };

    return (
        <div className='container border-top'>
            <p className='text-center fs-6 fw-light mb-0 pt-4' style={subtitle}>Path description</p>
            <h1 className='text-center fs-1 mt-2' style={title}>Paths</h1>
            <div className='btnGroup d-none d-sm-none d-md-none d-lg-block d-xl-block'>
                <button className='arrow-btn mb-5 R' onClick={onPrevClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </button>
                <button className='arrow-btn mb-5 L ' onClick={onNextClick} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </button>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} ref={ref} interval={null} pause={'hover'}>
                <Carousel.Item id='1st-slider' >
                    <div className='row ml-2 mr-2'>

                        <div className='col-sm-6 col-md-6 offset-lg-1 offset-xl-1 col-lg-4 col-xl-4 h-100 ' style={style}>
                            <CardSlider image="images/1.jpg" />
                        </div>

                        <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 align-self-center' style={style}>
                            <CardDescription />
                        </div>
                        <div className='offset-lg-1 offset-xl-1'></div>
                    </div>
                </Carousel.Item>

                <Carousel.Item id='2nd-slider'>
                    <div className='row ml-2 mr-2'>
                        <div className='col-sm-6 col-md-6 offset-lg-1 offset-xl-1 col-lg-4 col-xl-4 h-100 ' style={style}>
                            <CardSlider image="images/2.jpg" />
                        </div>

                        <div className='col-sm-6 col-md-6 col-lg-6 col-xl-6 align-self-center' style={style}>
                            <CardDescription />

                        </div>
                        <div className='offset-lg-1 offset-xl-1'></div>
                    </div>
                </Carousel.Item>
            </Carousel >
        </div>
    )
}
