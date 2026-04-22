import { Heart } from 'lucide-react';

const ProductCard = ({ brand, model, price, image }) => {
    return (
        <div className="group bg-white border border-gray-100 p-4 relative transition-all duration-300 shadow-sm hover:shadow-md rounded-2xl flex flex-col h-full">

            {/* Wishlist */}
            <button
                aria-label="Add to wishlist"
                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors z-10"
            >
                <Heart size={18} />
            </button>

            {/* Image */}
            <div className="aspect-[4/5] mb-6 flex items-center justify-center overflow-hidden">
                <img
                    src={image}
                    alt={brand}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        e.target.src = "/fallback.jpg";
                    }}
                />
            </div>

            {/* Info */}
            <div className="text-center space-y-1 flex-grow">
                <h3 className="font-bold text-sm tracking-widest uppercase text-gray-900">
                    {brand}
                </h3>

                <p className="text-[10px] text-gray-400 font-medium uppercase">
                    {model}
                </p>

                <div className="pt-2">
                    <span className="text-xs font-bold">
                        ₹ {Number(String(price).replace(/,/g, '') || 0).toLocaleString('en-IN')}
                    </span>
                </div>
            </div>

            {/* Action */}
            <div className="mt-4 pt-3 border-t border-gray-50 flex justify-center">
                <button className="text-[11px] font-bold text-red-600 uppercase hover:text-red-700 transition-colors">
                    BUY ONLINE
                </button>
            </div>

        </div>
    );
};

export default ProductCard;