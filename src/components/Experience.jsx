import React from 'react';

const Experience = () => {
    return (
        <section className="py-24 bg-zinc-950" id="resume">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Image & Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
                        <div>
                            <h2 className="text-3xl font-semibold text-white font-jakarta mb-4">
                                Experience & <br />Track Record
                            </h2>
                            <p className="text-gray-400 font-geist">
                                A history of shipping high-impact products for startups and growth-stage companies.
                            </p>
                        </div>

                        {/* Secondary Image */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/profile-secondary.png"
                                alt="Saroj S. Iqbal"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <p className="text-white text-sm font-medium font-jakarta">Saroj S. Iqbal</p>
                                <p className="text-xs text-white/60 font-geist">Product Designer & Dev</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Timeline */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Role 1 */}
                        <div className="group relative pl-8 border-l border-white/10 hover:border-emerald-500/50 transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-black group-hover:scale-125 transition-transform"></div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl text-white font-medium font-jakarta group-hover:text-emerald-400 transition-colors">Senior Web & Product Designer</h3>
                                <span className="text-emerald-400 text-sm font-medium font-geist mt-1 sm:mt-0">2021 — Present</span>
                            </div>

                            <p className="text-gray-400 text-sm mb-4 font-geist">Independent / Remote</p>
                            <p className="text-gray-300 leading-relaxed font-geist text-lg">
                                Partnering with B2B startups to redesign key user journeys, ship high-performance marketing sites, and define scalable design systems.
                            </p>
                        </div>

                        {/* Role 2 */}
                        <div className="group relative pl-8 border-l border-white/10 hover:border-zinc-500/50 transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-700 ring-4 ring-black group-hover:scale-125 transition-transform"></div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl text-white font-medium font-jakarta">Product Designer</h3>
                                <span className="text-zinc-500 text-sm font-medium font-geist mt-1 sm:mt-0">2018 — 21</span>
                            </div>

                            <p className="text-gray-400 text-sm mb-4 font-geist">Growth-stage SaaS</p>
                            <p className="text-gray-400 leading-relaxed font-geist text-lg">
                                Led onboarding and billing redesigns, aligned marketing sites with app UI, and ensured accessible layouts.
                            </p>
                        </div>

                        {/* Role 3 */}
                        <div className="group relative pl-8 border-l border-white/10 hover:border-zinc-500/50 transition-colors duration-300">
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-700 ring-4 ring-black group-hover:scale-125 transition-transform"></div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl text-white font-medium font-jakarta">UX / UI Designer</h3>
                                <span className="text-zinc-500 text-sm font-medium font-geist mt-1 sm:mt-0">2015 — 18</span>
                            </div>

                            <p className="text-gray-400 text-sm mb-4 font-geist">Agency & Early-stage</p>
                            <p className="text-gray-400 leading-relaxed font-geist text-lg">
                                Designed brand microsites and dashboards across industries, focusing on visual interactions and rapid prototyping.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
