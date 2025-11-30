import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Fast turnaround (48–72 hours)",
  "Transparent pricing",
  "No agency overhead or delays",
  "Expert creators + AI precision"
];

const WhySection = () => {
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
            Why <span className="gradient-text">CustomVideos.ai</span>
          </h2>
          <p className="text-2xl sm:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed">
            High-Quality Video Production — Without the Slow, Expensive Agency Process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl text-muted-foreground mb-8 text-center">
            Most brands need video content but don't have the time, team, or budget to deal with traditional production studios.
          </p>
          <p className="text-xl text-foreground font-semibold mb-12 text-center">
            We built an easier, faster, more modern way.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-center gap-3 bg-card p-6 rounded-2xl shadow-glow"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
