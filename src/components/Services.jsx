import React from 'react';

const Services = () => {
    const capabilities = [
        {
            title: "Web Applications",
            accent: "blue",
            description: "Fast, responsive applications built with React — from marketing sites to full product dashboards, engineered for speed and maintainability.",
            items: ["Single-page applications", "E-commerce storefronts", "Dashboards & admin panels"],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
            )
        },
        {
            title: "Mobile Applications",
            accent: "purple",
            description: "Native-quality apps for Android and iOS that share logic with the web, built and taken all the way through store deployment.",
            items: ["Android & iOS apps", "Cross-platform with React Native", "App Store & Play Store releases"],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><line x1="12" x2="12.01" y1="18" y2="18" /></svg>
            )
        },
        {
            title: "APIs & Integrations",
            accent: "emerald",
            description: "The connective tissue behind the interface — backend services, third-party integrations, and automation that keep applications running.",
            items: ["REST API design & integration", "Auth, forms & data pipelines", "Workflow automation"],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5" /><path d="M8 3H3v5" /><path d="M21 3l-7 7" /><path d="M3 3l7 7" /><path d="M16 21h5v-5" /><path d="M8 21H3v-5" /><path d="M21 21l-7-7" /><path d="M3 21l7-7" /></svg>
            )
        }
    ];

    const accentStyles = {
        blue: { box: "bg-blue-500/10 text-blue-400", dot: "bg-blue-500" },
        purple: { box: "bg-purple-500/10 text-purple-400", dot: "bg-purple-500" },
        emerald: { box: "bg-emerald-500/10 text-emerald-400", dot: "bg-emerald-500" }
    };

    return (
        <section className="pt-32 pb-24" id="skills">
            <div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl text-white font-semibold tracking-tight font-jakarta mb-6">
                        What I Build
                    </h2>
                    <p className="text-xl text-gray-400 font-geist max-w-2xl mx-auto">
                        Complete applications — the interface people touch, the mobile experience in their pocket, and the services underneath.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {capabilities.map((cap) => (
                        <div key={cap.title} className="group relative p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${accentStyles[cap.accent].box}`}>
                                {cap.icon}
                            </div>
                            <h3 className="text-2xl text-white font-medium mb-4 font-jakarta">{cap.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-geist mb-6">
                                {cap.description}
                            </p>
                            <ul className="space-y-2">
                                {cap.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                        <span className={`w-1.5 h-1.5 rounded-full ${accentStyles[cap.accent].dot}`}></span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
