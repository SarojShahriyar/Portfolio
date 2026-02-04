import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 pb-10 pt-8 bg-black">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 items-center justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-400 font-geist">© <span id="yearSpan">{new Date().getFullYear()}</span> Saroj S. Iqbal. All rights reserved.</p>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-300 font-geist">
                        <a href="#heroSection" className="inline-flex items-center gap-1 hover:bg-white/10 transition-colors border-white/20 border rounded-full px-3 py-1.5 text-xs text-white">
                            Back to top
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </a>
                        <a href="mailto:s.iqbal.saroj@gmail.com" className="hover:text-emerald-400 transition-colors">Email</a>
                        <a href="https://wa.me/8801521781707" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Whatsapp</a>
                        <a href="https://www.linkedin.com/in/saroj-s-iqbal/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
