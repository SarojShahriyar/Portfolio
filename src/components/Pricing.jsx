import React from 'react';

const Pricing = () => {
    return (
        <section className="pt-24 pb-32 border-t border-white/10 bg-black" id="pricing">
            <div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl text-white tracking-tight font-semibold font-jakarta mb-4">
                        Invest in Growth
                    </h2>
                    <p className="text-lg text-gray-400 font-geist max-w-xl mx-auto">
                        Transparent pricing packages designed to scale with your business needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* Card 1: Basic ($1.2k) */}
                    <div className="flex flex-col p-8 rounded-3xl bg-zinc-900 border border-white/10 transition-colors h-full">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white font-jakarta">Basic</h3>
                            <p className="text-sm text-gray-400 mt-2 font-geist">Essentials to get started.</p>
                        </div>
                        <div className="text-4xl font-bold text-white mb-6 font-geist">$1,200<span className="text-sm font-normal text-gray-500 block mt-1">one-time</span></div>

                        <div className="h-px bg-white/10 w-full mb-6"></div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Landing page",
                                "Responsive design",
                                "Light interactions",
                                "Google Analytics setup",
                                "Domain & hosting management",
                                "SSL Certificate confirmation",
                                "Contact form integration",
                                "2 revision rounds"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-geist">
                                    <svg className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-center font-medium transition-colors font-geist mt-auto">Get Started</a>
                    </div>

                    {/* Card 2: Growth ($2k) [RECOMMENDED] */}
                    <div className="flex flex-col p-8 rounded-3xl bg-zinc-800 border-2 border-emerald-500 relative transform md:-translate-y-4 shadow-2xl shadow-emerald-900/20 h-full">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1 rounded-full font-geist tracking-wide uppercase">Recommended</div>

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white font-jakarta">Growth</h3>
                            <p className="text-sm text-gray-300 mt-2 font-geist">Full digital capabilities.</p>
                        </div>

                        <div className="text-4xl font-bold text-white mb-6 font-geist">$2,000<span className="text-sm font-normal text-gray-400 block mt-1">one-time</span></div>

                        <div className="h-px bg-white/10 w-full mb-6"></div>

                        <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4 font-geist">All in Basic +</div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Custom website",
                                "Web/mobile application",
                                "AI agent (Auto-respond texts/calls)",
                                "CRM & Lead Integration (HubSpot/Mailchimp)",
                                "User Guide & Training (Recorded walkthrough)"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-white font-medium font-geist">
                                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mt-0.5 shrink-0">
                                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-black rounded-xl text-center font-bold transition-colors font-geist mt-auto">Scale Now</a>
                    </div>

                    {/* Card 3: Elite ($5k) */}
                    <div className="flex flex-col p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-white/20 transition-colors h-full">
                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-white font-jakarta">Elite</h3>
                            <p className="text-sm text-gray-400 mt-2 font-geist">Complete automation & brand.</p>
                        </div>

                        <div className="text-4xl font-bold text-white mb-6 font-geist">$5,000<span className="text-sm font-normal text-gray-500 block mt-1">one-time/retainer</span></div>

                        <div className="h-px bg-white/10 w-full mb-6"></div>

                        <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-4 font-geist">All in Growth +</div>
                        <ul className="space-y-4 mb-8 flex-1">
                            {[
                                "Meta/Google ad services",
                                "AI Ops (n8n): Automate 10+ hrs/wk",
                                "Social media handling",
                                "Full Brand Identity Suite",
                                "Monthly ROI Reporting Dashboard"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-300 font-geist">
                                    <svg className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-center font-medium transition-colors font-geist mt-auto">Partner Up</a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;
