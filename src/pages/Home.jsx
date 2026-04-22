import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedChronograph from '../components/FeaturedChronograph';
import MostLovedWatches from '../components/MostLovedWatches';
import BrandWall from '../components/BrandWall';
import CollectionHeader from '../components/CollectionHeader';
import Features from '../components/Features';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Hero />
            <Features />
            <FeaturedChronograph />
            <MostLovedWatches />
            <BrandWall />
            <CollectionHeader bgImage="/images/mens-collection.png" />
        </main>
    );
};

export default Home;