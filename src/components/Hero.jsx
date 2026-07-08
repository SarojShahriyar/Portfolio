import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex overflow-hidden relative items-center justify-center" id="heroSection">
            <div className="max-w-7xl lg:px-8 mx-auto px-6 py-20">
                <div className="text-center">
                    {/* Profile image */}
                    <div className="flex animate-scale-in opacity-0 mb-6 justify-center" style={{ animationDelay: '0.4s' }}>
                        <div className="relative">
                            <img alt="Saroj S. Iqbal" className="transition-all duration-300 sm:w-48 sm:h-48 lg:w-56 lg:h-56 w-40 h-40 object-cover ring-white/20 ring-4 rounded-full shadow-2xl bg-zinc-100" src="images/profile.png" />
                        </div>
                    </div>

                    <p className="opacity-0 animate-fade-in text-sm font-medium text-emerald-400 tracking-[0.2em] uppercase font-geist-mono mb-4" style={{ animationDelay: '0.6s' }}>
                        Saroj S. Iqbal — Application Developer
                    </p>

                    {/* Hero text */}
                    <div className="min-h-[120px] flex items-center justify-center px-4 -mt-2">
                        <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-xl font-semibold text-white tracking-tight max-w-4xl mx-auto font-jakarta text-center">
                            <span className="block animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-emerald-500 mx-auto w-fit max-w-full">
                                Establishing digital solutions
                            </span>
                            <span className="block opacity-0 animate-fade-in mt-1" style={{ animationDelay: '2.5s' }}>
                                that turn ideas into <span className="text-emerald-400">impact.</span>
                            </span>
                        </h1>
                    </div>

                    <div className="animate-slide-up opacity-0" style={{ animationDelay: '3s' }}>
                        <p className="mt-4 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300 tracking-tight font-geist">
                            I'm Saroj — a Nuclear Engineering student at the University of Dhaka who builds complete digital products. From first idea to live deployment: web platforms, mobile apps, APIs, and the automation that ties them together.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8 animate-slide-up opacity-0" style={{ animationDelay: '3.2s' }}>
                        <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-geist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                            View my work
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-6 py-3 text-sm font-medium hover:bg-white/15 hover:scale-105 transition-all duration-300 font-geist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
