import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="text-3xl font-semibold text-white font-jakarta mb-12 text-center">
                    Trusted by founders & product teams
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Testimonial 1 */}
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-gray-300 font-geist leading-relaxed mb-6">
                            "Our old marketing site felt cluttered. After the redesign, CCR increased by <span className="text-white font-medium">more than 30%</span> in the first month."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500"></div>
                            <div>
                                <h4 className="text-white font-medium text-sm font-jakarta">Alex Brown</h4>
                                <p className="text-xs text-gray-500 font-geist">Founder, B2B SaaS</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-gray-300 font-geist leading-relaxed mb-6">
                            "Jordan quickly understood what our customers needed, simplified the flows, and gave us a design system our team could actually maintain."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500"></div>
                            <div>
                                <h4 className="text-white font-medium text-sm font-jakarta">Chris Rivera</h4>
                                <p className="text-xs text-gray-500 font-geist">Product Lead</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} className="w-4 h-4 text-emerald-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            ))}
                        </div>
                        <p className="text-gray-300 font-geist leading-relaxed mb-6">
                            "The collaboration was effortless. Jordan brought structure to an undefined project, communicated clearly, and delivered on time."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500"></div>
                            <div>
                                <h4 className="text-white font-medium text-sm font-jakarta">Maya Lee</h4>
                                <p className="text-xs text-gray-500 font-geist">Marketing Lead</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
