import FilterSidebar from '../components/FilterSidebar';
import TopBar from '../components/TopBar';
import ProductCard from '../components/ProductCard';
import CollectionHeader from '../components/CollectionHeader';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SmartWatches = () => {

    const smartWatches = [
        { id: 1, brand: 'MOVADA', model: 'BOLD', price: '30005', image: '/images/Item-card-image.png' },
        { id: 2, brand: 'BALMAIN', model: 'GENT', price: '49995', image: '/images/Item-card-image-1.png' },
        { id: 3, brand: 'GUESS', model: 'PHOENIX', price: '9995', image: '/images/Item-card-image-2.png' },
        { id: 4, brand: 'VERSACE', model: 'FIELD FORCE', price: '59000', image: '/images/Item-card-image-3.png' },
        { id: 5, brand: 'TITAN', model: 'EDGE BASELINE', price: '19495', image: '/images/Item-card-image-6.png' },
        { id: 6, brand: 'FOSSIL', model: 'VERGINIA', price: '12995', image: '/images/Item-card-image-7.png' },
        { id: 7, brand: 'KENNETH COLE', model: 'UNISEX', price: '4000', image: '/images/Item-card-image-8.png' },
        { id: 8, brand: 'ARMANI EXCHANGE', model: 'OUTER BANKS', price: '9995', image: '/images/Item-card-image-9.png' },
        { id: 9, brand: 'G-SHOCK', model: 'G-SHOCK', price: '19995', image: '/images/Item-card-image-2.png' },
        { id: 10, brand: 'BALMAIN', model: 'GENTS', price: '49995', image: '/images/Item-card-image-3.png' },
        { id: 11, brand: 'FITBIT', model: 'SENSE 2', price: '24995', image: '/images/Item-card-image-4.png' },
        { id: 12, brand: 'CITIZEN', model: 'AUTOMATIC', price: '20995', image: '/images/Item-card-image-5.png' },
    ];

    return (
        <div className="w-full font-lato">

            <CollectionHeader bgImage="/images/smart-collection.png" />

            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8">

                <div className="flex flex-col lg:flex-row gap-10">

                    <aside className="hidden lg:block w-72 flex-shrink-0">
                        <FilterSidebar />
                    </aside>

                    <div className="flex-1">

                        <TopBar breadcrumb="SMART WATCHES" count="4232" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                            {smartWatches.map((watch) => (
                                <ProductCard key={watch.id} {...watch} />
                            ))}
                        </div>

                        <div className="mt-20 flex justify-center">

                            <div className="flex items-center border border-gray-200 bg-white">

                                <button className="w-12 h-10 flex items-center justify-center border-r border-gray-200 text-gray-300">
                                    <ChevronLeft size={20} strokeWidth={3} />
                                </button>

                                <div className="flex items-center px-2">

                                    <button className="w-10 h-10 flex items-center justify-center text-xs font-bold text-cyan-500">
                                        1
                                    </button>

                                    {[2, 3, 4, 5, 6].map((n) => (
                                        <button
                                            key={n}
                                            className="w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-700 hover:text-cyan-500"
                                        >
                                            {n}
                                        </button>
                                    ))}

                                    <span className="w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-700">
                                        ..
                                    </span>

                                </div>

                                <button className="w-12 h-10 flex items-center justify-center border-l border-gray-200 text-cyan-500">
                                    <ChevronRight size={20} strokeWidth={3} />
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SmartWatches;