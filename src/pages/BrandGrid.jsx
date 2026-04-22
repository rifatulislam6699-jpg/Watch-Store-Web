import CollectionHeader from "../components/CollectionHeader";

const BrandGrid = () => {
    const brands = [
        { id: 1, name: 'AIGNER', img: '/images/brandperson1.png' },
        { id: 2, name: 'ARMANI EXCHANGE', img: '/images/brandperson2.png' },
        { id: 3, name: 'ANNE KLEIN', img: '/images/brandperson3.png' },
        { id: 4, name: 'BALMAIN', img: '/images/brandperson4.png' },
        { id: 5, name: 'CALVIN KLEIN', img: '/images/brandperson5.png' },
        { id: 6, name: 'CASIO', img: '/images/brandperson6.png' },
        { id: 7, name: 'CERRUTI 1881', img: '/images/brandperson7.png' },
        { id: 8, name: 'CHARRIOL', img: '/images/brandperson8.png' },
        { id: 9, name: 'CITIZEN', img: '/images/brandperson9.png' },
        { id: 10, name: 'COACH', img: '/images/brandperson10.png' },
        { id: 11, name: 'DANIEL WELLINGTON', img: '/images/brandperson11.png' },
        { id: 12, name: 'EMPORIO ARMANI', img: '/images/brandperson12.png' },
        { id: 13, name: 'ERNEST BOREL', img: '/images/brandperson13.png' },
        { id: 14, name: 'FOSSIL', img: '/images/brandperson14.png' },
        { id: 15, name: 'G-SHOCK', img: '/images/brandperson15.png' },
    ];

    return (
        <>
            <CollectionHeader bgImage="/images/watch-collection.png" />

            <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                    {brands.map((brand) => (
                        <div
                            key={brand.id}
                            className="group relative bg-white rounded-lg overflow-hidden cursor-pointer"
                        >
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={brand.img}
                                    alt={brand.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BrandGrid;