import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter Video",
    price: "$300–$500",
    description: "Perfect for getting started",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Pro Video",
    price: "$1,000–$1,500",
    description: "Most popular choice",
    gradient: "from-purple-500 to-pink-500",
    popular: true
  },
  {
    name: "Premium Video",
    price: "$4,000–$8,000",
    description: "Full premium experience",
    gradient: "from-orange-500 to-red-500"
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
            Pricing Overview
          </h2>
          <p className="text-2xl text-muted-foreground">
            Transparent pricing that fits your budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`bg-card p-8 rounded-3xl shadow-glow relative ${
                tier.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-primary text-white text-sm font-bold px-4 py-2 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.gradient} mb-6`} />
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-muted-foreground mb-4">{tier.description}</p>
              <div className="text-4xl font-bold text-foreground mb-6">{tier.price}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-card p-8 rounded-3xl shadow-glow"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Every Package Includes:</h3>
          <div className="space-y-4">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
