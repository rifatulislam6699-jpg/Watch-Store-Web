

const CollectionHeader = ({ title, subtitle, bgImage }) => {
    return (
        <section className="relative w-full min-h-[250px] md:h-[400px] bg-black flex items-center justify-center overflow-hidden font-lato">
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt={title}
                    className="w-full h-full object-cover opacity-60 md:opacity-70"
                />
                <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
            </div>

            <div className="relative z-10 text-center px-4 md:px-6 py-10 max-w-5xl">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-[0.15em] md:tracking-[0.2em] uppercase mb-3 md:mb-4 drop-shadow-lg leading-tight">
                    {title}
                </h1>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-200 font-light tracking-[0.05em] md:tracking-widest max-w-xs sm:max-w-md md:max-w-xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            </div>
        </section>
    );
};

export default CollectionHeader;