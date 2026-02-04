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
                            More than a designer. <br />
                            <span className="text-zinc-500">A full-stack growth partner.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-400 font-geist leading-relaxed">
                            <p>
                                In today's landscape, a pretty website isn't enough. You need a cohesive digital ecosystem that captures attention and retains it across every touchpoint.
                            </p>
                            <p>
                                My background spans the entire product lifecycle. I can take your idea from a napkin sketch to a fully deployed web platform, expand it into a native mobile app for iOS and Android, and then drive traffic to it with high-level marketing automation.
                            </p>
                            <p>
                                I bridge the gap between creative design, technical engineering, and business strategy so you don't have to hire three different agencies.
                            </p>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-4">
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-geist">Full-Stack Dev</div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-geist">Mobile Engineering</div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 font-geist">Growth Marketing</div>
                        </div>
                    </div>

                    {/* Right Visuals - Bento Grid Style */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 translate-y-8">
                            <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5 shadow-2xl">
                                <img
                                    src="images/radsafe-graph.png"
                                    alt="Mobile Development"
                                    className="rounded-xl w-full aspect-[4/5] object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                />
                                <p className="mt-3 text-sm font-medium text-white font-geist text-center">Mobile Apps</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-zinc-900 rounded-2xl p-4 border border-white/5 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                                    alt="Marketing Analytics"
                                    className="rounded-xl w-full aspect-[4/5] object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                />
                                <p className="mt-3 text-sm font-medium text-white font-geist text-center">Growth Marketing</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
