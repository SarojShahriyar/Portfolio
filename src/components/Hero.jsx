import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex overflow-hidden relative items-center justify-center" id="heroSection">
            <div className="max-w-7xl lg:px-8 mx-auto px-6 py-20">
                <div className="text-center">
                    {/* Profile image */}
                    <div className="flex animate-scale-in opacity-0 mb-6 justify-center" style={{ animationDelay: '0.4s' }}>
                        <div className="relative">
                            <img alt="Saroj S. Iqbal" className="transition-all duration-300 sm:w-48 sm:h-48 lg:w-56 lg:h-56 w-40 h-40 object-cover ring-white/20 ring-4 rounded-full shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57512309-8740-4686-a088-6b08b985ca00_320w.png" />
                        </div>
                    </div>

                    {/* Hero text */}
                    <div className="min-h-[120px] flex items-center justify-center px-4 -mt-4">
                        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-xl font-semibold text-white tracking-tight max-w-4xl mx-auto font-jakarta text-center">
                            <span className="block animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-emerald-500 mx-auto w-fit max-w-full">
                                Building digital ecosystems
                            </span>
                            <span className="block opacity-0 animate-fade-in delay-1000 mt-1" style={{ animationDelay: '2.5s' }}>
                                that drive <span className="text-emerald-400">real growth.</span>
                            </span>
                        </h1>
                    </div>

                    <div className="animate-slide-up opacity-0" style={{ animationDelay: '3s' }}>
                        <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300 tracking-tight font-geist">
                            I don't just design websites. I build comprehensive digital solutions—from high-converting web platforms and native mobile apps to strategic marketing systems that scale your revenue.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 animate-slide-up opacity-0" style={{ animationDelay: '3.2s' }}>
                        <a href="#selected-work" className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-geist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                            View selected projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                        <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-6 py-3 text-sm font-medium hover:bg-white/15 hover:scale-105 transition-all duration-300 font-geist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            Learn about my approach
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                        <div className="text-center">
                            <div className="text-xl lg:text-2xl font-light text-white tracking-tight font-geist">8+</div>
                            <div className="mt-1 text-xs text-gray-400 font-geist">Years in web design</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl lg:text-2xl font-light text-white tracking-tight font-geist">50+</div>
                            <div className="mt-1 text-xs text-gray-400 font-geist">Web projects shipped</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl lg:text-2xl font-light text-white tracking-tight font-geist">3.2×</div>
                            <div className="mt-1 text-xs text-gray-400 font-geist">Average uplift in CR</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
