import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import choronograph from '../assets/image/chronogragh.png';
import choronograph1 from '../assets/image/chronogragh1.png';
import choronograph2 from '../assets/image/chronogragh2.png';
import choronograph3 from '../assets/image/chronogragh3.png';

const FeaturedChronograph = () => {
    const slides = [
        {
            tag: "Featured",
            title: "Best Chronograph Watches",
            description: "Swiss chronograph watches are renowned for their precision and craftsmanship, and the Chronograph movement literally means 'time writer' but essentially means a stopwatch.",
            image: choronograph
        },
        {
            tag: "Featured",
            title: "Best Perpetual Calendar Watches",
            description: "Imagine a world where you never have to adjust your calendar manually. Well, that world is closer than you think!",
            image: choronograph1
        },
        {
            tag: "Featured",
            title: "Best Skeleton Watches",
            description: "Skeleton watches are like timekeepers with nothing to hide.",
            image: choronograph2
        },
        {
            tag: "Featured",
            title: "Best Skeleton Watches",
            description: "Skeleton watches are like timekeepers with nothing to hide.",
            image: choronograph3
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="py-16 max-w-7xl mx-auto px-6 relative overflow-hidden font-lato">

            <div className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-500">

                <div className="w-full lg:w-1/2 flex justify-center items-center h-[300px] md:h-[450px]">
                    <img
                        key={currentIndex}
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="h-full w-auto object-contain"
                    />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <span className="text-cyan-500 font-bold text-xs uppercase tracking-[0.3em]">
                        {slides[currentIndex].tag}
                    </span>

                    <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-6 uppercase leading-tight">
                        {slides[currentIndex].title}
                    </h2>

                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                        {slides[currentIndex].description}
                    </p>

                    <button className="bg-cyan-500 text-white px-10 py-3 font-bold text-xs uppercase tracking-widest hover:bg-black transition-all duration-300">
                        Explore
                    </button>
                </div>
            </div>

            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2">
                <ChevronLeft size={32} />
            </button>

            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2">
                <ChevronRight size={32} />
            </button>

        </section>
    );
};

export default FeaturedChronograph;