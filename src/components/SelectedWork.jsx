import React from 'react';

const SelectedWork = () => {
    return (
        <section id="work" className="lg:py-32 overflow-clip text-black bg-[#000000] pt-24 pb-24 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl lg:text-5xl text-white font-semibold tracking-tight font-jakarta">
                    Selected Work
                </h2>
                <p className="mt-4 text-gray-400 font-geist max-w-2xl mx-auto">
                    Three applications, three different stories — one earning its keep in production, one born in a physics lab, one built purely for fun.
                </p>
            </div>

            <div className="relative z-10 space-y-24 pb-24 max-w-5xl mx-auto">
                {/* Card 1: Mudran — flagship */}
                <article className="sticky top-32 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden min-h-[560px] flex flex-col md:flex-row group transition-all duration-700 ease-out hover:-translate-y-2">
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative">
                        <p className="text-xs font-semibold text-emerald-400 tracking-[0.2em] uppercase font-geist-mono mb-3">Live product · SaaS</p>
                        <h3 className="text-3xl font-semibold mb-3 tracking-tight text-white font-geist">Mudran <span className="text-zinc-500 font-normal">মুদ্রণ</span></h3>
                        <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-geist">
                            A Bengali document-automation platform that turns messy PDFs and Word files into cleanly formatted, editable documents — OCR, a deterministic engine that understands Bengali question papers, math equations and tables, plus a legacy-font-to-Unicode converter. Running in production with paying organizations.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6 mb-8">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">React + FastAPI</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">OCR Pipeline</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">Revenue-generating</span>
                        </div>
                        <a href="https://mudran.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all hover:text-emerald-400">
                            Visit mudran.app <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                    <div className="flex-1 bg-zinc-800 relative overflow-hidden order-1 md:order-2 h-[280px] md:h-auto">
                        <img src="images/mudran-landing.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Mudran — Bengali document automation platform" />
                    </div>
                </article>

                {/* Card 2: RadSafe — university project */}
                <article className="sticky top-36 rounded-3xl bg-white border border-zinc-200 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] overflow-hidden min-h-[560px] flex flex-col md:flex-row group transition-all duration-700 ease-out hover:-translate-y-2">
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative">
                        <p className="text-xs font-semibold text-emerald-600 tracking-[0.2em] uppercase font-geist-mono mb-3">University project · Android · iOS · IoT</p>
                        <h3 className="text-3xl font-semibold mb-3 tracking-tight text-black font-geist">RadSafe</h3>
                        <p className="text-zinc-600 leading-relaxed text-base md:text-lg font-geist">
                            Born from my Nuclear Engineering studies at the University of Dhaka: a radiation-monitoring app for Android and iOS that reads live CPS values from a Geiger–Müller module and translates them into clear dosage readings, real-time graphs, and safety alerts anyone can act on.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6 mb-8">
                            <span className="px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-sm font-medium">Mobile App</span>
                            <span className="px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-sm font-medium">Sensor Hardware</span>
                            <span className="px-3 py-1 bg-zinc-100 rounded-full text-zinc-600 text-sm font-medium">Health & Safety</span>
                        </div>
                        <a href="https://drive.google.com/drive/folders/1ZCXBXbgnCi2hwFXvIqeds1CsyNkUpR2E" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all">
                            View the project <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                    <div className="flex-1 bg-zinc-50 relative overflow-hidden order-1 md:order-2 h-[400px] md:h-auto group-hover:bg-zinc-100 transition-colors">
                        <div className="absolute inset-0 flex flex-col gap-4 p-8">
                            {/* Tablet view */}
                            <div className="relative flex-1 w-full rounded-xl overflow-hidden shadow-xl transform translate-x-4 rotate-2 transition-transform duration-700 group-hover:rotate-0 group-hover:translate-x-0 group-hover:scale-[1.02]">
                                <img src="images/radsafe-tablet.png" className="absolute inset-0 w-full h-full object-cover" alt="RadSafe live radiation graph on a tablet" />
                            </div>

                            {/* Dosage gauge view */}
                            <div className="relative flex-1 w-full rounded-xl overflow-hidden shadow-xl transform -translate-x-4 -rotate-1 transition-transform duration-700 group-hover:rotate-0 group-hover:translate-x-0 group-hover:scale-[1.02]">
                                <img src="images/radsafe-graph.png" className="absolute inset-0 w-full h-full object-cover" alt="RadSafe dosage gauge on an iPad" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Card 3: FontFella — side project */}
                <article className="sticky top-40 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden min-h-[560px] flex flex-col md:flex-row group transition-all duration-700 ease-out hover:-translate-y-2">
                    <div className="flex-1 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 relative">
                        <p className="text-xs font-semibold text-lime-400 tracking-[0.2em] uppercase font-geist-mono mb-3">Side project · Just for fun</p>
                        <h3 className="text-3xl font-semibold mb-3 tracking-tight text-white font-geist">FontFella</h3>
                        <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-geist">
                            A parametric typography playground — dial in weight, width, slant, and optical size to generate the exact font you want, powered by a Python font-generation engine behind a Next.js front end. The landing page is live; the generation backend is currently parked.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-6 mb-8">
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">Typography</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">Next.js</span>
                            <span className="px-3 py-1 bg-zinc-800 rounded-full text-zinc-300 text-sm font-medium">Python Engine</span>
                        </div>
                        <a href="https://fontfella.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all hover:text-lime-400">
                            See the landing page <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                    <div className="flex-1 bg-zinc-800 relative overflow-hidden order-1 md:order-2 h-[280px] md:h-auto">
                        <img src="images/fontfella-landing.png" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="FontFella — parametric font generation tool" />
                    </div>
                </article>
            </div>
        </section>
    );
};

export default SelectedWork;
