import React, { useState, useEffect } from 'react';
import hero from "../assets/image/hero.png";
import hero1 from "../assets/image/hero1.png";
import hero2 from "../assets/image/hero2.png";
import hero3 from "../assets/image/hero3.png";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [hero, hero1, hero2, hero3];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);

        return () => clearInterval(slideInterval);
    }, [slides.length]);

    return (
        <section className="relative w-full h-[400px] md:h-[600px] bg-black overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                        src={slide}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
            ))}
        </section>
    );
};

export default Hero;