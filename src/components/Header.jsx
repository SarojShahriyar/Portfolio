import React, { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '#experience', label: 'Journey' },
        { href: '#work', label: 'Work' },
        { href: '#skills', label: 'Skills' },
        { href: '#about', label: 'About' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-40 opacity-0 animate-fade-in my-4 backdrop-blur-3xl" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-7xl lg:px-8 ring-1 ring-white/10 bg-white/10 border border-white/20 rounded-2xl mx-auto px-6 shadow-lg backdrop-blur-lg">
                <div className="flex h-11 items-center justify-between">
                    <a href="#heroSection" className="group">
                        <div className="flex items-center gap-2">
                            <div className="group-hover:bg-white/20 transition-colors bg-white/15 border-white/30 border rounded-xl pt-2 pr-3 pb-2 pl-3 backdrop-blur-md">
                                <span className="block text-lg font-semibold tracking-tight font-quicksand">Saroj S. Iqbal</span>
                            </div>
                        </div>
                    </a>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 font-geist">{link.label}</a>
                        ))}
                    </nav>
                    <a href="#contact" className="hidden items-center gap-2 hover:bg-white transition-all duration-200 hover:scale-105 md:inline-flex text-sm font-semibold text-black bg-white/90 rounded-full mt-4 mb-4 pt-1.5 pr-2.5 pb-1.5 pl-2 shadow-lg backdrop-blur-md font-geist">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        Let's connect
                    </a>
                    <button
                        id="menuBtn"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                        className="md:hidden rounded-xl bg-white/15 border border-white/30 p-2.5 text-white hover:bg-white/20 backdrop-blur-md"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                    </button>
                </div>
                {/* Mobile menu */}
                <div id="mobileNav" className={`md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/20 rounded-b-2xl shadow-lg ring-1 ring-white/10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-6 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist" onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
                        ))}
                        <div className="pt-4 border-t border-white/20">
                            <a href="#contact" className="flex items-center justify-center gap-2 rounded-xl bg-white/90 text-black px-6 py-3 text-base font-semibold backdrop-blur-md shadow-lg font-geist" onClick={() => setIsMobileMenuOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                Let's connect
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
