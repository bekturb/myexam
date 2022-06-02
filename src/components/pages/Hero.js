import React from 'react';
import Slider from "react-slick";
import books from '../../assets/Books1.jpeg'
import '../styles/Hero.scss'

const Hero = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
    return (
        <section id='hero'>
            <div className="container">
                <div className="hero">
                    <Slider {...settings}>
                        <div className='hero__image'>
                            <img src={books} alt=""/>
                        </div>
                        <div className='hero__image'>
                            <img src={books} alt=""/>
                        </div>
                        <div className='hero__image'>
                            <img src={books} alt=""/>
                        </div>
                        <div className='hero__image'>
                            <img src={books} alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Hero;