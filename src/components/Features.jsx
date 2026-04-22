import { ShieldCheck, Award, BatteryCharging, Percent } from 'lucide-react';

const Features = () => {
    const featuresData = [
        {
            icon: ShieldCheck,
            title: "BUY WITH TRUST"
        },
        {
            icon: Award,
            title: "EARN NEU POINTS"
        },
        {
            icon: BatteryCharging,
            title: "FREE BATTERY REPLACEMENT"
        },
        {
            icon: Percent,
            title: "INTEREST FREE EMI (*T&C APPLY)"
        }
    ];

    return (
        <section className="w-full bg-[#f8fdfe] border-y border-cyan-100 py-10">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {featuresData.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="flex items-center justify-center lg:justify-start gap-4 group"
                            >
                                <Icon className="w-10 h-10 text-cyan-500 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />

                                <h3 className="text-xs md:text-sm font-bold text-gray-800 tracking-wider uppercase leading-tight">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default Features;