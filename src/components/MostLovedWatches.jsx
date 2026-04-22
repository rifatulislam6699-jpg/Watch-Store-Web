import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import item1 from '../assets/image/Item-card-image.png';
import item2 from '../assets/image/Item-card-image 2.png';
import item3 from '../assets/image/Item-card-image 3.png';
import item4 from '../assets/image/Item-card-image-4.png';
import item5 from '../assets/image/Item-card-image-5.png';

const MostLovedWatches = () => {
    const [activeTab, setActiveTab] = useState('MEN');

    const products = [
    { brand: "ARMANI EXCHANGE", model: "MEN | OUTER BANKS", price: "9995", img: item1 },
    { brand: "G-SHOCK", model: "MEN | G-SHOCK", price: "19995", img: item2 },
    { brand: "BALMAIN", model: "MEN | GENTS", price: "49995", img: item3 },
    { brand: "FITBIT", model: "UNI SEX | SENSE 2", price: "24995", img: item4 },
    { brand: "CITIZEN", model: "MEN | AUTOMATIC", price: "20995", img: item5 },
];

    return (
        <section className="py-16 max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="text-xl font-bold tracking-widest uppercase mb-6">Most Loved Watches</h2>
                <div className="flex justify-center items-center gap-8 text-[11px] font-bold tracking-widest relative">
                    {['MEN', 'WOMEN', 'SMART'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-1 border-b-2 transition-all ${activeTab === tab ? 'text-cyan-500 border-cyan-500' : 'text-gray-400 border-transparent'}`}
                        >
                            {tab}
                        </button>
                    ))}
                    <div className="absolute right-0 flex gap-2">
                        <ChevronLeft size={20} className="text-cyan-500 cursor-pointer" />
                        <ChevronRight size={20} className="text-gray-900 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {products.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-6 rounded-xl border border-cyan-100 flex flex-col items-center text-center transition-all hover:shadow-[0_10px_30px_rgba(165,243,252,0.4)]"
                    >
                        <div className="h-48 flex items-center justify-center mb-6">
                            <img src={item.img} alt={item.brand} className="max-h-full object-contain" />
                        </div>
                        <h3 className="text-sm font-bold tracking-tight mb-1">{item.brand}</h3>
                        <p className="text-[10px] text-gray-400 font-medium mb-2">{item.model}</p>
                        <p className="text-sm font-bold">₹ {item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MostLovedWatches