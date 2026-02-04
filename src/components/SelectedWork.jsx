import React from 'react';

const SelectedWork = () => {
    return (
        <section id="selected-work" className="lg:py-32 overflow-clip text-black bg-[#000000] pt-24 pb-24 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl lg:text-5xl text-white font-semibold tracking-tight font-jakarta">
                    Selected Work
                </h2>
            </div>

            <div className="relative z-10 space-y-24 pb-24 max-w-5xl mx-auto">
                {/* Card 1: Aether Laptops */}
                <article className="sticky top-32 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] overflow-hidden min-h-[560px] flex flex-col md:flex-row group transition-all duration-700 ease-out hover:-translate-y-2">
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative">
                        <h3 className="text-3xl font-semibold mb-3 tracking-tight text-black font-geist">Aether Laptops</h3>
                        <p className="text-zinc-500 leading-relaxed text-base md:text-lg font-geist">
                            High end modern laptops that matches with your necessisity and luxury with speed and premium design.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6 mb-8">
                            <span className="px-3 py-1 bg-zinc-200/50 rounded-full text-zinc-600 text-sm font-medium">Hardware</span>
                            <span className="px-3 py-1 bg-zinc-200/50 rounded-full text-zinc-600 text-sm font-medium">E-commerce</span>
                            <span className="px-3 py-1 bg-zinc-200/50 rounded-full text-zinc-600 text-sm font-medium">Design</span>
                        </div>
                        <a href="https://aetherprolaptops.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all">
                            View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                    <div className="flex-1 bg-zinc-100 relative overflow-hidden order-1 md:order-2 h-[280px] md:h-auto">
                        <img src="images/aether-laptops.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Aether Laptops" />
                    </div>
                </article>

                {/* Card 2: Tesla Site */}
                <article className="sticky top-36 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden min-h-[560px] flex flex-col md:flex-row group transition-all duration-700 ease-out hover:-translate-y-2">
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative">
                        <h3 className="text-3xl font-semibold mb-3 tracking-tight text-white font-geist">Tesla Showcase</h3>
                        <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-geist">
                            A Tesla site that showcases its recent cars along with its functionalities. Designed for immersion and speed.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6 mb-8">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">Webflow</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">interactions</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">3D</span>
                        </div>
                        <a href="https://a-tesla-site-5ca9eb.webflow.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all hover:text-emerald-400">
                            View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                    <div className="flex-1 bg-zinc-800 relative overflow-hidden order-1 md:order-2 h-[280px] md:h-auto flex items-center justify-center group-hover:bg-zinc-700/50 transition-colors">
                        <img src="images/tesla-model-s.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Tesla Model S" />
                    </div>
                </article>

                {/* Card 3: RadSafe */}
                <article className="sticky top-40 rounded-3xl bg-white border border-zinc-200 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] overflow-hidden min-h-[560px] flex flex-col md:flex-row group transition-all duration-700 ease-out hover:-translate-y-2">
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative">
                        <h3 className="text-3xl font-semibold mb-3 tracking-tight text-black font-geist">RadSafe</h3>
                        <p className="text-zinc-600 leading-relaxed text-base md:text-lg font-geist">
                            RadSafe is an Android & iOS application that represents Radiation dosage matching with the CPS value received by a GM module.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6 mb-8">
                            <span className="px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-sm font-medium">Mobile App</span>
                            <span className="px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-sm font-medium">IoT</span>
                            <span className="px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-sm font-medium">Health</span>
                        </div>
                        <a href="https://drive.google.com/drive/folders/1ZCXBXbgnCi2hwFXvIqeds1CsyNkUpR2E" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all">
                            View Case Study <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                    <div className="flex-1 bg-zinc-50 relative overflow-hidden order-1 md:order-2 h-[400px] md:h-auto group-hover:bg-zinc-100 transition-colors">
                        <div className="absolute inset-0 flex flex-col gap-4 p-8">
                            {/* Image 1: Tablet View */}
                            <div className="relative flex-1 w-full rounded-xl overflow-hidden shadow-xl transform translate-x-4 rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:translate-x-0 group-hover:scale-[1.02]">
                                <img src="images/radsafe-tablet.png" className="absolute inset-0 w-full h-full object-cover" alt="RadSafe Tablet" />
                            </div>

                            {/* Image 2: iPad graph view */}
                            <div className="relative flex-1 w-full rounded-xl overflow-hidden shadow-xl transform -translate-x-4 -rotate-1 transition-transform duration-700 group-hover:rotate-0 group-hover:translate-x-0 group-hover:scale-[1.02]">
                                <img src="images/radsafe-graph.png" className="absolute inset-0 w-full h-full object-cover" alt="RadSafe Graph" />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default SelectedWork;
