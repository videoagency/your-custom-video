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
    <section className="section-padding relative overflow-hidden bg-muted/40">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 tracking-[-0.03em]">
            Pricing Overview
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Transparent pricing that fits your budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-background p-7 rounded-2xl relative border transition-all ${
                tier.popular 
                  ? 'border-foreground shadow-elevated ring-1 ring-foreground' 
                  : 'border-border/60 shadow-glow'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="bg-foreground text-background text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
                    Most Popular
                  </div>
                </div>
              )}
              <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">{tier.name}</p>
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2 tracking-tight">{tier.price}</div>
              <p className="text-sm text-muted-foreground">{tier.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-md mx-auto bg-background border border-border/60 p-7 rounded-2xl shadow-glow"
        >
          <h3 className="text-lg font-bold mb-5 text-center">Every Package Includes:</h3>
          <div className="space-y-3.5">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-foreground flex items-center justify-center">
                  <Check className="w-3 h-3 text-background" />
                </div>
                <span className="text-base">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
