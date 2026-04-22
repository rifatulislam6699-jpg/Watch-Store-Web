import w1 from '../assets/image/w1.png';
import w2 from '../assets/image/w2.png';
import w10 from '../assets/image/w10.png';
import w9 from '../assets/image/w9.png';
import w4 from '../assets/image/w4.png';

const MensHero = () => {
    return (
        <div className="relative w-full bg-black py-16 overflow-hidden">
            
            <div className="absolute inset-0 flex justify-center items-end opacity-40 gap-4 pointer-events-none">

    <img src={w1} alt="bg" className="h-48 grayscale transform -rotate-12 translate-y-10" />
    <img src={w2} alt="bg" className="h-64 grayscale brightness-50" />
    <img src={w10} alt="bg" className="h-72 grayscale brightness-75 scale-110 translate-y-5" />
    <img src={w9} alt="bg" className="h-64 grayscale brightness-50" />
    <img src={w4} alt="bg" className="h-48 grayscale transform rotate-12 translate-y-10" />

</div>

            <div className="relative z-10 text-center space-y-4 px-4">
                <h1 className="text-3xl md:text-5xl font-black italic text-white tracking-widest uppercase font-lato">
                    Men's Collection
                </h1>
                <p className="text-gray-400 text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase max-w-lg mx-auto leading-loose">
                    Curated with watches from 45+ international brands for you to choose from
                </p>
            </div>
        </div>
    );
};

export default MensHero;