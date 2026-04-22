import { ChevronDown } from 'lucide-react';

const StoreLocator = () => {
    return (
        <div className="w-full font-lato">

            <section className="max-w-4xl mx-auto px-6 py-20 min-h-[500px]">

                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Locate Stores Near You
                </h2>

                <div className="space-y-12">

                    {/* State */}
                    <div>
                        <label className="block text-xl md:text-2xl mb-4">
                            Select State
                        </label>

                        <div className="relative border-b border-black pb-2">
                            <select
                                defaultValue=""
                                className="w-full bg-transparent appearance-none outline-none text-gray-500 cursor-pointer pr-8"
                            >
                                <option value="" disabled>Select</option>
                                <option value="dhaka">Dhaka</option>
                                <option value="sylhet">Sylhet</option>
                                <option value="chittagong">Chittagong</option>
                            </select>

                            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6" />
                        </div>
                    </div>

                    {/* City */}
                    <div>
                        <label className="block text-xl md:text-2xl mb-4">
                            Select City
                        </label>

                        <div className="relative border-b border-black pb-2">
                            <select
                                defaultValue=""
                                className="w-full bg-transparent appearance-none outline-none text-gray-500 cursor-pointer pr-8"
                            >
                                <option value="" disabled>Select</option>
                                <option value="city1">City 1</option>
                                <option value="city2">City 2</option>
                                <option value="city3">City 3</option>
                            </select>

                            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6" />
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default StoreLocator;