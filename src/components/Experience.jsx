import React from 'react';

const Experience = () => {
    const milestones = [
        {
            label: "Education",
            title: "BSc in Nuclear Engineering — University of Dhaka",
            highlight: true,
            description: "Currently pursuing my graduation in Nuclear Engineering. Radiation physics, instrumentation, and the habit of getting things exactly right — the same discipline I bring to every application I build."
        },
        {
            label: "Where physics met software",
            title: "RadSafe",
            highlight: false,
            description: "My university project became my first shipped product: an Android and iOS app that reads live counts from a Geiger–Müller module and turns them into dosage readings people can actually understand."
        },
        {
            label: "From side project to business",
            title: "Mudran",
            highlight: true,
            description: "What started as a tool for one problem — messy Bengali documents — grew into a full SaaS platform. Today Mudran runs in production at mudran.app, serving paying organizations with OCR, automated formatting, and font conversion."
        },
        {
            label: "Building for the joy of it",
            title: "FontFella",
            highlight: false,
            description: "A parametric font-generation tool built purely for fun. Proof that the best way to learn a new stack is to chase an idea you can't stop thinking about."
        }
    ];

    return (
        <section className="py-24 bg-zinc-950" id="experience">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: Image & Header */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
                        <div>
                            <h2 className="text-3xl font-semibold text-white font-jakarta mb-4">
                                Education & <br />Journey
                            </h2>
                            <p className="text-gray-400 font-geist">
                                From reactor physics to production software — every step added a new layer of how I build.
                            </p>
                        </div>

                        {/* Secondary Image */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="images/profile-secondary.png"
                                alt="Saroj S. Iqbal"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <p className="text-white text-sm font-medium font-jakarta">Saroj S. Iqbal</p>
                                <p className="text-xs text-white/60 font-geist">Application Developer</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Milestones */}
                    <div className="lg:col-span-8 space-y-12">
                        {milestones.map((milestone) => (
                            <div key={milestone.title} className={`group relative pl-8 border-l border-white/10 transition-colors duration-300 ${milestone.highlight ? 'hover:border-emerald-500/50' : 'hover:border-zinc-500/50'}`}>
                                <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full ring-4 ring-black group-hover:scale-125 transition-transform ${milestone.highlight ? 'bg-emerald-500' : 'bg-zinc-700'}`}></div>

                                <p className={`text-xs font-semibold tracking-[0.2em] uppercase font-geist-mono mb-2 ${milestone.highlight ? 'text-emerald-400' : 'text-zinc-500'}`}>
                                    {milestone.label}
                                </p>
                                <h3 className={`text-xl text-white font-medium font-jakarta mb-3 transition-colors ${milestone.highlight ? 'group-hover:text-emerald-400' : ''}`}>
                                    {milestone.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed font-geist text-lg">
                                    {milestone.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
