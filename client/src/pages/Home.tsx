import { useState } from "react";
import { Header } from "@/components/Header";
import { BundleBuilder } from "@/components/BundleBuilder";
import { SEO } from "@/components/SEO";
import { useCreateLead } from "@/hooks/use-leads";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Zap, Smartphone, MonitorPlay, MessageSquareText, Shield, Clock, Phone } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import mapImg from "@assets/Screenshot_2026-02-22_at_11.37.37_AM_1771781876565.png";

export default function Home() {
  const { mutate: submitLead, isPending } = useCreateLead();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead(formData, {
      onSuccess: () => {
        toast({
          title: "Request Sent!",
          description: "A representative from Omni Mobile will contact you shortly.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      },
      onError: (err) => {
        toast({
          title: "Error",
          description: err.message,
          variant: "destructive"
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO />
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Top Internet provider in St. Louis
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-foreground leading-tight tracking-tight">
              Spectrum Internet & Mobile in <span className="italic text-primary font-serif">St. Louis, MO</span><br/>
              <span className="text-2xl md:text-3xl block mt-2">Wireless Made <span className="italic text-primary font-serif">Simple.</span></span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Your local Spectrum Authorized Retailer in Fenton, MO providing Spectrum Internet plans, Spectrum Mobile service, device upgrades, TV packages, and new activations for customers across the greater St. Louis metro area.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=65+Fenton+Plaza+Fenton+MO+63026"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold text-lg bg-primary text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
              <a 
                href="tel:636-496-7224"
                className="px-8 py-4 rounded-xl font-bold text-lg bg-card text-foreground border-2 border-border hover:border-primary/50 hover:bg-muted transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (636) 496-7224
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STORE NEAR YOU */}
      <section className="py-20 bg-card border-y border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-muted/30 rounded-3xl p-8 lg:p-12 border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Your Trusted Spectrum Authorized Retailer <span className="italic text-primary font-serif">Near St. Louis</span>
              </h2>
              <div className="text-lg text-muted-foreground leading-relaxed max-w-3xl space-y-4">
                <p>
                  Located in Fenton, Missouri, Omni Mobile is your go-to destination for all things Spectrum. Whether you're looking to switch internet providers, upgrade your mobile plan, or bundle your home entertainment services, our knowledgeable team is here to walk you through every option — face to face.
                </p>
                <p>
                  We proudly serve customers across St. Louis and the surrounding communities with personalized, in-person support you won't find online. From comparing plans and setting up new devices to resolving account questions, we make the process simple, fast, and stress-free.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground">Complete Connectivity <span className="italic text-primary font-serif">Solutions</span></h2>
            <p className="mt-4 text-xl text-muted-foreground">Everything you need from your cell phone store in Fenton.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Spectrum Internet", desc: "Fiber-powered speeds up to 2 Gigs for seamless streaming and gaming." },
              { icon: Smartphone, title: "Spectrum Mobile", desc: "Affordable data plans on a reliable 5G network." },
              { icon: MonitorPlay, title: "Spectrum TV", desc: "Stream, watch live TV and enjoy popular apps all in one place." },
              { icon: Phone, title: "Home Phone", desc: "Unlimited nationwide calling with crystal-clear connection." },
              { icon: MapPin, title: "Business Solutions", desc: "Internet, Voice, and Mobile built for your business." },
              { icon: Smartphone, title: "Devices & Accessories", desc: "Latest smartphones, tablets, and premium accessories." }
            ].map((srv, idx) => (
              <div key={idx} className="bg-card rounded-3xl p-8 shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <srv.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{srv.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why-us" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">
                Why Choose <span className="italic text-primary font-serif">Omni Mobile?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                As your premier Spectrum Authorized Retailer in St. Louis, we provide an elevated, hassle-free experience you won't find anywhere else.
              </p>
              
              <div className="space-y-4">
                {[
                  "Expert Local Support",
                  "Fast, Efficient Service",
                  "Authorized Spectrum Retailer",
                  "Ongoing Account Assistance"
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-lg font-medium text-foreground">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl" />
              <div className="relative bg-card border border-border/50 rounded-3xl p-8 shadow-2xl h-full min-h-[400px] flex flex-col justify-center">
                 <h3 className="text-2xl font-bold font-display text-center mb-8 text-foreground">The Omni Mobile Advantage</h3>
                 <div className="space-y-4">
                    {["Transparent Pricing", "No Hidden Fees", "Seamless Device Upgrades", "Easy Plan Transfers"].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="font-medium text-lg text-foreground">{benefit}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVING THE GREATER ST. LOUIS METRO AREA */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            <span className="italic text-primary font-serif">Serving</span> the Greater St. Louis Metro Area
          </h2>
          <p className="text-xl text-muted-foreground mb-12">Proudly helping customers across these communities.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Fenton", "St. Louis", "St. Louis County", "Kirkwood", "Ballwin",
              "Sunset Hills", "Arnold", "Affton", "Mehlville", "Oakville"
            ].map((city) => (
              <div key={city} className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
                <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-foreground">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIND US IN ST. LOUIS */}
      <section className="py-20 bg-muted/20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-foreground">Find Us in <span className="italic text-primary font-serif">St. Louis</span></h2>
            <p className="mt-4 text-xl text-muted-foreground">Visit our Fenton location for expert service.</p>
          </div>

          <div className="bg-card rounded-[2.5rem] p-8 border border-border shadow-xl">
            <div className="w-full mb-8">
              <iframe
                src="https://www.google.com/maps?q=65+Fenton+Plaza+Fenton+MO+63026&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl border border-border shadow-inner"
                title="Omni Mobile Location"
              />
              <div className="mt-8 flex justify-center">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=65+Fenton+Plaza+Fenton+MO+63026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl font-bold text-lg bg-primary text-primary-foreground shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-border/50">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">Address</h3>
                </div>
                <p className="text-muted-foreground ml-13">65 Fenton Plaza<br/>Fenton, MO 63026</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">Phone</h3>
                </div>
                <a href="tel:636-496-7224" className="text-primary hover:underline ml-13 font-medium text-lg">636-496-7224</a>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-foreground">Hours</h3>
                </div>
                <div className="text-muted-foreground ml-13 space-y-1">
                  <p>Monday – Friday: 10:00 AM – 7:00 PM</p>
                  <p>Saturday: 10:00 AM – 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / LEAD FORM */}
      <section id="contact" className="py-24 bg-card relative overflow-hidden border-t border-border/50">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-background rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-border flex flex-col lg:flex-row gap-16">
            
            <div className="lg:w-5/12 flex flex-col justify-center">
              <h2 className="text-4xl font-display font-bold text-foreground mb-6">Ready to <span className="italic text-primary font-serif">Upgrade?</span></h2>
              <p className="text-lg text-muted-foreground mb-8">
                Drop your details below or visit our cell phone store in Fenton. We'll help you find the perfect Spectrum package.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">65 Fenton Plaza<br/>Fenton, MO 63026</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Call Us</h4>
                    <a href="tel:636-496-7224" className="text-primary hover:underline font-medium">(636) 496-7224</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12">
              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-3xl border border-border shadow-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                      placeholder="(636) 555-0123"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">How can we help?</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200 resize-none"
                    placeholder="I'm interested in..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isPending}
                  className="w-full py-4 rounded-xl font-bold text-lg bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none transition-all duration-200"
                >
                  {isPending ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground py-12 text-center text-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-display font-bold text-2xl text-white mb-2">Omni Mobile</h3>
          <p className="text-white/60 mb-6">Spectrum Authorized Retailer near you</p>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Omni Mobile. All rights reserved.<br/>
            Serving St. Louis, Fenton, and St. Louis County.
          </p>
        </div>
      </footer>
    </div>
  );
}
