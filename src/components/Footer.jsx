import * as Icons from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#2D3748] text-gray-300 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-gray-500 pb-2 inline-block">
                        Know Wayne
                    </h4>
                    <ul className="space-y-4 text-sm">
                        <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                            <span>{'>'}</span> About Us
                        </li>
                        <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                            <span>{'>'}</span> About Wayne Watch Store
                        </li>
                        <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                            <span>{'>'}</span> Bulk Purchase & Corporate Gifts
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-gray-500 pb-2 inline-block">
                        Terms & Conditions
                    </h4>
                    <ul className="space-y-4 text-sm">
                        <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                            <span>{'>'}</span> Shipping & Return Policies
                        </li>
                        <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                            <span>{'>'}</span> Privacy Policy
                        </li>
                        <li className="hover:text-cyan-400 cursor-pointer transition-colors">
                            <span>{'>'}</span> FAQ's
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-gray-500 pb-2 inline-block">
                        Contact Us
                    </h4>
                    <ul className="space-y-4 text-sm">
                        <li>For Sale: <span className="text-cyan-400 ml-1">Waynewatch@co.in</span></li>
                        <li>Call: <span className="text-cyan-400 ml-1">+91 9876543210</span></li>
                        <li>For Complaints: <span className="text-cyan-400 ml-1 text-xs">1800 202 2022</span></li>
                        <li className="text-[11px] leading-relaxed pt-2">
                            <span className="text-cyan-400 block mb-1 uppercase font-bold">Chat Time:</span>
                            Our Team is Available From Monday to Saturday from 9:00AM to 8:00PM
                        </li>
                        <li>For Complaints: <span className="text-cyan-400 ml-1 text-xs">customercare.com</span></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-b border-gray-500 pb-2 inline-block">
                        Follow Us
                    </h4>
                    <div className="flex space-x-6 items-center">
                        {Icons.Instagram && <Icons.Instagram className="text-cyan-400 hover:text-white cursor-pointer transition-colors" size={20} />}
                        {Icons.Facebook && <Icons.Facebook className="text-cyan-400 hover:text-white cursor-pointer transition-colors" size={20} />}
                        {(Icons.Twitter || Icons.X) && (
                            <div className="text-cyan-400 hover:text-white cursor-pointer transition-colors">
                                {Icons.Twitter ? <Icons.Twitter size={20} /> : <Icons.X size={20} />}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-gray-600 text-center">
                <p className="text-[11px] tracking-[0.2em] font-medium text-cyan-400 uppercase">
                    2024 @ Wayne-WatchStore. Designed By MuthuRaman
                </p>
            </div>
        </footer>
    );
};

export default Footer;