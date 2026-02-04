import React from 'react';

const SkillsMarquee = () => {
    const skills = [
        "Responsive Web Design",
        "Conversion-Focused Layouts",
        "Design Systems & Style Guides",
        "Interactive Prototypes",
        "Mobile-First UI",
        "High CCR Landing Pages",
        "UX Wireframes",
        "Information Architecture"
    ];

    return (
        <section className="border-y border-white/10 py-12 overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '1.3s' }}>
            <div className="w-full">
                <p className="text-base font-medium text-gray-500 text-center pb-10 font-geist">Crafting performance, conversion-focused experiences</p>

                {/* Infinite Marquee Container */}
                <div className="relative overflow-hidden w-full">
                    {/* Inner sliding wrapper */}
                    <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">

                        {/* First set of items */}
                        <div className="flex items-center gap-12 lg:gap-16 px-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="hover:text-white transition-colors whitespace-nowrap text-lg font-medium text-gray-300 tracking-tight font-geist">
                                    {skill}
                                </div>
                            ))}
                        </div>

                        {/* Duplicate set for seamless loop */}
                        <div className="flex items-center gap-12 lg:gap-16 px-6">
                            {skills.map((skill, index) => (
                                <div key={`dup-${index}`} className="hover:text-white transition-colors whitespace-nowrap text-lg font-medium text-gray-300 tracking-tight font-geist">
                                    {skill}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsMarquee;
