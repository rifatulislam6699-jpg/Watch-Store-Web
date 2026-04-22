import { ChevronDown, Filter } from 'lucide-react';

const FilterSidebar = () => {
    const categories = [
        "Brands",
        "Type",
        "Gender",
        "Price",
        "Discount",
        "Dial Color",
        "Dial Shape",
        "Dial Type"
    ];

    return (
        <div className="border border-gray-200 bg-white">

            {/* Header */}
            <div className="p-4 bg-gray-50 flex gap-2 items-center border-b">
                <span className="font-bold text-sm uppercase tracking-wide">
                    Filter
                </span>
                <Filter size={16} />
            </div>

            {/* More Filters */}
            <div className="p-4 flex justify-between items-center border-b text-xs font-bold text-gray-400 uppercase cursor-pointer hover:bg-gray-50">
                More Filters
                <ChevronDown size={18} strokeWidth={2.5} className="text-black" />
            </div>

            {/* Categories */}
            <div>
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        className="flex gap-2 items-center p-4 cursor-pointer hover:bg-gray-50 transition"
                    >
                        <ChevronDown size={14} strokeWidth={2.5} className="text-black" />
                        <span className="text-xs font-bold text-gray-700">
                            {cat}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FilterSidebar;