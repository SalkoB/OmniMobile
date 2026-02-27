import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Check, Wifi, Smartphone, Tv, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceMap = {
  internet: boolean;
  mobile: boolean;
  tv: boolean;
  homePhone: boolean;
};

export function BundleBuilder() {
  const { toast } = useToast();
  const [services, setServices] = useState<ServiceMap>({
    internet: true,
    mobile: false,
    tv: false,
    homePhone: false,
  });

  const toggleService = (key: keyof ServiceMap) => {
    setServices((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      
      // Validation: Mobile or Home Phone cannot be standalone
      const hasStandalone = (next.mobile || next.homePhone) && !next.internet && !next.tv;

      if (hasStandalone) {
        toast({
          title: "Selection Required",
          description: "Mobile and Home Phone services cannot be purchased standalone. We've included Internet for you.",
          variant: "destructive",
        });
        return { ...next, internet: true };
      }

      return next;
    });
  };

  const serviceOptions = [
    { key: "internet", label: "Internet", icon: Wifi, desc: "Ultra-fast speeds" },
    { key: "mobile", label: "Mobile", icon: Smartphone, desc: "Nationwide 5G" },
    { key: "tv", label: "TV", icon: Tv, desc: "Live sports & news" },
    { key: "homePhone", label: "Home Phone", icon: Phone, desc: "Unlimited calling" },
  ] as const;

  const getBundleCards = () => {
    const { internet: i, mobile: m, tv: t, homePhone: p } = services;
    
    // We will construct 3 tiers based on selections
    const cards = [
      { id: 'tier1', title: "", price: 0, specs: [] as string[] },
      { id: 'tier2', title: "", price: 0, specs: [] as string[] },
      { id: 'tier3', title: "", price: 0, specs: [] as string[] },
    ];

    if (i && !t) {
      // Internet or Internet + Mobile
      cards[0].title = m ? "Internet + Mobile" : "Internet Advantage";
      cards[0].price = 30;
      cards[0].specs = [
        "Fiber-Powered Internet",
        "100 Mbps Internet – no data caps",
        m ? "Unlimited Mobile Line included for a full year at no cost" : "",
        m ? "Unlimited talk, text and data (reduced speeds at 30 GB)" : ""
      ];
      
      cards[1].title = m ? "Internet + Mobile" : "Internet Premier";
      cards[1].price = 50;
      cards[1].specs = [
        "Fiber-Powered Internet",
        "500 Mbps Internet – no data caps",
        m ? "Unlimited Mobile Line included for a full year at no cost" : "Advanced WiFi included",
        m ? "Unlimited talk, text and data (reduced speeds at 30 GB)" : ""
      ];
      
      cards[2].title = m ? "Internet + Mobile" : "Internet Gig";
      cards[2].price = 70;
      cards[2].specs = [
        "Fiber-Powered Internet",
        "1 Gig Internet – no data caps",
        "Advanced WiFi included",
        m ? "Unlimited Mobile Line included for a full year at no cost" : "",
        m ? "Unlimited talk, text and data (reduced speeds at 30 GB)" : ""
      ];
    } else if (!i && t) {
      // TV or TV + Voice
      cards[0].title = p ? "TV + Voice" : "TV Select Signature";
      cards[0].price = p ? 130 : 115;
      cards[0].specs = [
        "150+ channels and streaming apps included",
        "Xumo Stream Box included when bundled with Internet",
        p ? "Unlimited nationwide calling" : "",
        p ? "Instant tracing to 911 services" : ""
      ];
      
      cards[1].title = p ? "TV + Voice" : "TV Select Plus";
      cards[1].price = p ? 140 : 125;
      cards[1].specs = [
        "160+ channels, including more sports and streaming apps",
        "Xumo Stream Box included when bundled with Internet",
        p ? "Unlimited nationwide calling" : "",
        p ? "Instant tracing to 911 services" : ""
      ];
      
      cards[2].title = p ? "TV + Voice" : "TV Platinum";
      cards[2].price = p ? 175 : 160;
      cards[2].specs = [
        "230+ channels, including Sports View, Entertainment +, STARZ and streaming apps",
        "Xumo Stream Box included when bundled with Internet",
        p ? "Unlimited nationwide calling" : "",
        p ? "Instant tracing to 911 services" : ""
      ];
    } else if (i && t) {
      // Internet + TV combos
      const titlePrefix = `Internet + TV${m ? ' + Mobile' : ''}${p ? ' + Voice' : ''}`;
      cards[0].title = titlePrefix;
      cards[0].price = p ? 80 : 65;
      cards[0].specs = [
        "100 Mbps Internet – no data caps",
        "85+ popular TV channels",
        "Xumo Stream Box included when bundled with Internet",
        m ? "Unlimited Mobile Line included for a full year at no cost" : "",
        p ? "Unlimited nationwide calling" : ""
      ];
      
      cards[1].title = titlePrefix;
      cards[1].price = p ? (m ? 90 : 160) : (m ? 75 : 145);
      cards[1].specs = [
        "500 Mbps Internet – no data caps",
        "Advanced WiFi is included",
        "150+ channels and streaming apps included",
        m ? "Unlimited Mobile Line included for a full year at no cost" : "",
        p ? "Unlimited nationwide calling" : ""
      ];
      
      cards[2].title = titlePrefix;
      cards[2].price = p ? 170 : (m ? 155 : 200);
      cards[2].specs = [
        "1 Gig Internet – no data caps",
        "Advanced WiFi included",
        "230+ channels, including Sports View, Entertainment +, STARZ and streaming apps",
        m ? "Unlimited Mobile Line included for a full year at no cost" : "",
        p ? "Unlimited nationwide calling" : ""
      ];
    }

    return cards;
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Build Your <span className="text-primary italic font-serif">Perfect Bundle</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the tiles below to see our best deals for bundling services.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-12">
          {/* Toggles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
            {serviceOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = services[opt.key];
              return (
                <button
                  key={opt.key}
                  onClick={() => toggleService(opt.key)}
                  className={`relative p-6 rounded-2xl border-2 text-center transition-all duration-300 flex flex-col items-center justify-center gap-4 ${
                    isSelected 
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" 
                      : "border-border bg-card hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isSelected ? "text-primary" : "text-muted-foreground"}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">{opt.label}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="w-full mt-8">
             <h3 className="text-3xl font-display font-bold text-foreground text-center mb-8">Choose your bundle</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getBundleCards().map((card) => (
                  <div key={card.id} className="bg-card rounded-3xl p-8 border border-border shadow-lg flex flex-col">
                    <h4 className="text-xl font-bold font-display text-foreground">{card.title}</h4>
                    <div className="mt-4 mb-6">
                      <span className="text-4xl font-extrabold text-foreground">${card.price}</span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                    
                    <button className="w-full py-3 mb-8 rounded-full font-bold text-primary-foreground bg-[#0061e0] hover:bg-[#0052cc] transition-colors">
                      Select
                    </button>
                    
                    <div className="space-y-4 flex-1">
                      {card.specs.filter(s => s).map((spec, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
