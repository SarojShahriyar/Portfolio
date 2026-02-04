import React from 'react';

const Contact = () => {
    return (
        <section className="py-24 bg-zinc-950 relative" id="contact">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(52,211,153,0.1),transparent)]"></div>

            <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl text-white font-semibold tracking-tight font-jakarta mb-4">
                        Ready to scale?
                    </h2>
                    <p className="text-gray-400 font-geist">
                        Tell me about your project and let's find the best way to help you grow.
                    </p>
                </div>

                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <form action="https://formsubmit.co/s.iqbal.saroj@gmail.com" method="POST" className="space-y-6">
                        <input type="hidden" name="_next" value="http://localhost:5173/thanks" />
                        <input type="hidden" name="_captcha" value="false" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300 font-geist">Name</label>
                                <input required id="name" name="name" type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-geist" placeholder="Jane Doe" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300 font-geist">Email</label>
                                <input required id="email" name="email" type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-geist" placeholder="jane@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300 font-geist">Project Details</label>
                            <textarea required id="message" name="message" rows="4" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all font-geist" placeholder="I'm looking to build a..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-100 transition-colors font-jakarta text-lg">
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-8 text-sm text-gray-400 font-geist">
                        <span>s.iqbal.saroj@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
