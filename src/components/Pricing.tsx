import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter Video",
    price: "$300–$500",
    description: "Perfect for getting started",
  },
  {
    name: "Pro Video",
    price: "$1,000–$1,500",
    description: "Most popular choice",
    popular: true
  },
  {
    name: "Premium Video",
    price: "$4,000–$8,000",
    description: "Full premium experience",
  }
];

const includes = [
  "Scriptwriting",
  "Editing",
  "Creative direction",
  "Professional revision round",
  "Full commercial rights"
];

const Pricing = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="section-label">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold mb-5 tracking-[-0.04em] leading-[1.1]">
            Pricing Overview
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Transparent pricing that fits your budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * index }}
              className={`bg-card p-8 rounded-2xl relative transition-all duration-500 ${
                tier.popular 
                  ? 'border-2 border-foreground shadow-dramatic scale-[1.02]' 
                  : 'border border-border/50 shadow-glow hover:shadow-elevated'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="bg-foreground text-background text-[11px] font-bold px-5 py-1.5 rounded-full tracking-[0.1em] uppercase">
                    Most Popular
                  </div>
                </div>
              )}
              <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-[0.15em]">{tier.name}</p>
              <div className="text-3xl sm:text-4xl font-extrabold text-foreground mb-2 tracking-[-0.04em]">{tier.price}</div>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-md mx-auto bg-card p-8 rounded-2xl card-surface"
        >
          <h3 className="text-lg font-bold mb-6 text-center">Every Package Includes:</h3>
          <div className="space-y-4">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3.5">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                  <Check className="w-3 h-3 text-background" strokeWidth={3} />
                </div>
                <span className="text-[15px] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
