import React from 'react';

const About = () => {
    return (
        <section className="py-32 bg-zinc-950 relative overflow-hidden" id="about">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-900/50 to-transparent pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <h2 className="text-3xl lg:text-5xl font-semibold text-white tracking-tight font-jakarta leading-tight">
                            An application developer <br />
                            <span className="text-zinc-500">who ships the whole product.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-400 font-geist leading-relaxed">
                            <p>
                                I study Nuclear Engineering at the University of Dhaka — a field where precision isn't optional. I bring that same rigor to software: most applications fail in the gaps between design and code, between web and mobile, between the interface and the data behind it. I build across those gaps.
                            </p>
                            <p>
                                My work covers the full lifecycle: I design the interface, build it in React, extend it to Android and iOS, and wire up the APIs and services that make it real. That's how RadSafe went from physics coursework to an app talking to radiation sensors, and how Mudran grew from a side project into a platform that organizations pay to use.
                            </p>
                            <p>
                                What I hand over is never a mockup or a prototype — it's a finished application, deployed and running.
                            </p>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-geist">Web Applications</div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-geist">Mobile Engineering</div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-geist">API Integration</div>
                        </div>
                    </div>

                    {/* Right Visuals - Bento Grid Style */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5 shadow-2xl">
                                <img
                                    src="images/radsafe-graph.png"
                                    alt="RadSafe mobile application on a tablet"
                                    className="rounded-xl w-full aspect-[4/5] object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                />
                                <p className="mt-3 text-sm font-medium text-white font-geist text-center">Mobile Apps</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5 shadow-2xl">
                                <img
                                    src="images/mudran-landing.png"
                                    alt="Mudran web platform"
                                    className="rounded-xl w-full aspect-[4/5] object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                />
                                <p className="mt-3 text-sm font-medium text-white font-geist text-center">Web Applications</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
