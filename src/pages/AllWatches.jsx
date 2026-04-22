import { ChevronLeft, ChevronRight } from 'lucide-react';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import TopBar from '../components/TopBar'; 
import img1 from '../assets/image/Item-card-image.png';
import img2 from '../assets/image/Item-card-image-1.png';
import img3 from '../assets/image/Item-card-image-2.png';
import img4 from '../assets/image/Item-card-image-3.png';
import img5 from '../assets/image/Item-card-image-6.png';
import img6 from '../assets/image/Item-card-image-7.png';
import img7 from '../assets/image/Item-card-image-8.png';
import img8 from '../assets/image/Item-card-image-9.png';
import img9 from '../assets/image/Item-card-image 2.png';
import img10 from '../assets/image/Item-card-image 3.png';
import img11 from '../assets/image/Item-card-image-4.png';
import img12 from '../assets/image/Item-card-image-5.png';

const AllWatches = () => {
    const watches = [
    { id: 1, brand: 'MOVADA', model: 'MEN | BOLD', price: '30005', image: img1 },
    { id: 2, brand: 'BALMAIN', model: 'MEN | GENT', price: '49995', image: img2 },
    { id: 3, brand: 'GUESS', model: 'MEN | PHOENIX', price: '9995', image: img3 },
    { id: 4, brand: 'VERSACE', model: 'MEN | FIELD FORCE', price: '59000', image: img4 },
    { id: 5, brand: 'TITAN', model: 'MEN | EDGE BASELINE', price: '19495', image: img5 },
    { id: 6, brand: 'FOSSIL', model: 'WOMEN | VERGINIA', price: '12995', image: img6 },
    { id: 7, brand: 'KENNETH COLE', model: 'UNISEX', price: '4000', image: img7 },
    { id: 8, brand: 'ARMANI EXCHANGE', model: 'MEN | OUTER BANKS', price: '9995', image: img8 },
    { id: 9, brand: 'G-SHOCK', model: 'MEN | G-SHOCK', price: '19995', image: img9 },
    { id: 10, brand: 'BALMAIN', model: 'MEN | GENTS', price: '49995', image: img10 },
    { id: 11, brand: 'FITBIT', model: 'UNI SEX | SENSE 2', price: '24995', image: img11 },
    { id: 12, brand: 'CITIZEN', model: 'MEN | AUTOMATIC', price: '20995', image: img12 },
];

    return (
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 font-lato">
            <div className="flex flex-col lg:flex-row gap-10">
                <aside className="hidden lg:block w-72 flex-shrink-0">
                    <FilterSidebar />
                </aside>

                <div className="flex-1">

                    <TopBar breadcrumb="WATCHES" count="4232" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                        {watches.map((watch) => (
                            <ProductCard key={watch.id} {...watch} />
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <div className="flex items-center border border-gray-200 bg-white">
                            <button className="w-12 h-10 flex items-center justify-center border-r border-gray-200 text-gray-300">
                                <ChevronLeft size={20} strokeWidth={3} />
                            </button>
                            <div className="flex items-center px-2">
                                <button className="w-10 h-10 flex items-center justify-center text-xs font-bold text-cyan-500">1</button>
                                {[2, 3, 4, 5, 6].map((n) => (
                                    <button key={n} className="w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-700 hover:text-cyan-500">
                                        {n}
                                    </button>
                                ))}
                                <span className="w-10 h-10 flex items-center justify-center text-xs font-bold text-gray-700">..</span>
                            </div>
                            <button className="w-12 h-10 flex items-center justify-center border-l border-gray-200 text-cyan-500">
                                <ChevronRight size={20} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllWatches;