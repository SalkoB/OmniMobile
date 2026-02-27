import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { MapPin, Phone, Clock, CheckCircle2, Wifi, Smartphone, MonitorPlay, MessageSquareText, Shield, Zap } from "lucide-react";
import { Helmet } from "react-helmet";

export default function StLouis() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What internet speeds are available in St. Louis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spectrum offers internet speeds up to 2 Gig in St. Louis, MO, perfect for gaming, 4K streaming, and multi-user households."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the best Spectrum store in St. Louis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Omni Mobile, located at 65 Fenton Plaza, Fenton, MO 63026, is your premier Spectrum Authorized Retailer serving the entire St. Louis metro area."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Spectrum Internet & Mobile in St. Louis, MO | Omni Mobile Authorized Retailer"
        description="Experience the fastest Spectrum Internet and Mobile services in St. Louis, MO. Visit your local Omni Mobile Authorized Retailer for exclusive bundles and expert local support."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border/50">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-foreground leading-tight tracking-tight">
                Spectrum Internet & Mobile in <span className="italic text-primary font-serif">St. Louis, MO</span> – Authorized Retailer
              </h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                Unlock premium connectivity with Spectrum Internet St. Louis and Spectrum Mobile St. Louis. As your dedicated Spectrum Authorized Retailer St. Louis partner, we provide tailored solutions for residential and business customers throughout the metro area.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg prose-slate max-w-none text-muted-foreground space-y-16">
              
              <div className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-foreground">Spectrum Internet in St. Louis</h2>
                <p>
                  High-speed internet is the backbone of modern life in the Gateway City. Whether you're working from home in Central West End or streaming the latest Cardinals game in Soulard, Spectrum Internet St. Louis delivers the bandwidth you need. With speeds starting at 300 Mbps and ranging up to 1 Gig, you can connect multiple devices simultaneously without the frustration of lag or buffering.
                </p>
                <p>
                  Unlike other providers, Spectrum offers fiber-powered reliability with no data caps. This means you can stream, game, and download to your heart's content. Our local experts at Omni Mobile in Fenton can help you determine which speed tier fits your lifestyle, ensuring you never pay for more than you need—or settle for less than you deserve.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-foreground">Spectrum Mobile in St. Louis</h2>
                <p>
                  Stay connected on the move with Spectrum Mobile St. Louis. Leveraging the nation's most reliable 5G network combined with a massive network of local WiFi hotspots, you'll experience seamless coverage from Forest Park to the Arch. Our mobile plans are designed for flexibility, offering both Unlimited and By The Gig options that save you significant money compared to traditional carriers.
                </p>
                <p>
                  When you visit our Fenton location, we make switching easy. We'll help you with device upgrades, plan transfers, and setting up your new Spectrum Mobile line in minutes. It's premium cellular service designed specifically for St. Louis residents who value both performance and price.
                </p>
              </div>

              <div className="p-8 bg-primary/5 rounded-3xl border border-primary/20 space-y-6">
                <h2 className="text-4xl font-display font-bold text-foreground">Internet + Mobile Bundles</h2>
                <p>
                  The secret to maximum savings is bundling. By combining Spectrum Internet and Mobile, you unlock exclusive pricing and simplified billing. Many St. Louis families find they can save hundreds of dollars annually by moving their cellular service to Spectrum while enjoying the fastest residential internet available.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>One convenient monthly bill for all services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>Exclusive bundle-only discounts and promotions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <span>Advanced WiFi features included in many packages</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-foreground">Serving the Greater St. Louis Metro Area</h2>
                <p>
                  Omni Mobile isn't just a store; we're a part of the community. From our Fenton headquarters, we proudly serve a wide radius including Kirkwood, Ballwin, Sunset Hills, and beyond. We understand the unique connectivity challenges and needs of St. Louis County residents.
                </p>
                <p>
                  Whether you're a small business owner in Clayton looking for dedicated fiber or a family in Mehlville looking for the best TV packages, our team provides the localized expertise that big-box retailers and online-only support simply can't match.
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-foreground">Why Visit a Local Spectrum Authorized Retailer</h2>
                <p>
                  In a world of automated phone menus and generic chatbots, face-to-face service matters. Visiting Omni Mobile, your local Spectrum Authorized Retailer St. Louis destination, ensures:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">Personalized Advice</h4>
                    <p>Get plan recommendations based on your actual usage and home size.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">Hands-on Demos</h4>
                    <p>Test the latest mobile devices and explore the Spectrum TV interface in person.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">Instant Activation</h4>
                    <p>Walk in with questions and walk out with a fully configured, working service.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-foreground">Ongoing Support</h4>
                    <p>Know exactly who to call when you have questions or want to upgrade.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-12 border-t border-border">
                <h2 className="text-4xl font-display font-bold text-foreground text-center">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  {[
                    { q: "Is Spectrum available in my St. Louis neighborhood?", a: "Spectrum has wide availability across the St. Louis metro area. Visit us in Fenton to check the specific serviceability for your address." },
                    { q: "Can I keep my phone number when switching to Spectrum Mobile?", a: "Yes! We specialize in seamless number porting so you can keep your existing St. Louis area number." },
                    { q: "Do you offer business internet services?", a: "Absolutely. We provide enterprise-grade solutions for businesses of all sizes throughout St. Louis County." }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="text-xl font-bold text-foreground font-display">{item.q}</h4>
                      <p>{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

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
