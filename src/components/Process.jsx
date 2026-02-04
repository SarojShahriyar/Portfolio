import React from 'react';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Strategy & Blueprint",
            description: "We start by defining the ecosystem. Whether it's web, mobile, or a marketing funnel, we map out the user journey and technical requirements."
        },
        {
            number: "02",
            title: "Design & Build",
            description: "I execute the vision. This involves crafting high-fidelity UIs, writing clean React/Native code, and setting up the backend infrastructure."
        },
        {
            number: "03",
            title: "Launch & Scale",
            description: "Deployment is just the beginning. I set up marketing campaigns, integrate analytics, and optimize the funnel for maximum conversion."
        }
    ];

    return (
        <section id="process" className="py-32 bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-3xl lg:text-5xl text-white font-semibold font-jakarta tracking-tight">
                        From concept to <br />
                        <span className="text-zinc-500">market dominance.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="group relative bg-black pt-8 md:pt-0">
                            {/* Dot identifier */}
                            <div className="hidden md:block absolute top-[28px] left-0 w-3 h-3 rounded-full bg-zinc-800 ring-4 ring-black group-hover:bg-emerald-500 transition-colors duration-300"></div>

                            <div className="text-6xl font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors duration-300 font-jakarta mb-6 select-none">
                                {step.number}
                            </div>
                            <h3 className="text-2xl text-white font-medium mb-4 font-jakarta group-hover:text-emerald-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed font-geist text-base max-w-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
