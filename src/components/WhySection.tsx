import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Fast turnaround (7–14 days)",
  "Transparent pricing",
  "No agency overhead or delays",
  "Expert creators + AI precision"
];

const WhySection = () => {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-[-0.03em]">
            Why CustomVideos.ai
          </h2>
          <p className="text-xl sm:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            High-Quality Video Production — Without the Slow, Expensive Agency Process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg text-muted-foreground mb-6 text-center leading-relaxed">
            Most brands need video content but don't have the time, team, or budget to deal with traditional production studios.
          </p>
          <p className="text-lg text-foreground font-semibold mb-12 text-center">
            We built an easier, faster, more modern way.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="flex items-center gap-3.5 bg-background p-5 rounded-2xl shadow-elevated"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-foreground flex items-center justify-center">
                  <Check className="w-4 h-4 text-background" />
                </div>
                <span className="text-base font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
