import React from 'react';

const Services = () => {
    return (
        <section className="pt-32 pb-24" id="work">
            <div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl text-white font-semibold tracking-tight font-jakarta mb-6">
                        Total Digital Solutions
                    </h2>
                    <p className="text-xl text-gray-400 font-geist max-w-2xl mx-auto">
                        I provide the complete stack of services needed to launch and grow a modern business.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Service 1: Web Platforms */}
                    <div className="group relative p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
                        </div>
                        <h3 className="text-2xl text-white font-medium mb-4 font-jakarta">Web Platforms</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-geist mb-6">
                            High-performance websites and web applications built on React and Next.js. I focus on speed, SEO, and conversion optimization.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Corporate & Marketing Sites
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> E-commerce Stores
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> SaaS Dashboards
                            </li>
                        </ul>
                    </div>

                    {/* Service 2: Mobile Engineering */}
                    <div className="group relative p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><line x1="12" x2="12.01" y1="18" y2="18" /></svg>
                        </div>
                        <h3 className="text-2xl text-white font-medium mb-4 font-jakarta">Mobile Engineering</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-geist mb-6">
                            Extend your reach to the App Store and Play Store. I build native-quality mobile apps that integrate seamlessly with your web platform.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> iOS & Android Apps
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Cross-Platform Development
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> App Store Deployment
                            </li>
                        </ul>
                    </div>

                    {/* Service 3: Growth Marketing */}
                    <div className="group relative p-8 rounded-3xl bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                        <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></svg>
                        </div>
                        <h3 className="text-2xl text-white font-medium mb-4 font-jakarta">Growth Marketing</h3>
                        <p className="text-gray-400 leading-relaxed text-sm font-geist mb-6">
                            I don't just build the car; I put fuel in it. I manage your marketing campaigns using advanced tools to ensure traffic and conversion.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Grow High Level Management
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Lead Generation Funnels
                            </li>
                            <li className="flex items-center gap-2 text-sm text-gray-300 font-geist">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Automated Campaigns
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
