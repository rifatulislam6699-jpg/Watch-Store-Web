import brand from "../assets/image/brand.png";
import brand2 from "../assets/image/brand2.png";
import brand3 from "../assets/image/brand3.png";
import brand4 from "../assets/image/brand4.png";
import brand5 from "../assets/image/brand5.png";

const BrandWall = () => {
    const baseBrands = [
        { img: brand },
        { img: brand2 },
        { img: brand3 },
        { img: brand4 },
        { img: brand5 },
    ];

    const fullGrid = Array.from(
        { length: 40 },
        (_, i) => baseBrands[i % baseBrands.length]
    );

    return (
        <section className="py-20 bg-white font-lato">
            <div className="text-center mb-12 px-4">
                <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase mb-3">
                    40+ International Brands
                </h2>
                <p className="text-[10px] md:text-xs text-gray-400 tracking-[0.4em] uppercase">
                    One Trusted Destination
                </p>
            </div>

            <div className="max-w-[1400px] mx-auto px-5 md:px-16 lg:px-32">
                <div className="grid gap-4 grid-cols-2 md:grid-cols-5 lg:grid-cols-10">
                    {fullGrid.map((brand, i) => (
                        <div
                            key={i}
                            className="border border-gray-100 h-20 md:h-24 flex items-center justify-center group cursor-pointer hover:bg-gray-50 transition-all overflow-hidden bg-white shadow-sm"
                        >
                            <div className="w-full h-full p-4 md:p-5">
                                <img
                                    src={brand.img}
                                    alt={`brand-${i}`}
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandWall;