import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const TopBar = ({ breadcrumb = "WATCHES", count = 4232 }) => {
    return (
        <div className="mb-8 font-lato">

            <nav className="flex items-center gap-2 text-[10px] font-bold text-gray-400 mb-4 tracking-[0.2em]">
                <Link to="/" className="hover:text-black transition uppercase">
                    HOME
                </Link>
                <span className="text-black">{'>'}</span>
                <span className="text-black uppercase">{breadcrumb}</span>
            </nav>

            <div className="flex justify-between items-center pb-4 border-b border-gray-100">

                <h2 className="text-xs text-gray-400 italic">
                    Item 1 - 12 of {count}
                </h2>

                <div className="relative">
                    <select className="appearance-none text-[11px] font-bold border border-gray-200 rounded pl-4 pr-10 py-2 bg-white cursor-pointer focus:border-cyan-400 outline-none">
                        <option>Best Sellers</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown size={14} className="text-black" strokeWidth={2.5} />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TopBar;